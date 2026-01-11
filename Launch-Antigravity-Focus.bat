@echo off
:: =============================================
:: Antigravity Focus Mode Launcher
:: =============================================
:: Opens Antigravity with the focus-optimized workspace

echo Starting Antigravity Focus Mode...

:: Open the focus workspace using the Antigravity shortcut
start "" "C:\Users\devin\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Antigravity\Antigravity.lnk" "c:\Users\devin\Documents\Professional\DevLabs\AI Agent Workspace\antigravity-focus.code-workspace"

echo.
echo Workspace opened in Antigravity! 
echo.
echo Quick Reference:
echo   Ctrl+Shift+F12  = Toggle Focus Mode
echo   Ctrl+Shift+W    = Close all editors
echo   Ctrl+Shift+C    = Maximize chat
echo   Ctrl+Shift+G    = Focus Gemini chat
echo.
pause
