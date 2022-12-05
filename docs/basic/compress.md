- [1. Archive](#1-archive)
  - [1.1. create](#11-create)
  - [1.2. extract](#12-extract)
  - [1.3. show content](#13-show-content)
- [2. Compress & Decompress](#2-compress--decompress)
- [3. dd copy](#3-dd-copy)

---

If you want to compress some files, the first thing is to combine them into an archive, and then compress the archive. It is not to directly compress files.

# 1. Archive

## 1.1. create

```bash
$ tar -cvf T.tar a.txt b.jpg
```
- `-c`: create an archive from many files.
- `-v`: verbose, this is optional.
- `-f`: write to the following file. `T.tar`.
- last option: read from files you want to compress. `a.txt b.jpg`


This archive `.tar` file is bigger than the sum of the original files.



## 1.2. extract

```bash
$ tar -xvf T.tar
```
`-x`: denotes that **extract** files from the archive.

## 1.3. show content

```bash
$ tar -tvf T.tar
```
display files from the archive.
# 2. Compress & Decompress


3 common compress tools: `bzip2`, `gzip`, `compress`.


| tools | bzip2 | gzip | compress |
|:-:|:-:|:-:|:-:|
| **extension** | `.tar.bz2` | `.tar.gz` or `.tgz` | `.tar.Z` |
| **speed** | slowest | middle | fastest |
| **result** | smallest | middle | larger |


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

```bash
# -v, 显示进度

# -z, --compress
$ xz -z T.tar

# -d, --decompress
$ xz -d T.tar.xz
```
# 3. dd copy

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