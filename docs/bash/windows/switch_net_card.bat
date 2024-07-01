::如何在Windows系统中使用netsh命令行工具禁用或启用本地连接、无线网络连接以及以太网等网卡

@REM 使用UTF-8
chcp 65001

@echo off
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
cd /d "%~dp0"
echo Administrator privileges have been obtained

:: 自动切换
netsh interface show interface "以太网" 
@REM netsh interface show interface "以太网" | find "管理状态: 已禁用" >nul && (
netsh interface show interface "以太网" | find "Administrative state: Disabled" >nul && (
  echo * Enabling Local connection
  netsh interface set interface name="以太网" admin=enabled
  netsh interface set interface name="WLAN" admin=disabled
) || (
  echo * Enabling Wireless connection
  netsh interface set interface name="以太网" admin=disabled
  netsh interface set interface name="WLAN" admin=enabled
)
netsh interface show interface
pause
exit

:: 手动切换
@REM echo * Switching between local and wireless network, please enter a character
@REM netsh interface show interface
@REM echo.
@REM set /p input= Local (L) Wireless (W): 
@REM if "%input%"=="L" goto Y 
@REM if "%input%"=="W" goto N 

@REM :Y
@REM echo * Enabling Local connection
@REM netsh interface set interface name="WLAN" admin=disabled
@REM netsh interface set interface name="以太网" admin=enabled
@REM pause 
@REM exit 

@REM :N
@REM echo * Enabling Wireless connection
@REM netsh interface set interface name="以太网" admin=disabled
@REM netsh interface set interface name="WLAN" admin=enabled
@REM pause
@REM exit