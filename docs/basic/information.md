[toc]

## usename

```bash
$ whoami
user1
```
## 内核版本

```bash
$ uname 
Linux

$ uname -r
5.15.0-48-generic

$ uname -n
LAPTOP-KB4DNMO0

$ uname -a
Linux LAPTOP-KB4DNMO0 5.15.167.4-microsoft-standard-WSL2 #1 SMP Tue Nov 5 00:21:55 UTC 2024 x86_64 x86_64 x86_64 GNU/Linux
```
```bash
$ cat /etc/os-release 
PRETTY_NAME="Ubuntu 22.04.3 LTS"
NAME="Ubuntu"
VERSION_ID="22.04"
VERSION="22.04.3 LTS (Jammy Jellyfish)"
VERSION_CODENAME=jammy
ID=ubuntu
ID_LIKE=debian
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
UBUNTU_CODENAME=jammy

$ echo $(. /etc/os-release;echo $ID $VERSION_ID)
ubuntu 22.04
```
## hostname

```bash
# cat /etc/hostname
$ hostname
DESKTOP-KSTB1B7

# 永久修改
$ sudo echo "PermanentHostname" > /etc/hostname

# 临时修改
$ sudo hostname "TemporaryHostname"
```

## cpu

```bash
# 显示CPU信息
$ cat /proc/cpuinfo
processor       : 0
vendor_id       : AuthenticAMD
cpu family      : 23
model           : 17
model name      : AMD Ryzen 5 2500U with Radeon Vega Mobile Gfx
stepping        : 0
microcode       : 0xffffffff
cpu MHz         : 1996.177
cache size      : 512 KB
physical id     : 0
siblings        : 8
core id         : 0
cpu cores       : 4
apicid          : 0
initial apicid  : 0
fpu             : yes
fpu_exception   : yes
cpuid level     : 13
wp              : yes
flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid 
extd_apicid pni pclmulqdq ssse3 fma cx16 sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext 
ssbd ibpb vmmcall fsgsbase bmi1 avx2 smep bmi2 rdseed adx smap clflushopt sha_ni xsaveopt xsavec xgetbv1 xsaves xsaveerptr virt_ssbd arat
bugs            : sysret_ss_attrs null_seg spectre_v1 spectre_v2 spec_store_bypass
bogomips        : 3992.35
TLB size        : 2560 4K pages
clflush size    : 64
cache_alignment : 64
address sizes   : 48 bits physical, 48 bits virtual
power management:
```
```bash

```
代替上述，显示更全的信息
```bash
# apt install neofetch
$ neofetch
```