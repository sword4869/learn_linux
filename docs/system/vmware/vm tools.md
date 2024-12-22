

## 快捷

高级的linux支持快速安装。

```bash
sudo apt-get autoremove open-vm-tools  //卸载
sudo apt-get install open-vm-tools-desktop  //安装
sudo reboot  //重启
```

## 手动vmware tools

centos7

```bash
# 挂载vmware tools光驱
$ mkdir -p /mnt/cdrom
$ mount /dev/cdrom /mnt/cdrom/
mount: /dev/sr0 is write-protected, mounting read-only			【这是正常的，只是告诉cdrom是只读的光驱】

# 因为只读，拷贝出来
$ cd /mnt/cdrom
$ mkdir -p ~/tmp
$ cp VMwareTools-10.3.23-16594550.tar.gz ~/tmp
$ cd ~/tmp
$ tar xf VMwareTools-10.3.23-16594550.tar.gz
$ cd vmware-tools-distrib/
# -f : 强制安装
# -d : 自动回答问题与建议的答案。
$ sudo ./vmware-install.pl -f -d
```
```bash
$ sudo ./vmware-install.pl -f -d
-bash: ./vmware-install.pl: /usr/bin/perl: bad interpreter: No such file or directory
$ yum -y install perl
$ yum install yum-utils 
$ yum update
$ yum install policycoreutils-python 
$ sudo ./vmware-install.pl -f -d

The configuration of VMware Tools 10.3.23 build-16594550 for Linux for this
running kernel completed successfully.								【安装成功了】

VMware Tools installed on top of open-vm-tools has not added anything of
significance or potential benefit.  VMware Tools is not needed.			【因为之前已经安装了 open-vm-tools】

The removal of VMware Tools 10.3.23 build-16594550 for Linux completed
successfully.  Thank you for having tried this software.			【又给我卸载了】
```

