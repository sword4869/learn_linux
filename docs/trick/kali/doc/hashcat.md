[windows利用Hashcat字典破解WiFi密码-腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1687673)



## Usage

想用GPU，要安装cuda。

```bash
Usage: hashcat [options] hash|hashfile|hccapxfile [dictionary|mask|directory]
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

General:

- attack-mode:
  `-a Num`
  Brute-fore: 3

- Hash-type: 
  `-m Num`
  WPA 握手包加密: 2500

- output file:
  `-o File`

## Charsets

### Build-in Charsets

```
- [ Built-in Charsets ] -

  ? | Charset
 ===+=========
  l | abcdefghijklmnopqrstuvwxyz
  u | ABCDEFGHIJKLMNOPQRSTUVWXYZ
  d | 0123456789
  h | 0123456789abcdef
  H | 0123456789ABCDEF
  s |  !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  a | ?l?u?d?s
  b | 0x00 - 0xff
```

```bash
hashcat -m 2500 -a 3 hashfile ?l?l?l?l?l?l?l?l
```

`aaaaaaaa`-`zzzzzzzz`

### Custom Sharsets

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

## Example

```bash
hashcat -m 2500 -a 3 hashfile.hcaapx
```

<https://www.cnblogs.com/xyongsec/p/12097321.html>

<https://hashcat.net/wiki/doku.php?id=mask_attack>
