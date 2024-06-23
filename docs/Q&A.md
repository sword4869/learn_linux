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

# 下面哪个Linux命令不能用于查看文件内容?

cat主要有三大功能：
	一次显示整个文件。`cat filename`
	从键盘创建一个文件。`cat > filename`
	将几个文件合并为一个文件： `cat file1 file2 > file`

​	PS: 不能编辑已有文件!

less和more：分页显示文本文件

​	less比more更加完善

vim：可以打开文件进行查看或者编辑。

# 在Linux系统中，可以用来查找可执行文件的是

find 路径 -name加文件名

locate所有文件

which**可执行文件**

type -p相当于which

whereis可以搜索**可执行文件**、联机帮助文件、源代码文件

# 有一个日志文件Test.txt，其中每行的内容是服务器的mac地址，下面哪个命令可以找到次数最多的前5个mac和出现的次数

sort Test.txt | uniq -c | sort -rn | head -n 5

cat Test.txt | sort | uniq -c | sort -rn | head -n 5


sort为排序输出；

cat为逆序输出；

uniq为去重；

sort -rn为按照数字降序排序；

head -n 5为输出前5行；

top -n 5为显示更新5次后退出；

# 使用 shell 命令 将某个文件夹下的所有txt 文件全部找到，并删除

`find /i -type f -name "*.txt" -exec rm -rf {} \`
