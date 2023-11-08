- [1. environmental varibles](#1-environmental-varibles)
  - [1.1. View variables](#11-view-variables)
    - [1.1.1. View default environmental variables](#111-view-default-environmental-variables)
    - [1.1.2. View all environmental variables](#112-view-all-environmental-variables)
    - [1.1.3. View by echo](#113-view-by-echo)
  - [1.2. Change varibale](#12-change-varibale)
    - [1.2.1. delete this new variable](#121-delete-this-new-variable)
    - [1.2.2. change PATH](#122-change-path)
    - [1.2.3. temporary](#123-temporary)
      - [1.2.3.1. 用户身份登陆ubuntu服务器，用户目录新建.bashrc文件并source之后设置生效，但是使用ssh重登之后发现之前的设置不再生效。](#1231-用户身份登陆ubuntu服务器用户目录新建bashrc文件并source之后设置生效但是使用ssh重登之后发现之前的设置不再生效)

---
# 1. environmental varibles
## 1.1. View variables
### 1.1.1. View default environmental variables
Each user, including root, has a default set of environment variables that determine how the system looks, acts, and feels.
```bash
$ env
```
Variables are simply strings in key­value pairs. One value:`KEY=value`, multiple values:`KEY=value1:value2`.

Environment variables are always uppercase, as in `HOME`, `PATH`.
### 1.1.2. View all environmental variables
This command will list all environment variables unique to your system.
```bash
$ set
```
```bash
$ set | grep HISTSIZE
HISTSIZE=1000
```

### 1.1.3. View by echo

Only `echo $VARIABLE` has `$`.
```bash
$ echo $HISTSIZE
1000
```

## 1.2. Change varibale

### 1.2.1. delete this new variable
```bash
$ unset VARIABLE
```
> Question: Is it different between `unset VARIABLE` and `VARIABLE=''`?


### 1.2.2. change PATH
To add `newhackingtool` to your `PATH` variable, this directory should be appended to the end of `PATH`, not be replaced.
```bash
$ PATH=/root/newhackingtool:$PATH
```

PS: `/root/newhackingtool` is in front of `$PATH`, then `/root/newhackingtool` is firstly searched.

### 1.2.3. temporary

> 这有什么用？


When you change an environment variable, that change only occurs in that bash shell session. This means that when you close the terminal, any changes you made are lost, with values set back to their defaults.
```bash
$ HISTSIZE=0
```
> Question: permanent? This doesn't work. So what is the effect of export?
```bash
$ HISTSIZE=0
$ export HISTSIZE

# or
$ export HISTSIZE=0
```

> 修改`~/.bashrc`或`/etc/profile`。

- `~/.bashrc`:
  该文件包含专用于**某个用户**`~`的bash shell信息，当该用户登录时以及每次打开新的shell时,该文件被读取。
- `/etc/profile`:
  设定的变量可以作用于**任何用户**，而`~/.bashrc`等中设定的变量继承`/etc/profile`中的变量。


```bash
echo "export PATH=$PATH:/usr/local/cuda-11.0/bin" >> ~/.bashrc
echo "export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/cuda-11.0/lib64" >> ~/.bashrc
source ~/.bashrc
```

> 保存之后，两种生效方式：

1. 如果不执行 source 命令，则需重启系统才能生效。
2. source 命令使这个修改立即生效。
  
PS: source的生效只是临时在当前终端生效。即重新开启一个终端后，该环境变量失效，新的终端还得再使用source命令。而重启后的生效是都生效。

#### 1.2.3.1. 用户身份登陆ubuntu服务器，用户目录新建.bashrc文件并source之后设置生效，但是使用ssh重登之后发现之前的设置不再生效。

```bash
# 环境变量，必须等每次source才能加载
~$ echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
~$ source ~/.bashrc
~$ echo $PATH
/usr/local/cuda-11.7/bin:/home/lenovo/miniconda3/condabin:/home/lenovo/miniconda3/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
```

新建一个`.profile`文件，添加自动运行`.bashrc`的配置信息

```bash
# if running bash
if [ -n "$BASH_VERSION" ]; then
    # include .bashrc if it exists
    if [ -f "$HOME/.bashrc" ]; then
        . "$HOME/.bashrc"
    fi
fi
```

`~/.profile`: executed by the command interpreter for login shells.
This file is not read by bash(1), if `~/.bash_profile` or `~/.bash_login` exists.