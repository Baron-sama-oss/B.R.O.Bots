@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>nul
if errorlevel 1 (
  echo Python was not found. Install Python 3 or run a local HTTP server for this folder.
  pause
  exit /b 1
)
start "Website local server" cmd /k py -m http.server 8000 --bind 127.0.0.1
for /l %%i in (1,1,10) do (
  powershell -NoProfile -Command "try { (Invoke-WebRequest -UseBasicParsing http://127.0.0.1:8000/ -TimeoutSec 1).StatusCode | Out-Null; exit 0 } catch { exit 1 }" >nul 2>nul
  if not errorlevel 1 goto ready
  timeout /t 1 /nobreak >nul
)
:ready
start "" http://127.0.0.1:8000/Index.html
