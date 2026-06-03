@echo off
setlocal
cd /d "%~dp0"
set "PORT=%~1"
if "%PORT%"=="" set "PORT=8765"
echo SmartUrbanity local preview
echo Serving: %CD%
echo Open:    http://127.0.0.1:%PORT%/questionnaires/SmartUrbanity/index.html
echo Press Ctrl+C to stop.
python -m http.server %PORT% --bind 127.0.0.1
