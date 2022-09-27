- [1. Test whether you have installed a nvidia driver](#1-test-whether-you-have-installed-a-nvidia-driver)
- [2. Install which verison of driver](#2-install-which-verison-of-driver)
- [3. 看看cuda](#3-看看cuda)
- [4. Installation](#4-installation)
- [5. cuda的nvcc问题](#5-cuda的nvcc问题)
---

# 1. Test whether you have installed a nvidia driver

If not, the result is as follows.

```bash
$ nvidia-smi

Command 'nvidia-smi' not found, but can be installed with:

sudo apt install nvidia-utils-435         # version 435.21-0ubuntu7, or
sudo apt install nvidia-utils-440         # version 440.82+really.440.64-0ubuntu6
sudo apt install nvidia-340               # version 340.108-0ubuntu5.20.04.2
sudo apt install nvidia-utils-390         # version 390.154-0ubuntu0.20.04.1
sudo apt install nvidia-utils-450-server  # version 450.203.03-0ubuntu0.20.04.1
sudo apt install nvidia-utils-470         # version 470.141.03-0ubuntu0.20.04.1
sudo apt install nvidia-utils-470-server  # version 470.141.03-0ubuntu0.20.04.1
sudo apt install nvidia-utils-510         # version 510.85.02-0ubuntu0.20.04.1
sudo apt install nvidia-utils-510-server  # version 510.85.02-0ubuntu0.20.04.1
sudo apt install nvidia-utils-515         # version 515.65.01-0ubuntu0.20.04.1
sudo apt install nvidia-utils-515-server  # version 515.65.01-0ubuntu0.20.04.1
sudo apt install nvidia-utils-418-server  # version 418.226.00-0ubuntu0.20.04.2
```


```bash
$ sudo lshw -C video
  *-display                 
       description: VGA compatible controller
       product: TU102 [GeForce RTX 2080 Ti Rev. A]
       vendor: NVIDIA Corporation
       physical id: 0
       bus info: pci@0000:01:00.0
       logical name: /dev/fb0
       version: a1
       width: 64 bits
       clock: 33MHz
       capabilities: pm msi pciexpress vga_controller bus_master cap_list rom fb
       configuration: depth=32 driver=nvidia latency=0 mode=1920x1080 visual=truecolor xres=1920 yres=1080
       resources: iomemory:600-5ff iomemory:600-5ff irq:151 memory:72000000-72ffffff memory:6020000000-602fffffff memory:6030000000-6031ffffff ioport:5000(size=128) memory:73000000-7307ffff
  *-display
       description: VGA compatible controller
       product: Intel Corporation
       vendor: Intel Corporation
       physical id: 2
       bus info: pci@0000:00:02.0
       version: 05
       width: 64 bits
       clock: 33MHz
       capabilities: pciexpress msi pm vga_controller bus_master cap_list rom
       configuration: driver=i915 latency=0
       resources: iomemory:600-5ff iomemory:400-3ff irq:150 memory:6033000000-6033ffffff memory:4000000000-400fffffff ioport:6000(size=64) memory:c0000-dffff
  *-display
       description: VGA compatible controller
       product: TU102 [GeForce RTX 2080 Ti Rev. A]
       vendor: NVIDIA Corporation
       physical id: 0
       bus info: pci@0000:03:00.0
       version: a1
       width: 64 bits
       clock: 33MHz
       capabilities: pm msi pciexpress vga_controller bus_master cap_list rom
       configuration: driver=nvidia latency=0
       resources: iomemory:600-5ff iomemory:600-5ff irq:152 memory:70000000-70ffffff memory:6000000000-600fffffff memory:6010000000-6011ffffff ioport:4000(size=128) memory:71000000-7107ffff
```
configuration这一行中，  `driver=nouveau`说明nvidia驱动还没安装好，如果`driver=nvidia`说明驱动安装好了。


# 2. Install which verison of driver
Tell you some versions of nvidia driver. `recommended` is that version you shoull install, here is `nvidia-driver-515`.
`GeForce RTX 2080 Ti Rev. A` is your hard-card type. 
```bash
$ ubuntu-drivers devices
== /sys/devices/pci0000:00/0000:00:01.0/0000:01:00.0 ==
modalias : pci:v000010DEd00001E07sv000019DAsd00002518bc03sc00i00
vendor   : NVIDIA Corporation
model    : TU102 [GeForce RTX 2080 Ti Rev. A]
driver   : nvidia-driver-510 - distro non-free
driver   : nvidia-driver-515-server - distro non-free
driver   : nvidia-driver-515 - distro non-free recommended
driver   : nvidia-driver-510-server - distro non-free
driver   : nvidia-driver-470-server - distro non-free
driver   : nvidia-driver-418-server - distro non-free
driver   : nvidia-driver-470 - distro non-free
driver   : nvidia-driver-450-server - distro non-free
driver   : xserver-xorg-video-nouveau - distro free builtin
```

# 3. 看看cuda
```bash
$ nvcc -V
可以看到本机cuda版本9.0
# nvcc: NVIDIA (R) Cuda compiler driver
# Copyright (c) 2005-2017 NVIDIA Corporation
# Built on Fri_Sep__1_21:08:03_CDT_2017
# Cuda compilation tools, release 9.0, V9.0.176
```

# 4. Installation

```bash
# 更新软件列表
sudo apt update

# 安装C/C++编译器
sudo apt install g++ gcc make

# 卸载原驱动
sudo apt purge nvidia*
# 禁用nouveau，末尾添加如下两行命令保存
sudo vim /etc/modprobe.d/blacklist.conf
sudo echo "blacklist nouveau" >> /etc/modprobe.d/blacklist.conf
sudo echo "blacklist vga16fb" >> /etc/modprobe.d/blacklist.conf
sudo echo "blacklist rivafb" >> /etc/modprobe.d/blacklist.conf
sudo echo "blacklist rivatv" >> /etc/modprobe.d/blacklist.conf
sudo echo "blacklist nvidiafb" >> /etc/modprobe.d/blacklistconf
sudo echo "options nouveau modeset=0" >> /etc/modprobe.d/blacklist.conf

# 更新
sudo update-initramfs -u
# 重启电脑
reboot   
```

下面没有成功
```bash
# # 检查，输入之后无输出，成功，继续
# lsmod | grep nouveau   

# # 进入黑漆漆的文本界面tty
# sudo telinit 3

# # 停止显示服务
# sudo service gdm3 stop

# # 安装
# sudo chmod +x NVIDIA-Linux-x86_64-515.76.run
# sudo ./NVIDIA-Linux-x86_64-515.76.run -no-x-check -no-nouveau-check -no-opengl-files

# # 重启显示服务，完成
# sudo service gdm3 start   
```

用run脚本失败后，怎么卸载。
```bash
# 卸载
$ sudo ./NVIDIA-Linux-x86_64-515.76.run --uninstall

# 卸载原驱动
$ sudo apt purge nvidia*
```

继续：

```bash
# 认为ubuntu默认桌面GNOME的显示管理器 gdm3问题

# 先调整一波grub
# quiet splash表示不显示启动信息，安静地启动
# 若值为空，则表示显示启动信息
$ sudo vim /etc/default/grub

将
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
改为
GRUB_CMDLINE_LINUX_DEFAULT=""

$ sudo chmod 777 /etc/default/grub
# 更新grub
$ sudo update-grub


# 卸载 gdm3
$ sudo apt remove gdm3
# 安装lightdm
# 之前没有安，是因为看有人说lightdm只能管理一个显示器，而gdm3可以多显示器管理。此说法存疑
$ sudo apt install lightdm
$ reboot
```
ok

# 5. cuda的nvcc问题
```bash
$ nvidia-smi
Mon Sep 26 20:43:11 2022       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 515.65.01    Driver Version: 515.65.01    CUDA Version: 11.7     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA GeForce ...  Off  | 00000000:01:00.0 Off |                  N/A |
|  0%   38C    P8     5W / 250W |      5MiB / 11264MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
|   1  NVIDIA GeForce ...  Off  | 00000000:03:00.0 Off |                  N/A |
|  0%   36C    P8     3W / 250W |      5MiB / 11264MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
|    0   N/A  N/A      1513      G   /usr/lib/xorg/Xorg                  4MiB |
|    1   N/A  N/A      1513      G   /usr/lib/xorg/Xorg                  4MiB |
+-----------------------------------------------------------------------------+

$ nvcc -V

Command 'nvcc' not found, but can be installed with:

apt install nvidia-cuda-toolkit7
```

![nvidia-smi     ](/image/nvidia-smi.jpg)

那么安一波
```bash
$ sudo apt install nvidia-cuda-toolkit7
```
但是
```bash
$ nvcc -V
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2019 NVIDIA Corporation
Built on Sun_Jul_28_19:07:16_PDT_2019
Cuda compilation tools, release 10.1, V10.1.243

$ nvidia-smi
还是 11.7
```
怎么一个10.1，一个11.7