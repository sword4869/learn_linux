ps aux ：最常用的 BSD 风格选项组合，其中的 a表示所有关联到终端的进程，如果同时使用 x 则代表所有进程；u 表示列出进程的用户。

ps -elf ： unix标准风格组合，其中-e 代表列出所有进程，-l 代表长格式，-f 代表完整的格式

## ps -ef

可以知道 **进程所属的用户、PID、运行时长、执行的命令**。

```bash
lab@LAPTOP-KB4DNMO0:~$ ps -ef
UID          PID    PPID  C STIME TTY          TIME CMD
root           1       0  0 08:58 ?        00:00:05 /sbin/init
root           2       1  0 08:58 ?        00:00:00 /init
root           7       2  0 08:58 ?        00:00:00 plan9 --control-socket 6 --log-level 4 --server-fd 7 --pipe-
root          36       1  0 08:58 ?        00:00:00 /lib/systemd/systemd-journald
root          56       1  0 08:58 ?        00:00:00 /lib/systemd/systemd-udevd
root          69       1  0 08:58 ?        00:00:00 snapfuse /var/lib/snapd/snaps/bare_5.snap /snap/bare/5 -o ro
root          71       1  0 08:58 ?        00:00:00 snapfuse /var/lib/snapd/snaps/core22_1621.snap /snap/core22/
root          72       1  0 08:58 ?        00:00:00 snapfuse /var/lib/snapd/snaps/core22_1612.snap /snap/core22/
root          76       1  0 08:58 ?        00:00:00 snapfuse /var/lib/snapd/snaps/gtk-common-themes_1535.snap /s
root          80       1  0 08:58 ?        00:00:00 snapfuse /var/lib/snapd/snaps/snapd_20290.snap /snap/snapd/2
root          84       1  0 08:58 ?        00:00:01 snapfuse /var/lib/snapd/snaps/snapd_21759.snap /snap/snapd/2
root          88       1  0 08:58 ?        00:00:00 snapfuse /var/lib/snapd/snaps/ubuntu-desktop-installer_1276.
root          89       1  0 08:58 ?        00:00:00 snapfuse /var/lib/snapd/snaps/ubuntu-desktop-installer_1286.
systemd+      96       1  0 08:58 ?        00:00:00 /lib/systemd/systemd-resolved
root         115       1  0 08:58 ?        00:00:00 /usr/sbin/cron -f -P
message+     119       1  0 08:58 ?        00:00:00 @dbus-daemon --system --address=systemd: --nofork --nopidfil
root         145       1  0 08:58 ?        00:00:00 /usr/bin/python3 /usr/bin/networkd-dispatcher --run-startup-
syslog       146       1  0 08:58 ?        00:00:00 /usr/sbin/rsyslogd -n -iNONE
root         150       1  0 08:58 ?        00:00:00 /usr/lib/snapd/snapd
root         152       1  0 08:58 ?        00:00:00 /lib/systemd/systemd-logind
root         225       1  0 08:58 ?        00:00:00 /bin/bash /snap/ubuntu-desktop-installer/1286/bin/subiquity-
root         227       1  0 08:58 ?        00:00:00 /usr/bin/python3 /usr/share/unattended-upgrades/unattended-u
root         238       1  0 08:58 hvc0     00:00:00 /sbin/agetty -o -p -- \u --noclear --keep-baud console 11520
root         240       1  0 08:58 tty1     00:00:00 /sbin/agetty -o -p -- \u --noclear tty1 linux
root         353     225  0 08:58 ?        00:00:02 /snap/ubuntu-desktop-installer/1286/usr/bin/python3.10 -m su
root         357       2  0 08:58 ?        00:00:00 /init
root         358     357  0 08:58 ?        00:00:00 /init
lab          359     358  0 08:58 pts/0    00:00:00 -bash
root         360       2  0 08:58 pts/1    00:00:00 /bin/login -f
lab          420       1  0 08:58 ?        00:00:00 /lib/systemd/systemd --user
lab          421     420  0 08:58 ?        00:00:00 (sd-pam)
lab          426     360  0 08:58 pts/1    00:00:00 -bash
root         447     353  0 08:58 ?        00:00:04 python3 /snap/ubuntu-desktop-installer/1286/usr/bin/cloud-in
lab         5490     359  0 09:19 pts/0    00:00:00 ps -ef
```

