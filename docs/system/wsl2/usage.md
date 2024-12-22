[toc]

---

## 关闭

```bash
    --shutdown
        立即终止所有正在运行的分发和 WSL 2 轻型虚拟机。
wsl --shutdown
```

## 查看wsl版本

```bash
    --status
        显示适用于 Linux 的 Windows 子系统的状态。
C:\Users\lab>wsl --status
默认版本：2
```

## 忘记了 Linux 分发版的密码

```powershell
    --list, -l [Options]
        列出分发。

        选项:
            --all
                列出所有分发，包括
                目前正在被安装或被卸载的分发。

            --running
                仅列出目前正在运行的分发。

            --quiet, -q
                仅显示分发名称。

            --verbose, -v
                显示所有分发的相关详细信息。

            --online, -o
                使用 'wsl.exe --install' 显示可以安装的可用分发列表。
PS C:\WINDOWS\system32> wsl -l -v
  NAME                   STATE           VERSION   
* Ubuntu-20.04           Running         2
```
`Ubuntu-20.04`就是已安装的 Linux 发行版 `-d <DistributionName>`。


```powershell
    --distribution, -d <Distro>
        运行指定的分发。
    --user, -u <UserName>
        以指定的用户身份运行。
PS C:\WINDOWS\system32> wsl -d Ubuntu-20.04 -u root  
...

root@DESKTOP-KSTB1B7:/mnt/c/WINDOWS/system32# passwd <username>
```

## 默认用户

```bash
Ubuntu config --default-user lab
```

## 卸载

```bash
    --unregister <Distro>
        注销分发并删除根文件系统。
$ wsl --list
适用于 Linux 的 Windows 子系统分发:
Ubuntu (默认)
$ wsl --unregister Ubuntu
```

## 迁移

```bash
$ wsl --shutdown
$ wsl -l -v
  NAME              STATE           VERSION
* Ubuntu-22.04      Stopped         2
  docker-desktop    Stopped         2
$ wsl --export Ubuntu-22.04 "D:\\Ubuntu-22.04.tar"
$ wsl --unregister Ubuntu-22.04
$ mkdir -p D:\\MySoftwareData\\wsl
$ wsl --import Ubuntu-22.04 "D:\\MySoftwareData\\wsl\\ubuntu" "D:\\Ubuntu-22.04.tar" --version 2
```

