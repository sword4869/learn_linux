- [1. Linux-Mint](#1-linux-mint)
  - [1.1. Basic](#11-basic)
  - [1.2. Application](#12-application)
    - [1.2.1. deb](#121-deb)
    - [1.2.2. software shop](#122-software-shop)
    - [1.2.3. apt install](#123-apt-install)
  - [1.3. configuration](#13-configuration)
    - [1.3.1. GPU](#131-gpu)
    - [1.3.2. python](#132-python)
    - [1.3.3. vscode](#133-vscode)
    - [1.3.4. ssh](#134-ssh)
  - [1.4. 搬家](#14-搬家)

# 1. Linux-Mint
## 1.1. Basic

跟着welcome的first step: system snapshots, update manager, 安输入法。

驱动。

## 1.2. Application

### 1.2.1. deb

Browser: `Microsoft Edge`

WPS

翻译 copytranslator

QQ

teamviewer

剪贴板 copyQ: https://github.com/hluk/CopyQ/releases

ffmpg

百度网盘

vscode
miniconda 

### 1.2.2. software shop

ScreenShot: `Flameshot`

Thunar 文件管理器


实时网速显示
ubuntu: flathub(https://flatpak.org/setup/Ubuntu) -> Extension Manager (shell extension) -> speed
mint: 先在软件商店里找，桌面panel的applets的`Download and upload speed by cardsurf`


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