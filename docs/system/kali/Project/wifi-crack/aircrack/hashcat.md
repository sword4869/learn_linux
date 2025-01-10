[toc]

[windows利用Hashcat字典破解WiFi密码-腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1687673)



## Usage

### 🚀手动安装

[hashcat - advanced password recovery](https://hashcat.net/hashcat/)

解压后，里面有windows的exe，linux的bin

```bash
$ ./hashcat.bin -I
```

### 已打包

hashcat 在 Kali Linux 中默认可用。

```bash
sudo apt-get update
sudo apt-get install hashcat
```
在 Fedora、CentOS 和其他基于 RHEL 的发行版上：
```bash
sudo yum install epel-release -y
sudo yum install dnf -y
sudo dnf update
sudo dnf install hashcat	# 失败
```
要在 Arch Linux 上安装 hashcat：
```bash
sudo pacman -Syu
sudo pacman -S hashcat
```

mac

```bash
brew install hashcat
```

### 🚀GPU前提


想用GPU，要安装cuda 和 driver。

```

You are probably missing the CUDA, HIP or OpenCL runtime installation.

* AMD GPUs on Linux require this driver:
  "AMDGPU" (21.50 or later) and "ROCm" (5.0 or later)
* Intel CPUs require this runtime:
  "OpenCL Runtime for Intel Core and Intel Xeon Processors" (16.1.1 or later)
* NVIDIA GPUs require this runtime and/or driver (both):
  "NVIDIA Driver" (440.64 or later)
  "CUDA Toolkit" (9.0 or later)
```

## 显示信息

### 显示设备信息
```bash
$ hashcat -I
'''
hashcat (v6.1.1) starting...

OpenCL Info:
============

OpenCL Platform ID #1
  Vendor..: Advanced Micro Devices, Inc.
  Name....: AMD Accelerated Parallel Processing
  Version.: OpenCL 2.1 AMD-APP (3110.7)

  Backend Device ID #1
    Type...........: GPU
    Vendor.ID......: 1
    Vendor.........: Advanced Micro Devices, Inc.
    Name...........: gfx902
    Version........: OpenCL 2.0 AMD-APP (3110.7)
    Processor(s)...: 8
    Clock..........: 1101
    Memory.Total...: 3481 MB (limited to 2088 MB allocatable in one block)
    Memory.Free....: 3417 MB
    OpenCL.Version.: OpenCL C 2.0
    Driver.Version.: 3110.7 (PAL,HSAIL)
'''
```
### 测试各种hash-type的速度
```bash
$ hashcat -b
'''
OpenCL API (OpenCL 2.1 AMD-APP (3110.7)) - Platform #1 [Advanced Micro Devices, Inc.]
=====================================================================================
* Device #1: gfx902, 3417/3481 MB (2088 MB allocatable), 8MCU

Benchmark relevant options:
===========================
* --optimized-kernel-enable

Hashmode: 0 - MD5
...
'''
```

## options

- 攻击模式: `-a Num`
  
  straight attack 字典破解: 0
  
  combination: 2
  
  Brute-fore 掩码暴力破解: 3
  
  Hybrid Wordlist+Mask 字典加掩码破解: 6
  
- 要破解目标文件的hash类型: `-m Num`
  WPA 握手包加密: 2500，新版本是22000
  
- `-o File`: 将破解的密码存储在输出文件中

-  指定哪块显卡 `-d 1`, 多个用逗号分割

```bash
CUDA API (CUDA 12.6)
====================
* Device #1: NVIDIA GeForce RTX 4060 Laptop GPU, 7099/8187 MB, 24MCU

OpenCL API (OpenCL 3.0 CUDA 12.6.65) - Platform #1 [NVIDIA Corporation]
=======================================================================
* Device #2: NVIDIA GeForce RTX 4060 Laptop GPU, skipped							【2号被跳过】

OpenCL API (OpenCL 2.1 AMD-APP (3516.0)) - Platform #2 [Advanced Micro Devices, Inc.]
=====================================================================================
* Device #3: AMD Radeon 780M Graphics, skipped										【3号被跳过】
```



## 掩码暴力破解 Charsets

### Build-in Charsets

```
- [ Built-in Charsets ] -

  ? | Charset
 ===+=========
  l | abcdefghijklmnopqrstuvwxyz				小写字母 
  u | ABCDEFGHIJKLMNOPQRSTUVWXYZ				大写字母
  d | 0123456789
  h | 0123456789abcdef							十六进制，小写 
  H | 0123456789ABCDEF							十六进制，大写 
  s |  !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~			特殊字符
  a | ?l?u?d?s									?l?u?d?s
  b | 0x00 - 0xff
```

```bash
hashcat -m 2500 -a 3 hashfile ?l?l?l?l?l?l?l?l
```

`aaaaaaaa`-`zzzzzzzz`

### Custom Charsets

```bash
-1, --custom-charset1 CS
-2, --custom-charset2 CS
-3, --custom-charset3 CS
-4, --custom-charset4 CS
```

```bash
hashcat -m 2500 -a 3 hashfile -1 ?l?d ?1?1?1?1?1?1?1?1
## `00000000`-`zzzzzzzz`
```

`-1 ?l?d ?1?1`: `aa`,`11` 
`-1 ?l?d ?11`: `a1`,`11` 
`-1 ?l?d -2 ?u?d ?1?2`: `aA`,`11`

### 例子

```
八位数字			?d?d?d?d?d?d?d?d
八位任意字符		  ?a?a?a?a?a?a?a?a
3位未知，中间admin，3位未知		?a?a?aadmin?a?a?a

6-8位数字			--increment --increment-min 6 --increment-max 8 ?d?d?d?d?d?d?d?d
```

## Example

### WPA握手包

2500 hccapx已过时：~~`aircrack-ng 2-03.cap -j mer` 生成 `mer.hccapx`~~

22000 `hc22000`格式: [hashcat hcxpcapngtool - advanced password recovery](https://hashcat.net/cap2hashcat/)



```bash
# 很多人喜欢用手机号
hashcat -m 22000 -a 3 1695405_1734879290.hc22000 -1 3456789 1?1?d?d?d?d?d?d?d?d?d

# 纯数字
hashcat -m 22000 -a 3 1695405_1734879290.hc22000 --increment --increment-min 8 --increment-max 16 ?d?d?d?d?d?d?d?d?d?d?d?d?d?d?d?d

# 手机号 + 一些字符
hashcat -m 22000 -a 3 1695405_1734879290.hc22000 --increment --increment-min 11 --increment-max 16 -1 3456789 -2 ?l?u?d  1?1?d?d?d?d?d?d?d?d?d?2?2?2?2?2

# 纯小写字母
hashcat -m 22000 -a 3 1695405_1734879290.hc22000 --increment --increment-min 8 --increment-max 16 -1 ?l ?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1

# 纯大写字母
hashcat -m 22000 -a 3 1695405_1734879290.hc22000 --increment --increment-min 8 --increment-max 16 -1 ?u ?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1

# 数字 + 字母
hashcat -m 22000 -a 3 1695405_1734879290.hc22000 --increment --increment-min 8 --increment-max 16 -1 ?l?u?d ?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1?1

# 任意字符 8-16 位
hashcat -m 22000 -a 3 1695405_1734879290.hc22000 --increment --increment-min 8 --increment-max 16 ?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a?a
```

### 其他

```bash
# 单个字典对一个经过MD5加密算法加密过后的hash值进行破解
hashcat -a 0 -m 0 e10abc3949ba59abbe56e057f20f883e /usr/password.txt
```



<https://www.cnblogs.com/xyongsec/p/12097321.html>

<https://hashcat.net/wiki/doku.php?id=mask_attack>

[如何在 Linux 上使用 hashcat 破解哈希值](https://cn.linux-console.net/?p=12910)
