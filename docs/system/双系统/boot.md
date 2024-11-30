[toc]

## secure boot
没关长这样。
![picture 1](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231919290.png)  


## 分区
### 主板的引导启动方式 BIOS,UEFI

古老的是Legacy BIOS，现代的是UEFI

![image-20240827184318870](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202408271843937.png)

![image-20240827184328341](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202408271843401.png)

### 硬盘分区表的布局 MBR,GPT(EFI)

- 古老的是MBR（Master Boot Record），现代是GPT（Globally Unique Identifier (GUID) Partition Table）。EFI是GPT中的系统启动分区。

- 如果用Legacy BIOS启动，就使用MBR格式的分区表。

  如果用UEFI模式启动，就使用GPT格式的分区表。

- MBR分区表，会限制主分区逻辑分区啥的；GPT分区表的好处就是分区可以随便你建。

- 使用MBR的分区表，则不需要创建`/boot`或`/efi`分区。而GPT需要。



你可以通过`fdisk`来知道硬盘分区是gpt还是mbr.

```bash
$ sudo fdisk -l
Disklabel type: gpt
```

或者 Under the Boot menu, look for PCI ROM Priority. You should see two options – EFI Compatible ROM and Legacy ROM. The latter indicates MBR.



> MBR分区的限制

Under the **MBR** partitioning scheme, there are three different types of partitions – **Primary, Extended, and Logical**. 

主分区 Primary 以外的分区称为扩展分区 Extended，在扩展分区中可以建立若干个逻辑分区 Logical。

Picture 2 shows **four primary** partitions(includes swap). 

​	The first primary partition is sda1 and the last sda4. Unlike hard drives, partition numbers start from 1, not 0 (zero). 

​	Any disk space that’s not allocated to the primary partitions is listed as Free or free space.

![picture 2](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231919291.png)  

So if you attempt to create another partition using the free space, the installer will throw up the type of error message. The error message will always say, “not enough free space,” even when you know that there is space available. This is because **number limit of primary partitions**.

You can see that there are **three primary** partitions – sda1, sda2 and sda3. The fourth partition is **an extended partition**, which makes it possible to create more (logical) partitions – sda5, sda6 and sda7.

![picture 3](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231919292.png)  

Theoretically, there is no limit to the number of logical partitions that you can create.

硬盘可以没有扩展分区，但是一定要有主分区，在主分区中要有一个启动分区用来启动系统。

### 制作启动盘

 [制作启动盘.md](制作启动盘.md) 

一定要选择 GPT UEFI

### 分区例子

> ubuntu默认分区规则：
- 最少的分区：`/`分区和efi分区。
- efi分区占500M，`/`分区占剩下的分区。

> BIOS/MBR


|挂载点|boot flag|用于格式|大小|意思|
|-|-|-|-|-|
| `/`|yes|Ext4|剩下的200G|
| `/swap`|no|交换空间(swap)|1倍到2倍的物理内存RAM大小|虚拟内存

交换分区：相当于Windows中的“虚拟内存”。如果物理内存小于或等于512MB，建议分配交换分区的大小为物理内存容量的2倍；如果物理内存大于512MB，建议分配交换分区的大小等于物理内存容量；如果您的内存够大也可以不建立交换分区。

> UEFI/GPT: 需要创建`/boot`或`/efi`分区

|挂载点|分区类型|用于格式|大小|意思|
|-|-|-|-|-|
| `/`|主分区|Ext4|200G||
| `/swap`|逻辑分区|交换空间(swap)|1倍到2倍的物理内存RAM大小|虚拟内存|
| `/boot` or `/efi`|逻辑分区|Ext4 / efi|1G|启动|
|`/tmp`|逻辑分区|Ext4|5G|临时文件缓存|
| `/home`|逻辑分区|Ext4|剩下的500G|用户空间|

By giving `/home` its own dedicated partition, you separate the user data from the rest of the operating system. The advantage is that you can wipe the operating system and replace it without affecting the user data.

### 启动

> 已有EFI分区就选中EFI分区，没有就新建

已安装过一个EFI的win10，有一个EFI分区，可以看到标识为 Windows Boot Manager，

没有的点击地下的＋ 新建一个EFI分区。



> **安装启动引导器的设备**

重要的步骤，这个一定不能选择默认的，要选择为你想要安装到的**EFI分区**

## double boot

### Make boot USB
```bash
# 看看U盘挂载在哪里，如下 设备 /dev/sdb1 挂载在 /media/sword/ESD-USB
$ lsblk
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sdb           8:16   0   3.7T  0 disk 
└─sdb1        8:17   0    32G  0 part /media/sword/ESD-USB
$ umount /media/sword/ESD-USB
```

```bash
# 格式化为 ntfs 系统
$ mkfs.ntfs /dev/sdb1
```

```bash
# burn-in
# status=progress 显示进度
$ dd if=ubuntu-16.0.3-desktop-amd64.iso of=/dev/sdb1 status=progress 
```

### Always install Windows first / vanishing linux boot
Windows does not detect other operating systems and does not feature a boot menu. When you install it, it overwrites your boot sequence and your computer then boots straight into Windows.

Linux Mint (and most Linux distributions) detects other operating systems and builds a menu from which you can choose which system to boot.

For this reason, if you want to dual-boot or multi-boot with Windows, it is easier and recommended to install Windows first, before you install Linux Mint.

Otherwise,  the linux boot is vanishing when u install linux before u install windows.

The resolution:


```bash
# 产看EFI所在分区
$ sudo fdisk -l

nvme1n1     259:5    0 931.5G  0 disk 
├─nvme1n1p1 259:6    0  30.5G  0 part swap
├─nvme1n1p2 259:7    0 186.3G  0 part 根目录 /
├─nvme1n1p3 259:8    0   977M  0 part efi分区 /boot/efi
├─nvme1n1p4 259:9    0  18.6G  0 part /tmp
└─nvme1n1p5 259:10   0 695.2G  0 part /home
```

```bash
# 用 Linux 启动盘进入 Live 系统环境，在 Live 的终端
$ sudo su

# 创建修复 GRUB2 所需的文件夹：
$ mkdir -p /mnt/system

# 把 Linux 的 / 分区挂载到创建的文件夹
$ mount /dev/nvme1n1p2 /mnt/system

# 把 EFI 分区（即 ESP 分区）也挂载：
$ mkdir /mnt/system/boot/efi
$ mount /dev/nvme1n1p3 /mnt/system/boot/efi

# 用 efibootmgr 创建 ubuntu 的启动项
# -c | --create: Create new variable bootnum and add to bootorder
# -w | --write-signature: write unique signature to the MBR if needed
# -L | --label LABEL: Boot manager display label (defaults to "Linux")
# -d | --disk DISK：The disk containing the loader (defaults to /dev/sda)
# -p | --part PART：Partition number containing the bootloader (defaults to 1)
$ efibootmgr -c -w -L ubuntu -d /dev/nvme1n1 -p 3

# 重启，并在 BIOS 中选择刚才创建的 ubuntu 启动项，进入 Ubuntu。
# OK，已经进入本机硬盘上的 Ubuntu 系统了，但 GRUB2 修复并未完毕。
# 打开终端，重新安装 GRUB2 到 EFI 分区：
$ sudo grub-install /dev/nvme1n1

# 刷新一下 GRUB2 配置：
$ sudo update-grub2

# 现在重启，即可看到亲切的 GRUB2 终于“夺回”双系统引导权了！
```

PS：<https://linuxmint-installation-guide.readthedocs.io/en/latest/multiboot.html> 这个没有试过。
### EFI boot order

<https://linuxmint-installation-guide.readthedocs.io/en/latest/efi.html>

## 扩容
未经测试!!!


```bash
# nn创建两个分区, p显示当前分区情况, w写入到分区表中
$ fdisk /dev/sdb
nnpw

# fdisk后, 通知系统重新加载分区表
$ partprobe /dev/sdb

# 创建文件系统
$ mkfs.ext4 /dev/sdb1
$ mkfs.ext4 /dev/sdb2

# 挂载
$ mkdir /mnt/data1
$ mkdir /mnt/data2
$ mount /dev/sdb1 /mnt/data1
$ mount /dev/sdb2 /mnt/data2

# 记录分区的扇区起始信息
$ fdisk -l /dev/sdb
   Device Boot      Start         End      Blocks   Id  System
/dev/sdb1            2048      411647      204800   83  Linux	#记录开始扇区号2048。
/dev/sdb2          411648      821247      204800   83  Linux	#记录结束扇区号821247。

# 卸载
$ umount /mnt/data1
$ umount /mnt/data2

# 重新分区, dd删除原本两个, n分的时候用上2048和821237
$ fdisk /dev/sdb
ddnpw
$ partprobe /dev/sdb
$ mount /dev/sdb1 /mnt/data1

# 调整ext2/ext3/ext4文件系统大小
$ resize2fs /dev/sdb1
```
但是数据还是只有sdb1里的了，sdb2的数据丢失了。


## windows时间不一致

<https://zhuanlan.zhihu.com/p/492885761>

因为ubuntu修改了bios时间，所以在ubuntu中
```bash
$ timedatectl set-local-rtc 1
```