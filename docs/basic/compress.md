- [1. compress](#1-compress)
  - [1.1. Archive](#11-archive)
    - [1.1.1. create](#111-create)
    - [1.1.2. extract](#112-extract)
    - [1.1.3. show content](#113-show-content)
    - [1.1.4. Compress \& Decompress](#114-compress--decompress)
    - [1.1.5. xz](#115-xz)
  - [1.2. zip](#12-zip)
  - [1.3. dd copy](#13-dd-copy)

---
# 1. compress
If you want to compress some files, the first thing is to combine them into an archive, and then compress the archive. It is not to directly compress files.

## 1.1. Archive

### 1.1.1. create

```bash
$ tar -cvf T.tar a.txt b.jpg
```
- `-c`: create an archive from many files.
- `-v`: verbose, this is optional.
- `-f`: write to the following file. `T.tar`.
- last option: read from files you want to compress. `a.txt b.jpg`


This archive `.tar` file is bigger than the sum of the original files.

!!! note 直接压缩
```bash
tar -czvf file.tar.gz xxx  # z压缩 tar.gz

tar -cjvf file.tar.bz2 xxx # j压缩 tar.bz2

tar -cZvf file.tar.Z xxx   # Z压缩 tar.Z
```


### 1.1.2. extract

```bash
$ tar -xvf T.tar
$ tar -xvf T.tar -C ~/Desktop/newFolder
```
- `-x`: denotes that **extract** files from the archive.
- `-C`: 指定解压的输出目录


!!! note 直接解压
```bash
tar -xzvf file.tar.gz   # z解压 tar.gz

tar -xjvf file.tar.bz2  # j解压 tar.bz2

tar -xZvf file.tar.Z    # Z解压 tar.Z
```



### 1.1.3. show content

```bash
$ tar -tvf T.tar
```
display files from the archive.
### 1.1.4. Compress & Decompress

```bash
# 确实压缩了
-rw-------  1 lab lab 6726338560 Aug 27 18:36 nerf.tar
-rw-------  1 lab lab 3369845884 Aug 27 19:16 nerf.tar.gz
```

| tools | extension | speed | result |
|:-:|:-:|:-:|:-:|
| bzip2 | `.tar.bz2` | slowest | smallest |
| gzip | `.tar.gz` or `.tgz` | middle | middle |
| compress | `.tar.Z` | fastest | larger |


```bash
$ bzip2 T.tar

$ bunzip2 T.tar.bz2
```

```bash
$ gzip T.tar

$ gunzip T.tar.gz
```
It's worth noting that `gzip` can also be used to extract `.zip` files.

```bash
$ compress T.tar

$ uncompress T.tar.Z
```
### 1.1.5. xz
```bash
# -v, 显示进度

# -z, --compress
$ xz -z T.tar

# -d, --decompress
$ xz -d T.tar.xz
```
## 1.2. zip

```
sudo apt install zip
```

```bash
# 全是文件
$ zip result.zip file1 file2
# 含有文件夹
$ zip -r result.zip file1 folder2


$ unzip result.zip
$ unzip result.zip -d ~/Desktop
# 列举压缩文件的内容
$ unzip -l result.zip
```


## 1.3. dd copy

- A file, a filesystem, or even an entire hard drive.
- A **bit-­by-­bit / physical** copy
  without the filesystem or other logical structures. 
- Even deleted files are copied.
  Deleted files will not be copied with most **logical copying** utilities, such as `cp`.
- Forensic investigators
  Get deleted files and other artifacts that might be useful for finding evidence against the hacker.
- Should not be used for typical day­-to-­day copy
  because it is very slow.


```bash
$ dd if=/dev/sdb of=/root/flashcopy
```
`if` designates your input file, `of` designates your output file. Here is copying `/dev/sdb` to `/root/flashcopy`.

```bash
$ dd if=/dev/sdb of=/root/flashcopy bs=4096 conv:noerror 
```
- `bs`: 
  allows you to determine the block size (the number of bytes read/written per block) of the data being copied. By default, it is set to 512 bytes, but it can be changed to speed up the process. Typically, this would be set to the sector size of the device, most often 4096 bytes (4KB).

- `noerror`: 
  continues to copy even if errors are encountered. 