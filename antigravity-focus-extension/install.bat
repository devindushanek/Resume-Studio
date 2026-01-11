@echo off
echo ========================================
echo Antigravity Focus Mode - Installer
echo ========================================
echo.

set "SOURCE=%~dp0"
set "TARGET=%USERPROFILE%\.vscode\extensions\antigravity-focus"

echo Installing extension to: %TARGET%
echo.

if exist "%TARGET%" (
    echo Removing existing installation...
    rmdir /s /q "%TARGET%"
)

echo Copying extension files...
xcopy "%SOURCE%*" "%TARGET%\" /E /I /Y /Q

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo Please restart VS Code/Antigravity for the extension to load.
echo.
echo Quick Start:
echo   - Look for "Focus ON/OFF" in the status bar (bottom right)
echo   - Click it to toggle Focus Mode
echo   - Use Ctrl+Shift+F12 to toggle via keyboard
echo.
pause
