linux
```bash
# 立刻关机，halt
sudo shutdown -h now
# 10 mins
sudo shutdown -h 10

# 重启, reboot
sudo shutdown -r now
```
```bash
# 立刻关机
halt

# 立刻关机
poweroff

# 重启
reboot
```

win
```bash
# 立刻关机
shutdown -s -t 0
shutdown -p

# 10 min
shutdown -s -t 600

# 重启
shutdown -r -t 0

# 强制不询问
shutdown -p -f
```