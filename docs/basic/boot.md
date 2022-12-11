- [1. secure boot](#1-secure-boot)
- [2. 分区](#2-分区)
  - [2.1. UEFI,MBR,GPT,EFI:](#21-uefimbrgptefi)
  - [2.2. 细节](#22-细节)
  - [2.3. 分区例子](#23-分区例子)
- [3. double boot](#3-double-boot)
  - [3.1. Make boot USB](#31-make-boot-usb)
  - [3.2. Always install Windows first](#32-always-install-windows-first)
  - [3.3. boot sequence](#33-boot-sequence)
- [扩容](#扩容)
---
# 1. secure boot
没关长这样。
![picture 1](../../images/ce9a6a44586a0e3caf8796a36dcc643ebac724caa375ac630b5786eb1cd43405.png)  


# 2. 分区
## 2.1. UEFI,MBR,GPT,EFI:
- 主板的引导启动方式。古老的是Legacy BIOS，现代的是UEFI
- 硬盘分区表的布局。古老的是MBR（Master Boot Record），现代是GPT（Globally Unique Identifier (GUID) Partition Table）。EFI是GPT中的系统启动分区。
- 如果用UEFI模式启动，就使用GPT格式的分区表。
  如果用Legacy BIOS启动，就使用MBR格式的分区表。
- 使用MBR的分区表，则不需要创建`/boot`或`/efi`分区。而GPT需要。

你可以通过`fdisk`来知道硬盘分区是gpt还是mbr.

```bash
$ sudo fdisk -l
Disklabel type: gpt
```

或者 Under the Boot menu, look for PCI ROM Priority. You should see two options – EFI Compatible ROM and Legacy ROM. The latter indicates MBR.

## 2.2. 细节
> 交换分区

相当于Windows中的“虚拟内存”.

如果物理内存小于或等于512MB，建议分配交换分区的大小为物理内存容量的2倍；

如果物理内存大于512MB，建议分配交换分区的大小等于物理内存容量；

如果您的内存够大也可以不建立交换分区。

> MBR分区

Under the **MBR** partitioning scheme, there are three different types of partitions – **Primary, Extended, and Logical**. 

主分区以外的分区称为扩展分区，在扩展分区中可以建立若干个逻辑分区。

  
Picture 2 shows **four primary** partitions(includes swap). If you observe closely, you will see that the first primary partition is sda1 and the last sda4. Unlike hard drives, partition numbers start from 1, not 0 (zero). Any disk space that’s not allocated to the primary partitions is listed as Free or free space. But while it may be free, it is, however, unusable. And that is because as far as the system is concerned, that free space does not exist.

![picture 2](../../images/3b1190fad39d1590f65e8445f534d9c5f444a3e2aebcc3ce2ded3919131d8663.png)  

So if you attempt to create another partition using the free space, the installer will throw up the type of error message. The error message will always say, “not enough free space,” even when you know that there is space available. This is because **number limit of primary partitions**.

You can see that there are **three primary** partitions – sda1, sda2 and sda3. The fourth partition is **an extended partition**, which makes it possible to create more (logical) partitions – sda5, sda6 and sda7.

![picture 3](../../images/81bf1793a13de35d198c64f9e8ac57dbd482fac59371cb6758f7615fbf1b2c59.png)  

Theoretically, there is no limit to the number of logical partitions that you can create.

硬盘可以没有扩展分区，但是一定要有主分区，在主分区中要有一个启动分区用来启动系统。

> EFI分区

If the disk from which you want to boot already has an EFI system partition, do not create another one, but use the existing partition instead.

## 2.3. 分区例子
> ubuntu默认分区规则：
- 最少的分区：`/`分区和efi分区。
- efi分区占500M，`/`分区占剩下的分区。

> UEFI/GPT

|挂载点|分区类型|用于格式|大小|意思|
|-|-|-|-|-|
| `/`|主分区|Ext4|200G|
| `/swap`|逻辑分区|交换空间(swap)|1倍到2倍的物理内存RAM大小|虚拟内存
| `/boot` or `/efi`|逻辑分区|Ext4|1G|启动|
|`/tmp`|逻辑分区|Ext4|5G|临时文件缓存|
| `/home`|逻辑分区|Ext4|剩下的500G|用户空间|

By giving `/home` its own dedicated partition, you separate the user data from the rest of the operating system. The advantage is that you can wipe the operating system and replace it without affecting the user data.

> BIOS/MBR


|挂载点|boot flag|用于格式|大小|意思|
|-|-|-|-|-|
| `/`|yes|Ext4|剩下的200G|
| `/swap`|no|交换空间(swap)|1倍到2倍的物理内存RAM大小|虚拟内存


# 3. double boot
## 3.1. Make boot USB
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

## 3.2. Always install Windows first
Windows does not detect other operating systems and does not feature a boot menu. When you install it, it overwrites your boot sequence and your computer then boots straight into Windows.

Linux Mint (and most Linux distributions) detects other operating systems and builds a menu from which you can choose which system to boot.

For this reason, if you want to dual-boot or multi-boot with Windows, it is easier and recommended to install Windows first, before you install Linux Mint.

## 3.3. boot sequence

<https://linuxmint-installation-guide.readthedocs.io/en/latest/multiboot.html>

<https://linuxmint-installation-guide.readthedocs.io/en/latest/efi.html>

# 扩容
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
