查看当前 PowerShell 的环境配置：
```powershell
Get-ExecutionPolicy
```
改变当前的 PowerShell 环境的权限设置（注意，此命令需要在管理员权限的 powershell 下运行）
```powershell
Set-ExecutionPolicy unrestricted
```

Unrestricted是比RemoteSigned更开放的权限
- Restricted——默认的设置， 不允许任何script运行
- AllSigned——只能运行经过数字证书签名的script
- RemoteSigned——运行本地的script不需要数字签名，但是运行从网络上下载的script就必须要有数字签名
- Unrestricted——允许所有的script运行