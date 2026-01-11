const vscode = require('vscode');

let focusModeEnabled = true;
let statusBarItem;
let closeTimers = new Map();

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Antigravity Focus Mode is now active!');

    // Get configuration
    const config = vscode.workspace.getConfiguration('antigravityFocus');
    focusModeEnabled = config.get('enabled', true);

    // Create status bar item
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.command = 'antigravityFocus.toggle';
    updateStatusBar();
    statusBarItem.show();
    context.subscriptions.push(statusBarItem);

    // Register commands
    context.subscriptions.push(
        vscode.commands.registerCommand('antigravityFocus.enable', () => {
            focusModeEnabled = true;
            updateStatusBar();
            vscode.window.showInformationMessage('Antigravity Focus Mode: ENABLED');
            closeAllEditors();
            maximizeChatPanel();
        }),

        vscode.commands.registerCommand('antigravityFocus.disable', () => {
            focusModeEnabled = false;
            updateStatusBar();
            vscode.window.showInformationMessage('Antigravity Focus Mode: DISABLED');
            clearAllTimers();
        }),

        vscode.commands.registerCommand('antigravityFocus.toggle', () => {
            focusModeEnabled = !focusModeEnabled;
            updateStatusBar();
            vscode.window.showInformationMessage(
                `Antigravity Focus Mode: ${focusModeEnabled ? 'ENABLED' : 'DISABLED'}`
            );
            if (focusModeEnabled) {
                closeAllEditors();
                maximizeChatPanel();
            } else {
                clearAllTimers();
            }
        }),

        vscode.commands.registerCommand('antigravityFocus.closeAllEditors', () => {
            closeAllEditors();
        }),

        vscode.commands.registerCommand('antigravityFocus.maximizeChat', () => {
            maximizeChatPanel();
        })
    );

    // Listen for document open events
    context.subscriptions.push(
        vscode.window.onDidChangeActiveTextEditor((editor) => {
            if (!focusModeEnabled) return;

            const config = vscode.workspace.getConfiguration('antigravityFocus');
            if (!config.get('closeTabs', true)) return;

            if (editor && editor.document) {
                scheduleTabClose(editor.document);
            }
        })
    );

    // Listen for new tabs opening
    context.subscriptions.push(
        vscode.workspace.onDidOpenTextDocument((document) => {
            if (!focusModeEnabled) return;

            const config = vscode.workspace.getConfiguration('antigravityFocus');
            if (!config.get('closeTabs', true)) return;

            scheduleTabClose(document);
        })
    );

    // Auto-maximize chat on startup if enabled
    if (config.get('autoMaximizeChat', true) && focusModeEnabled) {
        // Delay to allow VS Code to fully initialize
        setTimeout(() => {
            maximizeChatPanel();
            closeAllEditors();
        }, 1500);
    }

    // Configuration change listener
    context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration((e) => {
            if (e.affectsConfiguration('antigravityFocus')) {
                const newConfig = vscode.workspace.getConfiguration('antigravityFocus');
                focusModeEnabled = newConfig.get('enabled', true);
                updateStatusBar();
            }
        })
    );
}

function updateStatusBar() {
    if (focusModeEnabled) {
        statusBarItem.text = '$(eye) Focus ON';
        statusBarItem.tooltip = 'Antigravity Focus Mode is ENABLED (click to toggle)';
        statusBarItem.backgroundColor = undefined;
    } else {
        statusBarItem.text = '$(eye-closed) Focus OFF';
        statusBarItem.tooltip = 'Antigravity Focus Mode is DISABLED (click to toggle)';
        statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground');
    }
}

function shouldKeepOpen(document) {
    const config = vscode.workspace.getConfiguration('antigravityFocus');
    const keepOpenPatterns = config.get('keepOpenPatterns', []);

    const filePath = document.uri.fsPath;
    const fileName = document.fileName;

    // Always keep unsaved files
    if (document.isUntitled) return true;

    // Always keep dirty (modified) files
    if (document.isDirty) return true;

    // Check against keep-open patterns
    for (const pattern of keepOpenPatterns) {
        if (vscode.languages.match({ pattern }, document) > 0) {
            return true;
        }
        // Simple wildcard matching
        if (fileName.includes(pattern.replace(/\*/g, '')) ||
            filePath.includes(pattern.replace(/\*/g, ''))) {
            return true;
        }
    }

    return false;
}

function scheduleTabClose(document) {
    if (shouldKeepOpen(document)) return;

    const docUri = document.uri.toString();

    // Clear existing timer for this document
    if (closeTimers.has(docUri)) {
        clearTimeout(closeTimers.get(docUri));
    }

    const config = vscode.workspace.getConfiguration('antigravityFocus');
    const delay = config.get('autoCloseDelay', 2000);
    const showNotifications = config.get('showNotifications', false);

    // Schedule close
    const timer = setTimeout(async () => {
        closeTimers.delete(docUri);

        // Find the tab and close it
        const tabs = vscode.window.tabGroups.all.flatMap(group => group.tabs);
        const tab = tabs.find(t => {
            if (t.input instanceof vscode.TabInputText) {
                return t.input.uri.toString() === docUri;
            }
            return false;
        });

        if (tab) {
            try {
                await vscode.window.tabGroups.close(tab);
                if (showNotifications) {
                    vscode.window.setStatusBarMessage(`Focus Mode: Closed ${document.fileName.split(/[\\/]/).pop()}`, 2000);
                }
            } catch (err) {
                // Tab might already be closed or have unsaved changes
                console.log('Could not close tab:', err.message);
            }
        }
    }, delay);

    closeTimers.set(docUri, timer);
}

function clearAllTimers() {
    closeTimers.forEach((timer) => clearTimeout(timer));
    closeTimers.clear();
}

async function closeAllEditors() {
    try {
        await vscode.commands.executeCommand('workbench.action.closeAllEditors');
    } catch (err) {
        console.log('Could not close all editors:', err.message);
    }
}

async function maximizeChatPanel() {
    try {
        // Close the sidebar to give more space to chat
        await vscode.commands.executeCommand('workbench.action.closeSidebar');

        // Focus on the panel (where chat usually is)
        await vscode.commands.executeCommand('workbench.action.focusPanel');

        // Maximize the panel
        await vscode.commands.executeCommand('workbench.action.toggleMaximizedPanel');

        // Try to focus Gemini chat specifically
        try {
            await vscode.commands.executeCommand('geminicodeassist.showChatView');
        } catch (e) {
            // Gemini command might not exist, that's okay
        }
    } catch (err) {
        console.log('Could not maximize chat panel:', err.message);
    }
}

function deactivate() {
    clearAllTimers();
    if (statusBarItem) {
        statusBarItem.dispose();
    }
}

module.exports = {
    activate,
    deactivate
};
