const vscode = require('vscode');

let focusModeEnabled = true;
let statusBarItem;
let closeTimers = new Map();

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Antigravity Focus Mode is now active!');

    const config = vscode.workspace.getConfiguration('antigravityFocus');
    focusModeEnabled = config.get('enabled', true);

    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.command = 'antigravityFocus.toggle';
    updateStatusBar();
    statusBarItem.show();
    context.subscriptions.push(statusBarItem);

    context.subscriptions.push(
        vscode.commands.registerCommand('antigravityFocus.enable', () => {
            focusModeEnabled = true;
            updateStatusBar();
            cleanMainWindow();
        }),

        vscode.commands.registerCommand('antigravityFocus.disable', () => {
            focusModeEnabled = false;
            updateStatusBar();
            clearAllTimers();
        }),

        vscode.commands.registerCommand('antigravityFocus.toggle', () => {
            focusModeEnabled = !focusModeEnabled;
            updateStatusBar();
            if (focusModeEnabled) {
                cleanMainWindow();
            } else {
                clearAllTimers();
            }
        }),

        vscode.commands.registerCommand('antigravityFocus.cleanWindow', () => {
            cleanMainWindow();
        }),

        vscode.commands.registerCommand('antigravityFocus.resetLayout', () => {
            resetLayout();
        })
    );

    // Listen for document open events to auto-close them
    context.subscriptions.push(
        vscode.window.onDidChangeActiveTextEditor((editor) => {
            if (!focusModeEnabled) return;
            if (editor && editor.document) {
                scheduleTabClose(editor.document);
            }
        })
    );

    context.subscriptions.push(
        vscode.workspace.onDidOpenTextDocument((document) => {
            if (!focusModeEnabled) return;
            scheduleTabClose(document);
        })
    );

    // Initial clean on startup
    if (focusModeEnabled) {
        // Run immediately
        cleanMainWindow();

        // Run repeatedly for the first few seconds to fight startup layout restoration
        let attempts = 0;
        const interval = setInterval(() => {
            cleanMainWindow();
            attempts++;
            if (attempts >= 5) clearInterval(interval);
        }, 500);
    }
}

async function cleanMainWindow() {
    try {
        // 1. Close all editors to free up memory
        await vscode.commands.executeCommand('workbench.action.closeAllEditors');

        // 2. Hide all UI elements to reduce rendering overhead
        await vscode.commands.executeCommand('workbench.action.closeSidebar');
        await vscode.commands.executeCommand('workbench.action.closePanel');
        await vscode.commands.executeCommand('workbench.action.closeAuxiliaryBar');

        // 3. Ensure tabs are hidden
        await vscode.workspace.getConfiguration().update('workbench.editor.showTabs', 'none', vscode.ConfigurationTarget.Global);

    } catch (err) {
        console.log('Clean Window Error:', err.message);
    }
}

function scheduleTabClose(document) {
    // Don't close settings or keybindings
    const fileName = document.fileName.toLowerCase();
    if (fileName.includes('settings.json') || fileName.includes('keybindings.json') || fileName.includes('.code-workspace')) {
        return;
    }

    const docUri = document.uri.toString();
    if (closeTimers.has(docUri)) return;

    const timer = setTimeout(async () => {
        closeTimers.delete(docUri);
        const tabs = vscode.window.tabGroups.all.flatMap(group => group.tabs);
        const tab = tabs.find(t => t.input && t.input.uri && t.input.uri.toString() === docUri);
        if (tab && !tab.isDirty) {
            await vscode.window.tabGroups.close(tab);
        }
    }, 1000); // Aggressive 1s close

    closeTimers.set(docUri, timer);
}

function updateStatusBar() {
    statusBarItem.text = focusModeEnabled ? '$(eye) Focus ON' : '$(eye-closed) Focus OFF';
}

function clearAllTimers() {
    closeTimers.forEach((timer) => clearTimeout(timer));
    closeTimers.clear();
}

async function resetLayout() {
    await vscode.commands.executeCommand('workbench.action.showSidebar');
    await vscode.workspace.getConfiguration().update('workbench.editor.showTabs', 'multiple', vscode.ConfigurationTarget.Global);
}

function deactivate() { }

module.exports = { activate, deactivate };
