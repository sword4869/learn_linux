[toc]


# VMware 15 冲突【过期】

> !!!!! VMware16不再需要

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

