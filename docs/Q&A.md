# ls 的10 个字符

文件类型 1 位：-d、bc、spl

​	`-` 普通文件类型

​	`d` 目录文件

​	`b` 块设备文件

​	`c` 字符设备文件

​	`s` 套接字文件

​	`p` 管道文件

​	`l` 链接文件

文件权限 9 位：

​	1-3位数字代表文件所有者的权限

​	4-6位数字代表同组用户的权限

​	7-9数字代表其他用户的权限

​	**rwx对应421**

# 说一说常用的 Linux 命令

文件、文件目录 rm, mkdir, chmod, tar

路径 cd,pwd,ls

查看文件 cat, vim, less,more

查找文件 find, locate, which, type -p, whereis

网络 ping, ifconfig, ipaddr

远程 sftp, ssh, scp

进程 ps, top, kill, df

服务 service , systemctl 



# 下面哪个Linux命令不能用于查看文件内容?

cat 显示整个

less和more：分页显示文本文件

vim：可以打开文件进行查看或者编辑。

# 在Linux系统中，可以用来查找可执行文件的是

find 路径 -name加文件名

locate 所有文件

which **可执行文件**

type -p 相当于which  **可执行文件**

whereis **可执行文件**

# 有一个日志文件Test.txt，其中每行的内容是服务器的mac地址，下面哪个命令可以找到次数最多的前5个mac和出现的次数

```bash
sort Test.txt | uniq -c | sort -rn | head -n 5

cat Test.txt | sort | uniq -c | sort -rn | head -n 5
```

sort -rn为按照数字降序排序；



# 使用 shell 命令 将某个文件夹下的所有txt 文件全部找到，并删除

`find /i -type f -name "*.txt" -exec rm -rf {} \`
