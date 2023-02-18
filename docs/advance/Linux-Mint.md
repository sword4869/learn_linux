- [1. Linux-Mint](#1-linux-mint)
  - [1.1. Basic](#11-basic)
  - [1.2. Application](#12-application)
  - [1.3. Productivity Software](#13-productivity-software)
  - [Productivity](#productivity)
    - [GPU](#gpu)
    - [python](#python)
    - [vscode](#vscode)
    - [ssh](#ssh)
  - [搬家](#搬家)

# 1. Linux-Mint
## 1.1. Basic

跟着welcome的first step: system snapshots, update manager, 安输入法。

驱动。

## 1.2. Application

Browser: `Microsoft Edge`

ScreenShot: `Flameshot`

实时网速显示，先在软件商店里找，桌面panel的applets的`Download and upload speed by cardsurf`，最差是终端里的`sudo apt install vnstati`

WPS

翻译 copytranslator

QQ

teamviewer

剪贴板 copyQ: https://github.com/hluk/CopyQ/releases

ffmpg

百度网盘

## 1.3. Productivity Software

```bash
git 
vim 

# c/c++
build-essential 
cmake

# 电脑温度
sensors

# 后台
screen

# 网络
iproute2         
```


## Productivity
### GPU

`~/.bashrc`
```
export CUDA_HOME=/usr/local/cuda-11.6
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH="$CUDA_HOME/lib64:/home/lab/anaconda3/envs/sediment/lib/python3.8/site-packages/nvidia/cudnn/lib"
```

### python

ananconda
`~/.condarc`
`pip`换源

### vscode

### ssh

config ssh
upload github' secret key

## 搬家

ssh: `~/.ssh`

conda: `~/.condarc`

gpu: `~/.bashrc`