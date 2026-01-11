---
description: Enable Antigravity Focus Mode - minimal distractions, chat-focused workflow
---

# Antigravity Focus Mode Workflow

This workflow sets up VS Code/Antigravity for a chat-focused experience with minimal distractions.

## Quick Start

// turbo-all

1. Open the Antigravity Focus workspace:
```powershell
code "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\antigravity-focus.code-workspace"
```

2. The extension will automatically:
   - Close any files that open in the editor (after 2.5 seconds)
   - Maximize the chat panel
   - Hide the activity bar

## Manual Controls

### Keyboard Shortcuts
| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+F12` | Toggle Focus Mode on/off |
| `Ctrl+Shift+W` | Close all editors immediately |
| `Ctrl+Shift+C` | Maximize chat panel |
| `Ctrl+Shift+M` | Toggle panel maximized |
| `Ctrl+Shift+G` | Focus Gemini chat |
| `Escape` | Close active editor (when not selecting) |

### Status Bar
Look for "👁 Focus ON" or "👁 Focus OFF" in the bottom-right status bar. Click to toggle.

## Configuration

To adjust settings, open VS Code Settings (`Ctrl+,`) and search for "Antigravity Focus":

- `antigravityFocus.enabled` - Enable/disable focus mode
- `antigravityFocus.autoCloseDelay` - Delay before closing tabs (default: 2500ms)
- `antigravityFocus.closeTabs` - Toggle auto-close behavior
- `antigravityFocus.autoMaximizeChat` - Maximize chat on startup

## Temporarily Keep a File Open

If you need to review a file:
1. Make any change to it (even a space) - dirty files are never auto-closed
2. Or disable Focus Mode temporarily with `Ctrl+Shift+F12`

## Multi-Root Workspace

The workspace includes these folders to reduce permission prompts:
- 🚀 AI Agent Workspace (main)
- 📁 Documents
- 🖥️ Desktop  
- 📥 Downloads
