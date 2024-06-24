

# 基本用法

```sh
type [选项] 命令
```

`type`命令用于显示给定命令的类型。

​	内建命令（shell的）、外部命令、别名还是函数。

### 常见选项

- `-a`：+ 命令位置
- `-t`：仅显示类型
- `-p`, `-P`：如果命令是可执行文件，显示路径。
- `-f`：忽略别名。

# 示例

## 基本

```sh
# 别名
$ type ls
ls is aliased to `ls --color=tty'

$ alias ll='ls -l'
$ type ll
ll 是别名，指向 `ls -l`

# 内建命令
$ type cd
cd is a shell builtin

# 外部命令
$ type date
date is /bin/date

$ type mysql
mysql is /usr/bin/mysql
```

## `-a`：+ 命令位置

```sh
$ type -a ls
ls is aliased to `ls --color=auto'
ls is /bin/ls
```

## `-t`：仅显示类型

```sh
$ type -t ls
alias
$ type -t cd
builtin
$ type -t date
file
```

## `-p -P`：显示命令的路径

```sh
$ type -p ls
$ type -P ls
/bin/ls
```

为什么-p没效果？

## `-f` ：忽略别名

```sh
$ type -f ls
ls 是 /bin/ls
```

好像没效果？