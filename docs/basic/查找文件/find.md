# find 解析

`find path [options] [expression] `

path 默认当前路径

​	查找指定路径及其内部的所有子目录。



expression：默认-print

​	-print   find命令将匹配的文件输出到标准输出。 

​	-exec    find命令对匹配的文件执行该参数所给出的shell命令。 

​	-ok 和- exec的作用相同，只不过以一种更为安全的模式来执行该参数所给出的shell命令，在执行每一个命令之前，提示用户是否执行. 



options

​	-name  按照文件名，支持通配符

​	-perm  按照文件权限来查找文件 

​	-type  查找某一类型的文件 

​		f(普通文件从`-`变成`f`),d
​		b,c
​		l,p,s

​	-size选项 ,按文件的大小查找文件的

​	-mtime -n +n  按照文件的更改时间来查找文件，-n表示文件更改时间距现在n天以内，+n表示文件更改时间距现在n天以前。 

​	-newer file1 查找更改时间比文件file1新的文件。 



# 例子

## 指定名字

当前目录下指定名字

```bash
$ find /usr -type f -name "Bash"

# 不区分大小写
$ find /usr -type f -iname "Bash"
/usr/share/menu/bash
/usr/share/lintian/overrides/bash
/usr/bin/bash

# 逻辑或
$ find -name *.log -o -name *yml
./logs/nacos/config.log
./logs/nacos/naming.log
./docker-compose.yml

```

## 大小


```bash
# 大小正好为 50KB 的文件
find . -size 50k
# 大于 20 bytes 的文件
find . -size +20c
# 小于 1G 的文件
find . -size -1G
# 大于 500 MB 但小于 1 GB 的文件：
find . -size +500M -size -1G
```

- `-size N`: 文件大小

  `N` 表示正好 N大小的文件，`+N` 查找大于 N 的文件，`-N` 查找小于 N 的文件。

  不支持小数，`3.5G`不行，`3500M`才行

  - c: bytes
  - k: kilobytes
  - M: Megabytes
  - G: Gigabytes

```bash
# `-empty`: 查找空文件，可以配合`-type`区分文件还是目录
$ find -empty
./.pki/nssdb
./.m2/repository
./logs/nacos/naming.log
./registry-data/docker/registry/v2/repositories/wisehub-file-service/_uploads

$ find -empty -type d
./.pki/nssdb
./.m2/repository
./registry-data/docker/registry/v2/repositories/wisehub-file-service/_uploads
$ find -empty -type f
./logs/nacos/naming.log
```



## 执行删除

`rm` 只能支持删除某一层的文件，不能删除其子孙目录的。

```bash
rm -rfv *.md
```

find 递归删除

```bash
find -type f -name "*.md" -exec rm -v {} \;
find -type f -name "*.md" -exec rm -v {} +
```

- `{}` 大括号充当匹配文件结果的占位符，因此 `rm-v {}` 将删除find命令找到的文件；
- 结束 shell 执行的命令（exec之后的命令）
  - 第一种是`\;`。反斜杠 `\`是转义分号。
  - 第二种是`+`



