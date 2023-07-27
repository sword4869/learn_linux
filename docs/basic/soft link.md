- [1. 总结](#1-总结)
- [2. inode](#2-inode)
- [3. 实验](#3-实验)


---

## 1. 总结

```bash
# ln 源文件 链接

# 硬链接：默认
ln ~/data data

# 软链接：-s 
ln -s ~/data data
```


| 对比参数 | 硬连接 | 软连接 |
| :------: | :----: | :----: |
| inode number | 拥有相同的 inode number | 拥有不同的 inode number |
| 目录 | 不允许连接目录 | 允许连接目录 |
| 跨文件系统 | 不能跨文件系统使用 | 可以跨文件系统使用 |
| 源文件删除之后 | 源文件删除，硬连接文件仍然可以访问源文件数据 | 源文件删除，软连接将无法访问源文件数据 |
| 速度 | 更快 | 更慢 |

## 2. inode

文件的 inode 是一个描述文件或目录属性的数据库，如元信息、硬盘物理地址等。通过 inode，操作系统可以检索文件权限信息、物理地址等信息。当一个文件从一个文件夹移到另一个文件夹，文件将被移动到硬盘的另一个位置，文件的 inode 值也会自动发生变化。

- 硬连接它直接引用源文件的 inode。
- 软连接则直接引用源文件，源文件再引用 inode，更像是源文件的一个快捷方式。

删除操作：
- 输出结果最左边一列是文件的 inode 值，它指向物理硬盘的一个区块。文件系统会维护一个引用计数，只要有文件指向这个区块，inode 就不会从硬盘上消失。
-   1).删除软链接,对源文件、硬链接无影响；

    2).删除硬链接，对源文件、软链接也无影响；

    3).删除源文件，对硬链接没有影响，导致软链接失效；

    4).同时删除源文件、硬链接，计数被归零，整个文件才会真正的被删除。

## 3. 实验
```bash
# 创建源文件
(base) lab@eleven:~/temp$ echo "hello, source" > source.txt
(base) lab@eleven:~/temp$ cat source.txt 
hello, source

# 创建硬链接
(base) lab@eleven:~/temp$ ln source.txt link1
# 创建软链接
(base) lab@eleven:~/temp$ ln -s source.txt link2

# -i 展示 inode number
# 可以看到 硬链接 和 源文件 具有一样的 inode number， 软链接则不同
(base) lab@eleven:~/temp$ ls -l -i
total 8
23961 -rw-r--r-- 2 lab lab 14 Jul 27 10:26 link1
23962 lrwxrwxrwx 1 lab lab 10 Jul 27 10:27 link2 -> source.txt
23961 -rw-r--r-- 2 lab lab 14 Jul 27 10:26 source.txt

# 软链接、硬链接都具有和源文件一样的内容
(base) lab@eleven:~/temp$ cat link1
hello, source
(base) lab@eleven:~/temp$ cat link2
hello, source

# 修改软链接、硬链接或源文件，三者都共同变化
(base) lab@eleven:~/temp$ echo "source++" >> source.txt
(base) lab@eleven:~/temp$ cat link1
hello, source
source++
(base) lab@eleven:~/temp$ cat link2
hello, source
source++
(base) lab@eleven:~/temp$ echo "link1++" >> link1
(base) lab@eleven:~/temp$ cat link1
hello, source
source++
link1++
(base) lab@eleven:~/temp$ cat link2
hello, source
source++
link1++
(base) lab@eleven:~/temp$ cat source.txt 
hello, source
source++
link1++
(base) lab@eleven:~/temp$ echo "link2++" >> link2
(base) lab@eleven:~/temp$ cat link2
hello, source
source++
link1++
link2++
(base) lab@eleven:~/temp$ cat source.txt 
hello, source
source++
link1++
link2++
(base) lab@eleven:~/temp$ cat link1
hello, source
source++
link1++
link2++

# 删除源文件，硬链接不变，软链接失效
(base) lab@eleven:~/temp$ rm source.txt 
(base) lab@eleven:~/temp$ ls
link1  link2
(base) lab@eleven:~/temp$ cat link1
hello, source
source++
link1++
link2++
(base) lab@eleven:~/temp$ cat link2
cat: link2: No such file or directory

# 再创建源文件（inode不同），硬链接内容不同，软链接恢复（内容与新创建的一致）
# PS: 即使创建相同的内容，inode也是不同的。也就是说，本质是因为inode不同。
(base) lab@eleven:~/temp$ echo "source++" >> source.txt
(base) lab@eleven:~/temp$ ls -l -i
total 8
23961 -rw-r--r-- 1 lab lab 39 Jul 27 10:28 link1
23962 lrwxrwxrwx 1 lab lab 10 Jul 27 10:27 link2 -> source.txt
23963 -rw-r--r-- 1 lab lab  9 Jul 27 10:30 source.txt
(base) lab@eleven:~/temp$ cat link2
source++
(base) lab@eleven:~/temp$ cat link1
hello, source
source++
link1++
link2++
```