# Antigravity Focus Mode Extension

A VS Code extension designed to enhance your AI chat experience by automatically managing editor tabs and maximizing the chat panel.

## Features

### 🎯 Auto-Close Tabs
When Focus Mode is enabled, files that are opened (e.g., when Antigravity makes edits) are automatically closed after a configurable delay. This keeps your workspace clean and reduces visual clutter.

### 💬 Maximize Chat Panel
Automatically or manually maximize the Gemini/Antigravity chat panel to take up more screen space.

### 📊 Status Bar Toggle
A convenient status bar item shows the current Focus Mode state and allows quick toggling with a single click.

## Commands

| Command | Description | Keyboard Shortcut |
|---------|-------------|-------------------|
| `Antigravity Focus: Enable Focus Mode` | Enable auto-close and chat maximization | - |
| `Antigravity Focus: Disable Focus Mode` | Disable auto-close, keep tabs open | - |
| `Antigravity Focus: Toggle Focus Mode` | Toggle between enabled/disabled | `Ctrl+Shift+F12` |
| `Antigravity Focus: Close All Editors Now` | Immediately close all editor tabs | `Ctrl+Shift+W` |
| `Antigravity Focus: Maximize Chat Panel` | Maximize the chat/panel area | - |

## Configuration

Open Settings (`Ctrl+,`) and search for "Antigravity Focus" to configure:

| Setting | Default | Description |
|---------|---------|-------------|
| `antigravityFocus.enabled` | `true` | Enable/disable Focus Mode |
| `antigravityFocus.autoCloseDelay` | `2000` | Milliseconds before auto-closing a tab |
| `antigravityFocus.keepOpenPatterns` | `["**/.vscode/settings.json"]` | Files to never auto-close |
| `antigravityFocus.autoMaximizeChat` | `true` | Maximize chat on VS Code startup |
| `antigravityFocus.closeTabs` | `true` | Enable automatic tab closing |
| `antigravityFocus.showNotifications` | `false` | Show status bar messages when tabs close |

## Installation

### Option 1: Install from VSIX (Recommended)
1. Open VS Code
2. Open Command Palette (`Ctrl+Shift+P`)
3. Type "Extensions: Install from VSIX..."
4. Select the `antigravity-focus-1.0.0.vsix` file

### Option 2: Development Mode
1. Open this folder in VS Code
2. Press `F5` to launch a new VS Code window with the extension loaded

### Option 3: Copy to Extensions Folder
1. Copy the entire `antigravity-focus-extension` folder to:
   - Windows: `%USERPROFILE%\.vscode\extensions\`
   - macOS: `~/.vscode/extensions/`
   - Linux: `~/.vscode/extensions/`
2. Rename the folder to `antigravity-focus`
3. Restart VS Code

## Usage Tips

1. **Quick Toggle**: Click the status bar item (shows "👁 Focus ON/OFF") to toggle
2. **Keep Important Files**: Add patterns to `keepOpenPatterns` for files you never want auto-closed
3. **Adjust Timing**: Increase `autoCloseDelay` if you need more time to review files before they close
4. **Manual Override**: When Focus Mode is ON, you can still prevent a file from closing by making changes to it (dirty files are never auto-closed)

## How It Works

1. **Tab Monitoring**: The extension listens for new tabs/documents being opened
2. **Delay Timer**: When a tab opens, a timer starts (default 2 seconds)
3. **Smart Filtering**: Unsaved files, dirty files, and files matching `keepOpenPatterns` are never closed
4. **Auto-Close**: After the delay, the tab is closed automatically
5. **Chat Maximization**: On startup (if enabled), the chat panel is maximized for maximum focus

## Troubleshooting

**Q: Files aren't closing automatically**
- Check that Focus Mode is enabled (status bar shows "Focus ON")
- Check that `closeTabs` is set to `true` in settings
- Files with unsaved changes are never auto-closed

**Q: I want to keep a file open temporarily**
- Simply make any change to the file (even a space) - dirty files are never auto-closed
- Or disable Focus Mode temporarily with the status bar toggle

**Q: The chat panel doesn't maximize**
- Try running the command manually: "Antigravity Focus: Maximize Chat Panel"
- The Gemini Code Assist extension must be installed and active

---

Made for a focused AI-assisted coding experience! 🚀
