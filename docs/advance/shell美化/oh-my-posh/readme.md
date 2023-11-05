1. powershell权限修改

   管理权限打开powershell，
   ```powershell
   set-executionpolicy remotesigned
   ```

2. 下载ohmyposh

    商店安装winget: <https://apps.microsoft.com/detail/9NBLGGH4NNS1?rtc=1&hl=zh-cn&gl=CN#activetab=pivot:overviewtab>
    ```
    winget install JanDeDobbeleer.OhMyPosh -s winget
    ```

3. 配置

    ```
    New-Item -Path $PROFILE -Type File -Force
    ```
    输入
    ```
    oh-my-posh init pwsh --config 'learn_linux\docs\advance\shell美化\oh-my-posh\my_config.omp.json' | Invoke-Expression
    ```
    
    然后这里还有关于conda的部分也要修改：
    
    因为原来是`C:\Users\lab\Documents\WindowsPowerShell\profile.ps1`, 刚才生成的是`C:\Users\lab\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`，所以要把原来里面的conda初始化也搬过来，原来的那个可以删除了。

    ```powershell
    #region conda initialize
    # !! Contents within this block are managed by 'conda init' !!
    If (Test-Path "D:\Applications\miniconda\Scripts\conda.exe") {
        (& "D:\Applications\miniconda\Scripts\conda.exe" "shell.powershell" "hook") | Out-String | ?{$_} | Invoke-Expression
    }
    #endregion
    ```

4. 字体配置

    去windows terminal下选择字体


5. vscode

    会提示找不到oh-my-posh。解决方法是给vscode管理员权限，以管理员权限运行vscode就没有问题