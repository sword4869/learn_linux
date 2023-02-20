# shortcut

## ubuntu快速回到桌面

ctrl+alt+d

## tty

ctrl+alt+f1/f2/f3/f4/f5/f6 打字机
ctrl+alt+f7 桌面

```bash
# 我用的lightdm，其他还有gdm

# 关闭tty7的桌面
sudo systemctl stop lightdm

# 开启tty7的桌面
sudo systemctl start lightdm
```