
---

## part 1

​	点击“启用或关闭 Windows 功能”，或直接运行 `C:\Windows\System32\OptionalFeatures.exe`. 

​	勾选 `Windows Subsystem for Linux（适用于Linux的Windows子系统）` 和 `Virtual Machine Platform（虚拟机平台）`（如今无须勾选Hyper-V）


![](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231914789.png)

​	确保BIOS的Virtualization已开启

<img src="https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231933766.jpg" style="zoom:67%;" />

## part 2

1. wsl2

    更改新分发的默认安装版本。
    ```bash
        --set-default-version <Version>
        更改新分发的默认安装版本。
    $ wsl --set-default-version 2
    ```

2. 安装一个 Linux 发行版

    打开 Microsoft Store 应用，搜索 “Ubuntu”

    或者
    ```bash
    $ wsl --list --online
    以下是可安装的有效分发的列表。
    使用 'wsl.exe --install <Distro>' 安装。

    NAME                                   FRIENDLY NAME
    Ubuntu                                 Ubuntu
    Debian                                 Debian GNU/Linux
    kali-linux                             Kali Linux Rolling
    Ubuntu-18.04                           Ubuntu 18.04 LTS
    Ubuntu-20.04                           Ubuntu 20.04 LTS
    Ubuntu-22.04                           Ubuntu 22.04 LTS
    OracleLinux_7_9                        Oracle Linux 7.9
    OracleLinux_8_7                        Oracle Linux 8.7
    OracleLinux_9_1                        Oracle Linux 9.1
    openSUSE-Leap-15.5                     openSUSE Leap 15.5
    SUSE-Linux-Enterprise-Server-15-SP4    SUSE Linux Enterprise Server 15 SP4
    SUSE-Linux-Enterprise-15-SP5           SUSE Linux Enterprise 15 SP5
    openSUSE-Tumbleweed                    openSUSE Tumbleweed 

    $ wsl --install Ubuntu
    ```

3. WslRegisterDistribution failed with error: 0x800701bc
   
   cmd(Adminitrator)
   ```bash
       --update
        更新适用于 Linux 的 Windows 子系统程序包。
   
        选项:
            --web-download
                从 Internet 而不是 Microsoft Store 下载更新。
   
            --pre-release
                如果可用，则下载预发布版本。表示使用 --web-download.
   $ wsl –-update
   ```
   或者 <https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi>

4. 这时候还没弄好，点子系统相关应用进去(windows-terminal 或者 适用于windows的linux子系统)告诉你没安装。其实是ubuntu没有配置用户名和密码。
   点`ubuntu应用`，配置完用户名和密码后，就好了。