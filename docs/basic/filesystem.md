- [1. Drives](#1-drives)
- [2. Character and Block devices](#2-character-and-block-devices)
- [3. Mount](#3-mount)
  - [3.1. Manually mount](#31-manually-mount)
  - [3.2. unmount](#32-unmount)
  - [3.3. list mounted devices](#33-list-mounted-devices)
- [4. Drive partitions](#4-drive-partitions)
  - [4.1. list](#41-list)
  - [4.2. how to make partition](#42-how-to-make-partition)
- [5. Check and repair](#5-check-and-repair)

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
# 3. Mount


Most modern operating systems automount storage devices when they’re attached.

Even if the device is **physically attached** to the system, it is still necessarily **logically attached** to the operating system.

Mount point: 
- the point in the directory tree where devices are attached. 
- The two main mount points in Linux are `/mnt` and `/media`.
- internal hard drives are mounted at `/mnt`, and external USB devicesare mounted at `/media`. Though technically any directory can be used


## 3.1. Manually mount

```bash
# mount <device> <mount point>
$ mount /dev/sdb1 /mnt
```
The mount point for the device should be an empty directory.

The filesystems that are mounted on a system are kept in a file at `/etc/fstab` (short for filesystem table), which is read by the system at every bootup.

## 3.2. unmount

```bash
$ umonut /dev/sdb1
```
You cannot unmount a device that is busy, or you will just receive an error.

## 3.3. list mounted devices

basic information on mounted devices: 
- how much space is being used
- how much is available
- mounted location

```bash
# -h, --human-readable  print sizes in powers of 1024 (e.g., 1023M)
$ df -h
```
# 4. Drive partitions
## 4.1. list
> fdisk

```bash
$ sudo fdisk -l
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

## 4.2. how to make partition

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


# 5. Check and repair

```bash
$ fsck -p /dev/sdb1
```

The `fsck` command (short for filesystem check) checks the filesystem for errors and repairs the damage.

You must **unmount** the drive before running a filesystem check.

`-p`: automatically repair any problems with the device.