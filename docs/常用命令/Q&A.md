[toc]

## ls 的10 个字符

```bash
-rwxr-xr-x  1 lab lab  120771089 Oct 19  2023 Miniconda3-latest-Linux-x86_64.sh
```

- 文件类型 1 位：
  - `-` 普通文件类型，`d` 目录文件，`l` 链接文件
  - `b` 块设备文件，`c` 字符设备文件
  - `s` 套接字文件
  - `p` 管道文件

- 文件权限 9 位：
  - **rwx对应421**，从高到低
  - 1-3位：**文件所有者**的权限
  - 4-6位：**同组用户**的权限
  - 7-9位：**其他用户**的权限

## 日志查询

### 在log文件中查找所有IP

```bash
grep -oE "([0-9]{1,3}.){3}[0-9]{1,3}" logfile
```

### 有一个日志文件Test.txt，其中每行的内容是服务器的mac地址，下面哪个命令可以找到次数最多的前5个mac和出现的次数

```bash
sort Test.txt | uniq -c | sort -rn | head -n 5

cat Test.txt | sort | uniq -c | sort -rn | head -n 5
```

sort -rn为按照数字降序排序；

## 说一说常用的 Linux 命令

文件、文件目录 rm, mkdir, chmod, tar

路径 cd,pwd,ls

查看文件 cat, vim, less,more

查找文件 find, locate, which, type -p, whereis

网络 ping, ifconfig, ipaddr

远程 sftp, ssh, scp

进程 ps, top, kill, df

服务 service , systemctl 

### 下面哪个Linux命令不能用于查看文件内容?

cat 显示整个

less和more：分页显示文本文件

vim：可以打开文件进行查看或者编辑。

### 在Linux系统中，可以用来查找可执行文件的是

find 路径 -name加文件名

locate 所有文件

which **可执行文件**

type -p 相当于which  **可执行文件**

whereis **可执行文件**

### 将某个文件夹下的所有txt 文件全部找到，并删除

`find /someDirectory -type f -name "*.txt" -exec rm -rf {} \;`
