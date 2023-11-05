1. 下载ohmyposh
```
winget install JanDeDobbeleer.OhMyPosh -s winget
```

2. powershell权限修改
   管理权限打开powershell，```set-executionpolicy remotesigned```

3. 配置

```
New-Item -Path $PROFILE -Type File -Force
```
输入
```
oh-my-posh init pwsh --config 'D:/git/development_configurations/docs/oh-my-posh.omp.json' | Invoke-Expression

#region conda initialize
# !! Contents within this block are managed by 'conda init' !!
If (Test-Path "D:\miniconda\Scripts\conda.exe") {
    (& "D:\miniconda\Scripts\conda.exe" "shell.powershell" "hook") | Out-String | ?{$_} | Invoke-Expression
}
#endregion
```
PS：因为原来是`C:\Users\lab\Documents\WindowsPowerShell\profile.ps1`, 刚才生成的是`C:\Users\lab\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`，所以把原来里面的conda初始化也搬过来了，原来的那个可以删除了。

4. 字体配置

去windows terminal下选择字体
![图 1](../../images/fb257512bfa36bd6c5d35fd65ffb6f88d0aa85afd10879c21a8dda1b2ba07574.png)  

5. vscode

会提示找不到oh-my-posh。解决方法是给vscode管理员权限，以管理员权限运行vscode就没有问题