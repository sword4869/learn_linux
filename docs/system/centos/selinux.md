将SELINUX=enforcing改为SELINUX=disabled

```bash
$ vi /etc/selinux/config
SELINUX=disabled
# 重启
$ reboot
```