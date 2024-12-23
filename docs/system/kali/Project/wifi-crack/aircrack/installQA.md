[toc]

---
# kmod
```
root@localhost:/home# airmon-ng
Your kernel has module support but you don't have modprobe installed.
It is highly recommended to install modprobe (typically from kmod).
Your kernel has module support but you don't have modinfo installed.
It is highly recommended to install modinfo (typically from kmod).
Warning: driver detection without modinfo may yield inaccurate results.
ls: cannot open directory '/sys/class/ieee80211/': Permission denied
```

Solution is `apt install kmod`.

# usb support

```bash
└─# airmon-ng start wlan0   


PHY     Interface       Driver          Chipset

phy0    wlan0           rt2800usb       Ralink Technology, Corp. RT2870/RT3070

Failed to set wlan0mon up using ip
                (mac80211 monitor mode vif enabled for [phy0]wlan0 on [phy0]wlan0mon)
                (mac80211 station mode vif disabled for [phy0]wlan0)

└─# iwconfig
lo        no wireless extensions.

eth0      no wireless extensions.

wlan0mon  IEEE 802.11  Mode:Monitor  Tx-Power=20 dBm   
          Retry short  long limit:2   RTS thr:off   Fragment thr:off
          Power Management:off

└─# airodump-ng wlan0mon   
ioctl(SIOCSIFFLAGS) failed: No such file or directory
Failed initializing wireless card(s): wlan0mon
```

不是因为`iwconfig`中的`Power Management:off`，这个是正常的。

问题是`airmon-ng start wlan0 `中的`Failed to set wlan0mon up using ip`。


```bash
└─# dmesg
[ 1553.606106] usb 2-1: USB disconnect, device number 2
[ 1556.934421] usb 2-1: new high-speed USB device number 3 using ehci-pci
[ 1557.310656] usb 2-1: New USB device found, idVendor=148f, idProduct=3070, bcdDevice= 1.01
[ 1557.310667] usb 2-1: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[ 1557.310670] usb 2-1: Product: 802.11 n WLAN
[ 1557.310673] usb 2-1: Manufacturer: Ralink
[ 1557.310675] usb 2-1: SerialNumber: 1.0
[ 1557.640601] usb 2-1: reset high-speed USB device number 3 using ehci-pci
[ 1558.009449] ieee80211 phy1: rt2x00_set_rt: Info - RT chipset 3070, rev 0201 detected
[ 1558.871678] ieee80211 phy1: rt2x00_set_rf: Info - RF chipset 0005 detected
[ 1558.879673] ieee80211 phy1: Selected rate control algorithm 'minstrel_ht'
[ 1602.484632] ieee80211 phy1: rt2x00lib_request_firmware: Info - Loading firmware file 'rt2870.bin'
[ 1602.484793] rt2800usb 2-1:1.0: firmware: failed to load rt2870.bin (-2)
[ 1602.484798] rt2800usb 2-1:1.0: Direct firmware load for rt2870.bin failed with error -2
```

也就是说，`rt2870.bin`缺失了。


[why rt2870.bin missed?](https://wiki.debian.org/rt2870sta)。大意是讲新的系统内核移出了这些老硬件的固件支持，所以我们想用就得手动安装。




> if you are using kali

```bash
echo "deb http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib" >> /etc/apt/sources.list
```
```bash
# `firmware-ralink` is the old version of `firmware-misc-nonfree`
apt install firmware-misc-nonfree wireless-tools
```

解决！

> if you are using other linux, like ubuntu


There are the download links of `rt2870.bin`：
- [就在这个文件夹下](rt2870.bin)
- [Repository of firmware blobs for use with the Linux kernel](https://git.kernel.org/pub/scm/linux/kernel/git/firmware/linux-firmware.git/)

- [firmware-misc-nonfree（20190114-2） [non-free]](https://packages.debian.org/buster/firmware-misc-nonfree)


但是怎么安装呢？
  
[https://www.cyberciti.biz/tips/linux-install-rt2870-chipset-based-usb-wireless-adapter.html](https://www.cyberciti.biz/tips/linux-install-rt2870-chipset-based-usb-wireless-adapter.html)

不太会。