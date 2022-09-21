- [1. Drives](#1-drives)
- [2. Character and Block devices](#2-character-and-block-devices)
- [3. Mount & Unmount](#3-mount--unmount)
- [4. Mounted Disks](#4-mounted-disks)
- [5. Drive partitions](#5-drive-partitions)
  - [5.1. list](#51-list)
  - [5.2. how to make partition](#52-how-to-make-partition)
  - [5.3. 分区](#53-分区)
- [6. Check and repair](#6-check-and-repair)

---
# 1. Drives
> legacy and modern drives

old Linux:
- floppy drives (fdo)
- hard drives (hd) : use IDE or E-IDE interface.


modern:
- hard drives (sd) : use ATA/SATA or SCSI.

> dev

Each device on your system is represented by a file in the `/dev` directory.

Include devices you’ve probably never used or even realized existed. On the off chance you do, there is a device file waiting to be used for it. 

Of particular interest are the devices `sda`, `sda1`, `sda2`, `sda3`, `sdb`, and `sdb1`, which are the hard drive and its partitions and a USB flash drive and its partitions.

> the meaning of `sda1` 

- drive kind: `sd`
- major number: first drive is `sda`, second drive is `sdb`
- minor number: first partition of drive is `1`, sencond is `2`.


if you are partitioning a NVMe disk (e.g. /dev/nvme0n1 with partitions starting from /dev/nvme0n1p1) or an SD card or eMMC disk (e.g. /dev/mmcblk0 with partitions starting from /dev/mmcblk0p1).


# 2. Character and Block devices


These letters represent the two ways that devices transfer data in and out.
- `c`: character devices. 
  sending and receiving data character by character. 
  such as mice, keyboards.
- `d`: block devices. 
  send and receive data in blocks (many characters or bytes at a time)
  These devices require higher-­speed data throughput, like hard drives and DVD drives

> list block devices

```bash
$ lsblk
```
lists some basic information about each block device listed in `/dev`.
# 3. Mount & Unmount

Most modern operating systems automount storage devices when they’re attached.

Even if the device is **physically attached** to the system, it is still necessarily **logically attached** to the operating system.

Mount point: 
- the point in the directory tree where devices are attached. 
- The two main mount points in Linux are `/mnt` and `/media`.
- internal hard drives are mounted at `/mnt`, and external USB devicesare mounted at `/media`. Though technically any directory can be used


> Manually mount

```bash
$ mount /dev/sdb1 /mnt
```
The mount point for the device should be an empty directory.

The filesystems that are mounted on a system are kept in a file at `/etc/fstab` (short for filesystem table), which is read by the system at every bootup.

> unmount

```bash
$ umonut /dev/sdb1
```
You cannot unmount a device that is busy, or you will just receive an error.

# 4. Mounted Disks

basic information on mounted devices: 
- how much space is being used
- how much is available
- mounted location

```bash
# -h, --human-readable  print sizes in powers of 1024 (e.g., 1023M)
$ df -h
```
# 5. Drive partitions
## 5.1. list
> fdisk

```bash
$ fdisk -l
Disklabel type: gpt
```
- view all partitions of all drives. 
- how much capacity is available 


- `Type`:
  `swap` partition , acts like virtual RAM.
  `HPFS/NTFS/exFAT` filesystem type. These are not native to Linux systems but rather to macOS and Windows systems.
  **Windows**: older systems use `FAT`, new systems use `NTFS`.
  **Linux**: ext(extended) filesystem, `ext2`(default), `ext3`, `ext4`.


> lsblk

Drive belongs to block devices.
```bash
$ lsblk
```

> mounted

```bash
$ df -h
```
Drive belongs to mounted devices.

## 5.2. how to make partition

> new Disk

```bash
$ fdisk /dev/vdb
```
输入n并回车，n是"new"新建分区的意思。
e表示扩展分区，p表示主分区。
输入+500G 按回车。
输入w  "write"表示写入。
reboot。

```bash
# 创建文件格式
$ mkfs -t ext4 /dev/vdb1
```

```bash
# 把目录挂载到新建分区下面
$ mount /dev/vdb1 /data
```

```bash
$ vim /etc/fstab
```

> renew Disk

重新分区
1. 利用`umount /dev/vdb1 /data`卸载挂载的目录
2. 利用`fdisk /dev/vdb` 对磁盘进行重新分区，按d（删除分区的意思）。然后输入分区号（1-4）进行删除。
3. 删除对应分区后按w（保存操作）
4. 删除`/etc/fstab`文件中的配置文件

## 5.3. 分区
> 相关知识：

UEFI,MBR,GPT,EFI:
- UEFI是指现代主板的引导启动方式。古老的是Legacy BIOS。
- GPT（Globally Unique Identifier (GUID) Partition Table）是硬盘分区表的布局。古老的是MBR（Master Boot Record）。
- EFI是GPT中的系统启动分区。
- 如果用UEFI模式启动，就使用GPT格式的分区表。
  如果用Legacy BIOS启动，就使用MBR格式的分区表。
- 使用MBR的分区表，则不需要创建`/boot`或`/efi`分区。而GPT需要。


其他：
- 交换分区
  相当于Windows中的“虚拟内存”，如果物理内存小于或等于512MB，建议分配交换分区的大小为物理内存容量的2倍；如果物理内存大于512MB，建议分配交换分区的大小等于物理内存容量；如果您的内存够大也可以不建立交换分区。
- 主分区，扩展分区，逻辑分区
  主分区以外的分区称为扩展分区，在扩展分区中可以建立若干个逻辑分区。硬盘可以没有扩展分区，但是一定要有主分区，在主分区中要有一个启动分区用来启动系统。
- EFI分区
  If the disk from which you want to boot already has an EFI system partition, do not create another one, but use the existing partition instead.


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

> BIOS/MBR


|挂载点|boot flag|用于格式|大小|意思|
|-|-|-|-|-|
| `/`|yes|Ext4|剩下的200G|
| `/swap`|no|交换空间(swap)|1倍到2倍的物理内存RAM大小|虚拟内存


# 6. Check and repair

```bash
$ fsck -p /dev/sdb1
```

The `fsck` command (short for filesystem check) checks the filesystem for errors and repairs the damage.

You must **unmount** the drive before running a filesystem check.

`-p`: automatically repair any problems with the device.