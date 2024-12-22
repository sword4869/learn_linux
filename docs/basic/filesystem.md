[toc]

## 文件系统

> u盘：fat32 vs. ntfs

fat32，通用，不支持超过4G的单个文件。ntfs，通用，可以。

虽然U盘用ntfs会缩短使用寿命，但为了支持4G以上的文件，还是用 ntfs。

> ext vs. ntfs

Windows系统适合用NTFS文件系统类型做系统分区，**Windows 挂载不了 ext4**。

linux用ext4。**linux挂在ntfs的盘只支持只读**。
## Drives
> legacy and modern drives

old Linux:
- floppy drives (fdo)
- hard drives (hd) : use IDE or E-IDE interface.


modern:
- hard drives (sd) : use ATA/SATA or SCSI.

> dev

Each device on your system is represented by a file in the `/dev` directory.

Include devices you’ve probably never used or even realized existed.

Of particular interest are the devices `sda`, `sda1`, `sda2`, `sda3`, `sdb`, and `sdb1`, which are the hard drive and its partitions and a USB flash drive and its partitions.

> the meaning of `sda1` 

- drive kind: 硬盘种类 `sd`
- major number: 哪块硬盘，first drive is `sda`, second drive is `sdb`
- minor number: 区号，first partition of drive is `1`, sencond is `2`.


if you are partitioning a NVMe disk (e.g. `/dev/nvme0n1` with partitions starting from `/dev/nvme0n1p1`) or an SD card or eMMC disk (e.g. `/dev/mmcblk0` with partitions starting from `/dev/mmcblk0p1`).


### 块设备、使用情况

如果你想要了解系统的**块设备布局**，包括**未挂载**的分区或磁盘，应该使用 lsblk。

而如果你关心的是**已挂载**文件系统的**磁盘空间使用情况**，则应选择 df

```bash
$ lsblk
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           8:0    0 931.5G  0 disk 
├─sda1        8:1    0   499M  0 part 				【sda1,sda2,sda3,sda4 都是另一个系统上的分区情况】
├─sda2        8:2    0   100M  0 part 
├─sda3        8:3    0    16M  0 part 
├─sda4        8:4    0 195.6G  0 part 
└─sda5        8:5    0 244.1G  0 part /home
nvme0n1     259:0    0 238.5G  0 disk 
├─nvme0n1p1 259:1    0  30.5G  0 part [SWAP]
├─nvme0n1p2 259:2    0   977M  0 part /boot/efi
└─nvme0n1p3 259:3    0   207G  0 part /
```

```bash
# -h, --human-readable  print sizes in powers of 1024 (e.g., 1023M)
$ df -h
Filesystem      Size  Used Avail Use% Mounted on
tmpfs           3.2G  2.2M  3.2G   1% /run
/dev/nvme0n1p3  203G   60G  133G  32% /					【df 主要关心使用情况, 可用60G，占用 32 %】
tmpfs            16G   25M   16G   1% /dev/shm
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs            16G     0   16G   0% /run/qemu
/dev/nvme0n1p2  976M  5.3M  970M   1% /boot/efi				
/dev/sda5       240G  213G   15G  94% /home				【df 查看已经 mounted 的，另一个系统上的没有挂载，就看不到】
tmpfs           3.2G  204K  3.2G   1% /run/user/1000
```
> Character and Block devices


These letters represent the two ways that devices transfer data in and out.
- `c`: character devices. 
  sending and receiving data character by character. 
  such as mice, keyboards.
- `d`: block devices. 
  send and receive data in blocks (many characters or bytes at a time)
  These devices require higher-­speed data throughput, like hard drives and DVD drives


### Mount


Most modern operating systems automount storage devices when they’re attached.

Even if the device is **physically attached** to the system, it is still necessarily **logically attached** to the operating system.

Mount point: 
- the point in the directory tree where devices are attached. 
- The two main mount points in Linux are `/mnt` and `/media`.
- internal hard drives are mounted at `/mnt`, and external USB devicesare mounted at `/media`. Though technically any directory can be used

临时挂载：The mount point (`/mnt/data`) for the device should be an empty directory and be created before `mount`.

```bash
# mount <device> <mount point>
$ mkdir /mnt/data
$ sudo mount /dev/sdb1 /mnt/data
```
取消挂载

```bash
# umonut, 而不是 unmount
# 既可以通过设备名，也可以通过挂载点
$ sudo umonut /dev/sdb1     
$ sudo umount /mnt/data
```
You cannot unmount a device that is busy, or you will just receive an error.

> mount -a: 挂载所有在 /etc/fstab 文件中定义的文件系统

```bash
# 挂载 sda3 到 /disk 上
$ mkdir /disk
# 在配置文件 /etc/fstab下最后一行输入下面内容，这里将分区/dev/sda3挂到 /disk目录下, defaults 默认权限，0不检查
$ vim /etc/fstab
/dev/sda3 /disk ext4 defaults 0 0

# 挂载所有在 /etc/fstab 文件中定义的文件系统
$ mount -a

$ lsblk
NAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda               8:0    0   30G  0 disk
├─sda1            8:1    0    1G  0 part /boot
├─sda2            8:2    0    9G  0 part
│ ├─centos-root 253:0    0    8G  0 lvm  /
│ └─centos-swap 253:1    0    1G  0 lvm  [SWAP]
└─sda3            8:3    0   20G  0 part /disk			【已挂载到 /disk】
sr0              11:0    1 1024M  0 rom
```

> 必须先 mkfs 制作文件系统，才能挂载

```bash
# 刚创建好 sda5
$ fdisk /dev/sda
$ mount /dev/sda5 /disk
mount: /dev/sda5 is write-protected, mounting read-only
mount: unknown filesystem type '(null)'

$ mkfs.ext4 /dev/sda4
mke2fs 1.42.9 (28-Dec-2013)
mkfs.ext4: Device size reported to be zero.  Invalid partition specified, or
        partition table wasn't reread after running fdisk, due to
        a modified partition being busy and in use.  You may need to reboot
        to re-read your partition table.

$ mount /dev/sda5 /disk
```



## Check and repair

```bash
$ fsck -p /dev/sdb1
```

The `fsck` command (short for filesystem check) checks the filesystem for errors and repairs the damage.

You must **unmount** the drive before running a filesystem check.

`-p`: automatically repair any problems with the device.

## 硬盘

### 查看分区类型

```bash
$ sudo fdisk -l
Disk /dev/nvme0n1: 238.47 GiB, 256060514304 bytes, 500118192 sectors		【/dev/nvme0n1】
Disk model: SAMSUNG MZVL2256HCHQ-01B00              
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes							【逻辑分区】
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt																【gpt】
Disk identifier: 32CB3C6F-3895-4791-96D3-F00FFB5F11B0

Device            Start       End   Sectors  Size Type
/dev/nvme0n1p1     2048  63999999  63997952 30.5G Linux swap
/dev/nvme0n1p2 64000000  66000895   2000896  977M EFI System
/dev/nvme0n1p3 66000896 500117503 434116608  207G Linux filesystem


Disk /dev/sda: 931.51 GiB, 1000204886016 bytes, 1953525168 sectors			【/dev/sda】
Disk model: WDC WD11EZEX-22B
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes							【逻辑分区】
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: gpt																【gpt】
Disk identifier: E27CD133-0F32-4BAB-87F7-42ACC7B767F2

Device          Start        End   Sectors   Size Type
/dev/sda1        2048    1023999   1021952   499M Windows recovery environment
/dev/sda2     1024000    1228799    204800   100M EFI System
/dev/sda3     1228800    1261567     32768    16M Microsoft reserved
/dev/sda4     1261568  411379711 410118144 195.6G Microsoft basic data
/dev/sda5  1441523712 1953523711 512000000 244.1G Linux filesystem
```




### 挂载新硬盘

1. 找到新增的硬盘是 `sdb`
  
    ```
    $ df -h
    ```
2. 磁盘分区

    ```bash
    $ fdisk /dev/sdb
    ```
    输入n。n是"new"新建分区的意思。

    ​	输入e或p。e表示扩展分区，p表示主分区（MBR 分区限制最多四个主分区或三个主分区加一个扩展分区）。

    ​	输入回车，表示分区号，采用默认的就行。就是 `sdb1`

    ​	输入回车，表示开始扇区，采用默认值
    
    ​	输入回车，表示结束扇区。采用默认值，使用剩余的全部磁盘。或者 `+18G`
    
    输入d。删除分区

​	输入w. 保存并退出。

​	输入q，退出，不报存。

​	输入p，打印分区表


3. 格式化磁盘并写入文件系统

    ```bash
    # 创建文件格式
    $ mkfs -t ext4 /dev/sdb1
    ```

4. 先临时挂载(重新开机就没了)

    ```bash
    $ mkdir /mnt/data
    $ sudo mount /dev/sdb1 /mnt/data
    ```
5. 修改文件夹权限，不然就会发现只能在root时复制、粘贴、删除文件。
   
    ```bash
    $ id
    uid=1000(lab) gid=1000(lab) groups=1000(lab),4(adm),20(dialout),24(cdrom),25(floppy),27(sudo),29(audio),30(dip),44(video),46(plugdev),116(netdev)
      
    $ sudo chown -R lab:lab /mnt/data
    ```

6. 永久挂载

    The filesystems that are mounted on a system are kept in a file at `/etc/fstab` (short for filesystem table), which is read by the system at every bootup.

    ```bash
    $ sudo blkid
    /dev/sdb1: UUID="7470460a-47a7-41a8-a4f0-7bcdb39b3506" TYPE="ext4"
    $ sudo vim /etc/fstab
    ```
    新增一行
    ```bash
    # 盘符路径  挂载路径  ext4  defaults 0  1
    UUID=7470460a-47a7-41a8-a4f0-7bcdb39b3506 /mnt/data ext4 defaults 0 1
    ```

## fdisk

### fdisk -l打印分区表

```bash
fdisk -l

Disk /dev/sda: 33.3 GB, 33285996544 bytes, 65011712 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk label type: dos
Disk identifier: 0x000bf545

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *        2048     2099199     1048576   83  Linux
/dev/sda2         2099200    20971519     9436160   8e  Linux LVM
/dev/sda3        20971520    62914559    20971520   83  Linux
/dev/sda4        62914560    65011711     1048576    5  Extended
/dev/sda5        62916608    65011711     1047552   83  Linux

Disk /dev/mapper/centos-root: 30.0 GB, 29955719168 bytes, 58507264 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/mapper/centos-swap: 1073 MB, 1073741824 bytes, 2097152 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

### fdisk /dev/sda

```bash
# 参数是 /dev/sda 哪块硬盘，而不是具体的分区 /dev/sda4
$ fdisk /dev/sda
```

输入n。n是"new"新建分区的意思。

​	输入e或p。e表示扩展分区，p表示主分区（MBR 分区限制最多四个主分区或三个主分区加一个扩展分区）。

​	输入回车，表示分区号，采用默认的就行。就是 `sdb1`

​	输入回车，表示开始扇区，采用默认值

​	输入回车，表示结束扇区。采用默认值，使用剩余的全部磁盘。或者 `+18G`

输入d。删除分区

输入w. 保存并退出。

输入q，退出，不报存。

输入p，打印分区表。

### fdisk 已经三主时，要创建扩展、再创建逻辑

```bash
$ fdisk /dev/sda
Welcome to fdisk (util-linux 2.23.2).

Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.


Command (m for help): n
Partition type:
   p   primary (3 primary, 0 extended, 1 free)		【已经三主】
   e   extended
Select (default e): e								【扩展】
Selected partition 4
First sector (62914560-65011711, default 62914560):	 【1G是扩展区】
Using default value 62914560
Last sector, +sectors or +size{K,M,G} (62914560-65011711, default 65011711):
Using default value 65011711
Partition 4 of type Extended and of size 1 GiB is set

Command (m for help): n								
All primary partitions are in use
Adding logical partition 5							【直接就是逻辑】
First sector (62916608-65011711, default 62916608):	【在扩展内的逻辑】
Using default value 62916608
Last sector, +sectors or +size{K,M,G} (62916608-65011711, default 65011711):
Using default value 65011711
Partition 5 of type Linux and of size 1023 MiB is set

Command (m for help): w
The partition table has been altered!

Calling ioctl() to re-read partition table.

WARNING: Re-reading the partition table failed with error 16: Device or resource busy.
The kernel still uses the old table. The new table will be used at
the next reboot or after you run partprobe(8) or kpartx(8)
Syncing disks.
$ partprobe

$ lsblk
NAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda               8:0    0   31G  0 disk
├─sda1            8:1    0    1G  0 part /boot
├─sda2            8:2    0    9G  0 part
│ ├─centos-root 253:0    0 27.9G  0 lvm  /
│ └─centos-swap 253:1    0    1G  0 lvm  [SWAP]
├─sda3            8:3    0   20G  0 part
│ └─centos-root 253:0    0 27.9G  0 lvm  /
├─sda4            8:4    0  512B  0 part		【扩展分区是不能用的，512B】
└─sda5            8:5    0 1023M  0 part		【所以fdisk还必须分逻辑分区】
sr0              11:0    1 1024M  0 rom

$ fdisk -l

Disk /dev/sda: 33.3 GB, 33285996544 bytes, 65011712 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk label type: dos
Disk identifier: 0x000bf545

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *        2048     2099199     1048576   83  Linux
/dev/sda2         2099200    20971519     9436160   8e  Linux LVM
/dev/sda3        20971520    62914559    20971520   83  Linux
/dev/sda4        62914560    65011711     1048576    5  Extended
/dev/sda5        62916608    65011711     1047552   83  Linux

Disk /dev/mapper/centos-root: 30.0 GB, 29955719168 bytes, 58507264 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/mapper/centos-swap: 1073 MB, 1073741824 bytes, 2097152 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

