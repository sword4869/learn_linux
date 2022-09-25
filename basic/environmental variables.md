- [1. View variables](#1-view-variables)
  - [1.1. View default environmental variables](#11-view-default-environmental-variables)
  - [1.2. View all environmental variables](#12-view-all-environmental-variables)
  - [1.3. View by echo](#13-view-by-echo)
- [2. Change varibale](#2-change-varibale)
  - [2.1. delete this new variable](#21-delete-this-new-variable)
  - [2.2. change PATH](#22-change-path)
  - [2.3. temporary](#23-temporary)

---

# 1. View variables
## 1.1. View default environmental variables
Each user, including root, has a default set of environment variables that determine how the system looks, acts, and feels.
```bash
$ env
```
Variables are simply strings in key­value pairs. One value:`KEY=value`, multiple values:`KEY=value1:value2`.

Environment variables are always uppercase, as in `HOME`, `PATH`.
## 1.2. View all environmental variables
This command will list all environment variables unique to your system.
```bash
$ set
```
```bash
$ set | grep HISTSIZE
HISTSIZE=1000
```

## 1.3. View by echo

Only `echo $VARIABLE` has `$`.
```bash
$ echo $HISTSIZE
1000
```

# 2. Change varibale

## 2.1. delete this new variable
```bash
$ unset VARIABLE
```
> Question: Is it different between `unset VARIABLE` and `VARIABLE=''`?


## 2.2. change PATH
To add `newhackingtool` to your `PATH` variable, this directory should be appended to the end of `PATH`, not be replaced.
```bash
$ PATH=$PATH:/root/newhackingtool
```

## 2.3. temporary

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

> 这有什么用？

```bash
echo "export PATH=/root/hashcat-6.2.5/hashcat.bin:$PATH" >> /etc/profile
source /etc/profile
```

在`/etc/profile`中添加环境变量后，是使用`source /etc/profile`编译后只能在当前终端生效。即重新开启一个终端后，该环境变量失效。

因为设置的环境变量，并没有真正生效，只是使用source 命令让临时运行而已。重启系统：`reboot`，问题解决；

修改~/.bashrc或/etc/profile。

~/.bashrc:该文件包含专用于某个用户的bash shell的bash信息，当该用户登录时以及每次打开新的shell时,该文件被读取。
另外，/etc/profile中设定的变量(全局)的可以作用于任何用户，而~/.bashrc等中设定的变量(局部)只能继承/etc/profile中的变量。

在这里我们使用第一种方法，使用gedit修改.bashrc文件。

sudo gedit ~/.bashrc
在最后一行加入路径：

export PATH="/usr/local/cuda-11.0/bin:$PATH"
export LD_LIBRARY_PATH="/usr/local/cuda-11.0/lib64:$LD_LIBRARY_PATH"
保存之后，为了使这个修改立即生效，还需要输入如下代码（如果不执行 source 命令，则需重启系统才能生效）：

source ~/.bashrc