[toc]

---
# 1. WSL2, Docker

docker需要wsl，而wsl需要安一个OS，所以其实docker就是在wsl的OS系统上的。

1. 启用huo关闭 Windows 功能

    运行 `C:\Windows\System32\OptionalFeatures.exe`. 
    
    
    ![](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231914788.png)
    
    勾选 `Windows Subsystem for Linux（适用于Linux的Windows子系统）` 和 `Virtual Machine Platform（虚拟机平台）`
    
    （Hyper-V默认已经勾选）
    
    
    ![](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231914789.png)
2. Virtualization enabled in the BIOS


​    
​    ![](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231933766.jpg)
3. Hypervisor enabled at Windows startup
   
   ```bash
   # - Open cmd (not powershell) window as an administrator.
   
   # - watch the value of `hypervisorlaunchtype`. We need enable it.
   bcdedit /enum {current}
   
   # - enable hypervisor.
   bcdedit /set hypervisorlaunchtype auto
   # - Close the cmd and restart the system.
   ```
   



PS：2024，WSL 2既可以使用wsl2作为后端，也可以使用Hyper-V 作为后端。也就是说，我们可以不用开启 Hyper-V。

# 2. VMware 15

> VMware16不再需要

1. Windows Feature

    Turn Off `Hyper-V`.

      

![](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231914790.png)
2. Virtualization enabled in the BIOS

    

![](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231914791.jpg)
3. Hypervisor disabled at Windows startup
   
   ```
   # - Open cmd (not powershell) window as an administrator.
   
   # - watch the value of `hypervisorlaunchtype`. We need enable it.
   bcdedit /enum {current}
   
   # - 【disable】 hypervisor.
   bcdedit /set hypervisorlaunchtype off
   # - Close the cmd and restart the system.
   ```
   
   


开启Hyper-V后，QEMU、VirtualBox 或 VMWare Workstation 15 及以下版本将无法使用，所以我们就选 VMWare Workstation 16 。

