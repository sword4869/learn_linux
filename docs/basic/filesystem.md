- [1. filesystem](#1-filesystem)
  - [1.1. Drives](#11-drives)
  - [1.2. Drive partitions](#12-drive-partitions)
    - [1.2.1. list](#121-list)
    - [1.2.2. how to make partition](#122-how-to-make-partition)
  - [1.3. Character and Block devices](#13-character-and-block-devices)
  - [1.4. Mount](#14-mount)
    - [1.4.1. Manually mount](#141-manually-mount)
    - [1.4.2. unmount](#142-unmount)
    - [1.4.3. list mounted devices](#143-list-mounted-devices)
  - [1.5. Check and repair](#15-check-and-repair)

---
# 1. filesystem
## 1.1. Drives
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


## 1.2. Drive partitions
### 1.2.1. list
> fdisk

```bash
$ sudo fdisk -l
Disk /dev/nvme0n1: 238.47 GiB, 256060514304 bytes, 500118192 sectors
Disk model: SAMSUNG MZVL2256HCHQ-00B00              
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 92CB3C6F-3895-4791-96D3-F00FFB5F11B0

Device            Start       End   Sectors  Size Type
/dev/nvme0n1p1     2048  63999999  63997952 30.5G Linux swap
/dev/nvme0n1p2 64000000  66000895   2000896  977M EFI System
/dev/nvme0n1p3 66000896 500117503 434116608  207G Linux filesystem


Disk /dev/sda: 931.51 GiB, 1000204886016 bytes, 1953525168 sectors
Disk model: WDC WD10EZEX-22B
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: gpt
Disk identifier: E17CD133-0F32-4BAB-87F7-42ACC7B767F2

Device          Start        End   Sectors   Size Type
/dev/sda1        2048    1023999   1021952   499M Windows recovery environment
/dev/sda2     1024000    1228799    204800   100M EFI System
/dev/sda3     1228800    1261567     32768    16M Microsoft reserved
/dev/sda4     1261568  411379711 410118144 195.6G Microsoft basic data
/dev/sda5  1441523712 1953523711 512000000 244.1G Linux filesystem
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
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           8:0    0 931.5G  0 disk 
├─sda1        8:1    0   499M  0 part 
├─sda2        8:2    0   100M  0 part 
├─sda3        8:3    0    16M  0 part 
├─sda4        8:4    0 195.6G  0 part 
└─sda5        8:5    0 244.1G  0 part /home
nvme0n1     259:0    0 238.5G  0 disk 
├─nvme0n1p1 259:1    0  30.5G  0 part [SWAP]
├─nvme0n1p2 259:2    0   977M  0 part /boot/efi
└─nvme0n1p3 259:3    0   207G  0 part /
```


只能看到自己的系统上的挂载点, 双系统上的sda1,sda2,sda3,sda4 都看不到挂载点.

> mounted

```bash
$ df -h
Filesystem      Size  Used Avail Use% Mounted on
tmpfs           3.2G  2.2M  3.2G   1% /run
/dev/nvme0n1p3  203G   60G  133G  32% /
tmpfs            16G   25M   16G   1% /dev/shm
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs            16G     0   16G   0% /run/qemu
/dev/nvme0n1p2  976M  5.3M  970M   1% /boot/efi
/dev/sda5       240G  213G   15G  94% /home
tmpfs           3.2G  204K  3.2G   1% /run/user/1000
```
Drive belongs to mounted devices.

### 1.2.2. how to make partition

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

## 1.3. Character and Block devices


These letters represent the two ways that devices transfer data in and out.
- `c`: character devices. 
  sending and receiving data character by character. 
  such as mice, keyboards.
- `d`: block devices. 
  send and receive data in blocks (many characters or bytes at a time)
  These devices require higher-­speed data throughput, like hard drives and DVD drives


## 1.4. Mount


Most modern operating systems automount storage devices when they’re attached.

Even if the device is **physically attached** to the system, it is still necessarily **logically attached** to the operating system.

Mount point: 
- the point in the directory tree where devices are attached. 
- The two main mount points in Linux are `/mnt` and `/media`.
- internal hard drives are mounted at `/mnt`, and external USB devicesare mounted at `/media`. Though technically any directory can be used

```bash
$ lsblk
```

lists each block device listed in `/dev`. 
### 1.4.1. Manually mount

```bash
# mount <device> <mount point>
$ mount /dev/sdb1 /mnt
```
The mount point for the device should be an empty directory.

The filesystems that are mounted on a system are kept in a file at `/etc/fstab` (short for filesystem table), which is read by the system at every bootup.

### 1.4.2. unmount

```bash
$ umonut /dev/sdb1
```
You cannot unmount a device that is busy, or you will just receive an error.

### 1.4.3. list mounted devices

basic information on mounted devices: 
- how much space is being used
- how much is available
- mounted location

```bash
# -h, --human-readable  print sizes in powers of 1024 (e.g., 1023M)
$ df -h
```

## 1.5. Check and repair

```bash
$ fsck -p /dev/sdb1
```

The `fsck` command (short for filesystem check) checks the filesystem for errors and repairs the damage.

You must **unmount** the drive before running a filesystem check.

`-p`: automatically repair any problems with the device.