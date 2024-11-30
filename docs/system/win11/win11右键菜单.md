## 回退win10样式

1. cmd
```cmd
reg add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve
```

2. 重启Windows资源管理器生效：
```
taskkill /f /im explorer.exe & start explorer.exe
```

## 恢复win11样式

1. cmd
```cmd
reg delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}" /f
```

2. 重启Windows资源管理器生效：
```
taskkill /f /im explorer.exe & start explorer.exe
```