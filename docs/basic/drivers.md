- [1. drivers](#1-drivers)
  - [1.1. 显卡驱动](#11-显卡驱动)
    - [1.1.1. check whether you have installed a nvidia driver](#111-check-whether-you-have-installed-a-nvidia-driver)
    - [1.1.2. Install which verison of driver](#112-install-which-verison-of-driver)
  - [1.2. Driver+CUDA](#12-drivercuda)
    - [1.2.1. Choose Version](#121-choose-version)
    - [1.2.2. Installation](#122-installation)
    - [1.2.5. 测试](#125-测试)
    - [1.2.6. 卸载cuda](#126-卸载cuda)
  - [1.3. cudnn](#13-cudnn)
---

# 1. drivers
## 1.1. 显卡驱动
### 1.1.1. check whether you have installed a nvidia driver

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


### 1.1.2. Install which verison of driver

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

## 1.2. Driver+CUDA

CUDA Toolkit里包含Driver， 所以不用自己去下Drivers。

装一个系统的CUDA Toolkit直接下最新的。之后就不用管这硬件了。

像是不同的项目安装时，遇到不同版本要求的CUDA，不用重安硬件的，而是去创个conda环境，然后自己去conda安装cudatoolkit（`conda install cudatoolkit=11.7 -c nvidia`）。

装cudnn

### 1.2.1. Choose Version 

> Driver 限制

[CUDA Toolkit对于显卡驱动的版本要求](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html)
其中Table-3.
![图 4](../../images/3b4fc76fe84ea2178dc6692f17111fe88acfb8731c633ee09cd2f34446af00c7.png)  
我们安装Driver是515.65，那么可以安装所有的CUDA版本。

> Pytorch限制

[pytorch](https://pytorch.org/)

![图 5](../../images/02740af4fffad6a4bd5394789558db08fb3758ff8bb17c5c2b73ca0a2c347db0.png)  

只能下这几个版本。

### 1.2.2. Installation

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
$ sudo apt install build-essential cmake
# 卸载 gdm3
# 安装显卡驱动后黑屏，认为ubuntu默认桌面GNOME的显示管理器 gdm3问题
$ sudo apt remove gdm3
# 安装lightdm
# 之前没有安，是因为看有人说lightdm只能管理一个显示器，而gdm3可以多显示器管理。此说法存疑
$ sudo apt install lightdm
# The NVIDIA driver requires that the kernel headers and development packages for the running version of the kernel be installed at the time of the driver installation, as well whenever the driver is rebuilt. 
$ sudo apt-get install linux-headers-$(uname -r)
$ reboot


######## Download CUDA(included Drivers)

# [各版本CUDA下载, 点进去后，会给wget下载命令。](https://developer.nvidia.com/cuda-toolkit-archive)
# - c表示采用断点续传模式
# 没用用 -c 时，下到99%，出现wget 段错误 (核心已转储)
$ wget -c XXXXXXXXXXX.run
$ sudo chmod +x ./XXXXXXXXXXX.run

$ ctrl+alt+F1 to tty1
# when lightdm is running. Installation will fail: error message is `xorg is running`, xorg is supporting lightdm. 
$ sudo systemctl stop lightdm

$ sudo ./XXXXXXXXXXX.run
$ accept/install

$ sudo systemctl start lightdm
$ ctrl+alt+F7
```

设置cuda的环境变量
```bash
$ vim ~/.bashrc
export CUDA_HOME=/usr/local/cuda
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH

$ source ~/.bashrc
```
### 1.2.5. 测试

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

# nvcc 没有就没有，不影响使用，不要乱安给出的建议apt install nvidia-cuda-toolkit7
$ nvcc -V

Command 'nvcc' not found, but can be installed with:

apt install nvidia-cuda-toolkit7
```

![nvidia-smi](../../images/nvidia-smi.jpg)

一台机器只能有一个版本的驱动(nvidia-smi中显示的Driver Version)，然而CUDA是可以多版本共存的

```python
import torch
print(torch.version.cuda)
print(torch.cuda.is_available())
```

### 1.2.6. 卸载cuda
```bash
$ cd /usr/local/cuda/bin/
$ sudo ./cuda-uninstaller
# cuda是cuda-11.7的软链接
$ sudo rm -rf /usr/local/cuda-11.7
```

## 1.3. cudnn

> tar安装

[nvidia](https://developer.nvidia.com/rdp/cudnn-download)

[installation guide](https://docs.nvidia.com/deeplearning/cudnn/install-guide/index.html#installlinux-tar)

下载tar的，不要deb（安了怎么在/usr中各处都找不到相关文件）

```bash
$ tar -xvf cudnn-linux-x86_64-8.8.0.121_cuda11-archive.tar.xz
$ cd cudnn-*-archive
$ sudo cp include/cudnn*.h /usr/local/cuda/include 
$ sudo cp -P lib/libcudnn* /usr/local/cuda/lib64 
$ sudo chmod a+r /usr/local/cuda/include/cudnn*.h /usr/local/cuda/lib64/libcudnn*
```


```bash
# 老版本
$ cat /usr/local/cuda/include/cudnn.h | grep CUDNN_MAJOR -A 2

# 新版本
$ cat /usr/local/cuda/include/cudnn_version.h | grep CUDNN_MAJOR -A 2
#define CUDNN_MAJOR 8
#define CUDNN_VERSION (CUDNN_MAJOR * 1000 + CUDNN_MINOR * 100 + CUDNN_PATCHLEVEL)
```
```bash
import torch
print(torch.backends.cudnn.version())
```

> 如果是conda

`conda search cudnn`显示对于cuda的都太老了，如果你恰好要安这里有的老的。那么`conda install cudnn=xxx`

```bash
$ vim ~/.bashrc

export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH

中间加入/home/lab/anaconda3/envs/sediment/lib/python3.8/site-packages/nvidia/cudnn/lib 

变成这个
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:/home/lab/anaconda3/envs/sediment/lib/python3.8/site-packages/nvidia/cudnn/lib:$LD_LIBRARY_PATH

$ source ~/.bashrc
```
