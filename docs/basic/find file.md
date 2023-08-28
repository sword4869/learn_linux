- [1. Find file](#1-find-file)
  - [1.1. find](#11-find)
    - [1.1.1. 查找](#111-查找)
    - [1.1.2. 执行删除](#112-执行删除)
  - [1.2. which](#12-which)
  - [1.3. locate](#13-locate)
  - [1.4. whereis](#14-whereis)

# 1. Find file

## 1.1. find
`find [options] [path...] [expression]`

- default *path* is the current directory; 

    表示从其开始的路径，不仅局限于这一层，directory and **its subdirectories**.

- default *expression* is `-print`

### 1.1.1. 查找

```bash
$ find /usr -type f -name "bash"
/usr/share/menu/bash
/usr/share/lintian/overrides/bash
/usr/bin/bash
```
- `-type TYPE`: `f` for file, `d` for diretory.
- `-name PATTERN`: 
    
    建议用引号包裹起来

    支持通配符。exact name (cannot find `apache2.conf`), we can remedy this limitation by using wildcards (`apache2.*`)

    区分大小写。
```bash
$ find /usr -type f -name "Bash"
$ find /usr -type f -iname "Bash"
/usr/share/menu/bash
/usr/share/lintian/overrides/bash
/usr/bin/bash
```
- `-iname PATTERN`: 

    不区分大小写。

```bash
find . -type f -name "*.md" -o -name "*.txt"
```
- `-o`：逻辑或（OR） 

```bash
find . -empty
```
- `-empty`: 查找空文件，可以配合`-type`区分文件还是目录


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

### 1.1.2. 执行删除

`rm` 只能支持删除某一层的文件，不能删除其子孙目录的。
```bash
rm -rfv *.md
```
find 递归删除
```bash
find . -type f -name "*.md" -exec rm -v {} \;
find . -type f -name "*.md" -exec rm -v {} +
```
- `{}` 大括号充当匹配文件结果的占位符，因此 rm-v {} 将删除find命令找到的文件；
- 结束 shell 执行的命令（exec之后的命令）
  - 第一种是`;`, 并使用反斜杠 `\`，以便正确转义分号。
  - 第二种是`+`


  
## 1.2. which

Cons: 
- find binary file.
- in the `PATH` varibale.

```bash
$ which aircrack-ng
/usr/bin/aircrack-ng
```

## 1.3. locate

Cons: 
- loacte uese a datebase that is usually only updated once a day. So you cannot find files created a minute ago.
```bash
$ locate aircrack-ng
/usr/bin/aircrack-ng
/usr/share/applications/kali-aircrack-ng.desktop
```
## 1.4. whereis

Cons: 
- find binary file.
```bash
$ whereis aircrack-ng
aircrack-ng: /usr/bin/aircrack-ng /usr/share/man/man1/aircrack-ng.1.gz
```
