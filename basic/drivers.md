- [1. 显卡驱动](#1-显卡驱动)
  - [1.1. Test whether you have installed a nvidia driver](#11-test-whether-you-have-installed-a-nvidia-driver)
  - [1.2. Install which verison of driver](#12-install-which-verison-of-driver)
  - [1.3. Installation-me](#13-installation-me)
  - [1.4. Installation-nvidia](#14-installation-nvidia)
- [2. cuda](#2-cuda)
  - [2.1. 探索期](#21-探索期)
  - [2.2. CUDA版本限制](#22-cuda版本限制)
  - [2.3. Installation](#23-installation)
  - [2.4. 卸载cuda](#24-卸载cuda)
- [3. cudnn](#3-cudnn)
---
# 1. 显卡驱动
## 1.1. Test whether you have installed a nvidia driver

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


## 1.2. Install which verison of driver
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

## 1.3. Installation-me

```bash
######## 先调整一波grub，以便更好进入recovery模式
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

######## 卸载原驱动
$ sudo apt purge nvidia*
# 禁用nouveau，末尾添加如下两行命令保存
$ sudo vim /etc/modprobe.d/blacklist.conf
blacklist nouveau
blacklist vga16fb
blacklist rivafb
blacklist rivatv
blacklist nvidiafb
options nouveau modeset=0

# 更新
$ sudo update-initramfs -u
# 重启电脑
$ reboot



######### 安装必要软件
# 更新软件列表
$ sudo apt update
# 安装C/C++编译器，后面编译驱动要用
$ sudo apt install g++ gcc make build-essential cmake
# 卸载 gdm3
# 安装显卡驱动后黑屏，认为ubuntu默认桌面GNOME的显示管理器 gdm3问题
$ sudo apt remove gdm3
# 安装lightdm
# 之前没有安，是因为看有人说lightdm只能管理一个显示器，而gdm3可以多显示器管理。此说法存疑
$ sudo apt install lightdm
# The NVIDIA driver requires that the kernel headers and development packages for the running version of the kernel be installed at the time of the driver installation, as well whenever the driver is rebuilt. 
$ sudo apt-get install linux-headers-$(uname -r)
$ reboot


# 图形化软件商店安装
....


# 重启
$ reboot
```

## 1.4. Installation-nvidia

<https://docs.nvidia.com/datacenter/tesla/tesla-installation-notes/index.html#ubuntu-lts>

```bash
$ sudo apt-get update
$ sudo apt-get install linux-headers-$(uname -r)

#Install the CUDA repository public GPG key. This can be done via the cuda-keyring package or a manual installation of the key. The usage of apt-key is deprecated.
$ distribution=$(. /etc/os-release;echo $ID$VERSION_ID | sed -e 's/\.//g')
$ wget https://developer.download.nvidia.com/compute/cuda/repos/$distribution/x86_64/cuda-keyring_1.0-1_all.deb
$ sudo dpkg -i cuda-keyring_1.0-1_all.deb
# Update the APT repository cache and install the driver using the cuda-drivers meta-package. Use the --no-install-recommends option for a lean driver install without any dependencies on X packages. This is particularly useful for headless installations on cloud instances.
$ sudo apt-get update
$ sudo apt-get -y install cuda-drivers
```
# 2. cuda

## 2.1. 探索期

此处命令皆可省略，只是为了明白需要我们手动安装一个CUDA版本，自带的不行。

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

# 看看CUDA版本
$ nvcc -V

Command 'nvcc' not found, but can be installed with:

apt install nvidia-cuda-toolkit7
```

![nvidia-smi     ](/image/nvidia-smi.jpg)

```bash
$ nvcc -V
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2019 NVIDIA Corporation
Built on Sun_Jul_28_19:07:16_PDT_2019
Cuda compilation tools, release 10.1, V10.1.243

$ nvidia-smi
还是 11.7
```

原来：一台机器只能有一个版本的驱动(nvidia-smi中显示的Driver Version)，然而CUDA是可以多版本共存的

## 2.2. CUDA版本限制

> Driver 限制

[CUDA Toolkit对于显卡驱动的版本要求](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html)
其中Table-3.
![图 4](/image/3b4fc76fe84ea2178dc6692f17111fe88acfb8731c633ee09cd2f34446af00c7.png)  
我们安装Driver是515.65，那么可以安装所有的CUDA版本。

> Pytorch限制

[pytorch](https://pytorch.org/)

![图 5](/image/02740af4fffad6a4bd5394789558db08fb3758ff8bb17c5c2b73ca0a2c347db0.png)  

只能下这几个版本。

## 2.3. Installation

[各版本CUDA下载](https://developer.nvidia.com/cuda-toolkit-archive)

点进去后，会给wget下载命令。
```bash
# - c表示采用断点续传模式
# 没用用 -c 时，下到99%，出现wget 段错误 (核心已转储)
$ wget -c https://developer.download.nvidia.com/compute/cuda/11.6.2/local_installers/cuda_11.6.2_510.47.03_linux.run
$ sudo chmod +x ./cuda_11.6.2_510.47.03_linux.run
$ sudo ./cuda_11.6.2_510.47.03_linux.run
```
Existing package manager installation of the driver found. It is strongly recommended that you remove this before continuing
选择 continue
在下一步中去除driver项，之后选择install：
![图 6](/image/4b31a9d53bf17375c3a2e853660bf68e3a28c288bd28655d30e2021b4a4347bd.png)  


设置cuda的环境变量
```bash
$ vim ~/.bashrc
export CUDA_HOME=/usr/local/cuda-11.6
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64

$ source ~/.bashrc
```
```bash
# nvcc ok
$ nvcc -V
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2022 NVIDIA Corporation
Built on Tue_Mar__8_18:18:20_PST_2022
Cuda compilation tools, release 11.6, V11.6.124
Build cuda_11.6.r11.6/compiler.31057947_0

# but nvidia-smi is not ok
$ nvidia-smi
Mon Oct  3 08:44:06 2022       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 515.65.01    Driver Version: 515.65.01    CUDA Version: 11.7  
```

## 2.4. 卸载cuda
```bash
$ cd /usr/local/cuda-11.0/bin/
$ sudo ./cuda-uninstaller
$ sudo rm -rf /usr/local/cuda-11.0
```

# 3. cudnn

[nvidia](https://developer.nvidia.com/rdp/cudnn-download)