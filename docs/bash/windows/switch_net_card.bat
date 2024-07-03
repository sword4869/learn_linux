::如何在Windows系统中使用netsh命令行工具禁用或启用本地连接、无线网络连接以及以太网等网卡

@REM 使用UTF-8
chcp 65001

@echo off
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
cd /d "%~dp0"
echo Administrator privileges have been obtained

:: 自动切换
@REM netsh interface show interface "以太网" 
@REM @REM netsh interface show interface "以太网" | find "管理状态: 已禁用" >nul && (
@REM netsh interface show interface "以太网" | find "Administrative state: Disabled" >nul && (
@REM   echo * Enabling Local connection
@REM   netsh interface set interface name="以太网" admin=enabled
@REM   netsh interface set interface name="WLAN" admin=disabled
@REM ) || (
@REM   echo * Enabling Wireless connection
@REM   netsh interface set interface name="以太网" admin=disabled
@REM   netsh interface set interface name="WLAN" admin=enabled
@REM )
@REM netsh interface show interface
@REM pause
@REM exit

:: 手动切换
echo * Switching between local and wireless network, please enter a character
netsh interface show interface
echo.
set /p input= 以太网(1) or WLAN(2) or 手机(3): 
if "%input%"=="1" (
    echo * 以太网
    echo.
    netsh interface set interface name="以太网" admin=enabled
    netsh interface set interface name="WLAN" admin=disabled
) else if "%input%"=="2" (
    echo * WLAN
    echo.
    netsh interface set interface name="WLAN" admin=enabled
    netsh interface set interface name="以太网" admin=disabled
) else if "%input%"=="3" (
    echo * Phone
    echo.
    netsh interface set interface name="以太网 2" admin=enabled
    netsh interface set interface name="以太网" admin=disabled
    netsh interface set interface name="WLAN" admin=disabled
)

netsh interface show interface
pause
exit