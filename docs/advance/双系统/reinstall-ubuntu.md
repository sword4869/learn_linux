

# 1. Linux-Mint
## 1.1. Basic

安输入法。

驱动。

## 1.2. Application

### 1.2.1. deb

Browser: `Microsoft Edge`

剪贴板 copyQ: https://github.com/hluk/CopyQ/releases

mp4: `sudo apt install ffmpeg h264enc smplayer`

miniconda 

ScreenShot: `Flameshot `software shop


### 1.2.3. apt install

```bash
git 
vim
nano

# c/c++
build-essential 
cmake

# 后台
screen

# 网络
iproute2
curl

# locate
plocate

# ssh
openssh-client
openssh-server
```

### wine

[Ubuntu - WineHQ Wiki](https://wiki.winehq.org/Ubuntu_zhcn)

### 实时网速显示

ubuntu:

​	终端里的 ifstat: `ifstats -S` 

​	任务栏的：

​		[NetSpeed – 在 Ubuntu 20.04 中显示下载/上传速度 | 22.04 面板 (linux-terminal.com)](https://cn.linux-terminal.com/?p=6733#google_vignette)

​		flathub(https://flatpak.org/setup/Ubuntu) -> Extension Manager (shell extension) -> speed
mint: 

​	先在软件商店里找，桌面panel的applets的`Download and upload speed by cardsurf`



[ubuntu20.04实时显示CPU、内存、网速_sudo apt-get install indicator-CSDN博客](https://blog.csdn.net/g313105910/article/details/118335404)

[ubuntu查看实时网速_ubuntu查看网速-CSDN博客](https://blog.csdn.net/u012763794/article/details/108383717)


## 1.3. configuration
### 1.3.1. GPU

`~/.bashrc`


### 1.3.2. python

`~/.condarc`
`pip`换源

### 1.3.3. vscode

同步设置

插件
### 1.3.4. ssh

config ssh

upload github' secret key

## 1.4. 搬家

ssh: `~/.ssh`

conda: `~/.condarc`

gpu: `~/.bashrc`

git: `~/.gitconfig`

vscode: `~/.vscode/extensions`（`~/.vscode/argv.json`不要搬，每个不一样）