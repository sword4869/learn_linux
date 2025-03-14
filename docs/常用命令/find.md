[toc]

## find 解析

`find path [options] [expression] `

- path 默认当前路径

  查找指定路径及其内部的所有子目录。

- options
  - 按照文件名 -name  -iname
  - 查找某一类型的文件  -type  
  - 按照文件权限 -perm
  - 按文件大小 -size -empty
  - 按照文件的更改时间  -mtime  -newer

- expression：执行命令，默认`-print`
  - ``-print`  将匹配的文件输出到标准输出。 
  - `-exec`  执行命令
  - `-ok` 和 `-exec`  执行命令，并先提示用户是否执行. 

## 例子

### 指定名字

支持通配符 `"*.txt"`

```bash
$ find /usr -type f -name "Bash"

# 不区分大小写 -iname
$ find /usr -type f -iname "Bash"
/usr/share/menu/bash
/usr/share/lintian/overrides/bash
/usr/bin/bash

# 逻辑或 -o
$ find -name *.log -o -name *yml
./logs/nacos/config.log
./logs/nacos/naming.log
./docker-compose.yml
```

### 类型

- f(普通文件从`-`变成`f`),d(文件夹), l
- b,c
- p,s

### 大小


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

  - `N` 表示正好 N大小的文件，`+N` 查找大于 N 的文件，`-N` 查找小于 N 的文件。

  - 不支持小数，`3.5G`不行，`3500M`才行

  - 单位
  
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


### 时间

- -mtime -n +n  -n表示文件更改时间距现在n天以内，+n表示文件更改时间距现在n天以前。 
- -newer file1 查找更改时间比文件file1新的文件。 


### 执行命令

`rm` 只能支持删除某一层的文件，不能删除其子孙目录的。

```bash
rm -rfv *.md
```

find 递归删除

```bash
find -type f -name "*.md" -exec rm -v {} \;
find -type f -name "*.md" -exec rm -v {} +
find -type f -name "*.md" | xargs rm -rf 
```

`-excec`

- `{}` 大括号充当匹配文件结果的占位符，因此 `rm-v {}` 将删除find命令找到的文件；
- 结束 shell 执行的命令（exec之后的命令）
  - 第一种是`\;`。反斜杠 `\`是转义分号。
  - 第二种是`+`
  
  - 第三种是 管道 + `xargs`

```bash
# 多行→单行：
$ cat test.txt
a b c d e f g
h i j k l m n
o p q
r s t
u v w x y z
$ cat test.txt | xargs
a b c d e f g h i j k l m n o p q r s t u v w x y z

# 假如你有一个文件包含了很多你希望下载的 URL，你能够使用 xargs下载所有链接
cat url-list.txt | xargs wget -c

# 查找所有的 jpg 文件，并且压缩它们：
find . -type f -name "*.jpg" -print | xargs tar -czvf images.tar.gz
```
