- [1. 介绍](#1-介绍)
- [2. 连接参数详解](#2-连接参数详解)
- [3. 命令](#3-命令)
  - [3.1. 本地与远程](#31-本地与远程)
  - [3.2. 运行本地shell命令](#32-运行本地shell命令)
  - [3.3. 传输文件](#33-传输文件)
    - [3.3.1. 从远程服务器拉取文件](#331-从远程服务器拉取文件)
    - [3.3.2. 从本地上传文件到服务器](#332-从本地上传文件到服务器)

---
## 1. 介绍

SFTP（Secure File Transfer Protocol，安全文件传输协议）

因为 SFTP 是基于 SSH 协议的，所以默认的身份认证方法与 SSH 协议保持一致。通常我们使用 SSH Key 来进行连接

```bash
sftp user_name@remote_server_address[:path]
```

如果远程服务器自定义了连接的端口，可以使用 `-P` 参数：

```bash
sftp -P remote_port user_name@remote_server_address[:path]
```

连接成功后将进入一个 SFTP 的解释器，可以发现命令行提示符变成了 `sftp>`，使用 `exit` 命令可以退出连接。

如果连接地址存在 `path` 并且 `path` 不是一个目录，那么 SFTP 会直接从服务器端取回这个文件。

## 2. 连接参数详解

-   `-B`: buffer\_size，制定传输 buffer 的大小，更大的 buffer 会消耗更多的内存，默认为 32768 bytes；
-   `-P`: port，制定连接的端口号；
-   `-R`: num\_requests，制定一次连接的请求数，可以略微提升传输速度，但是会增加内存的使用量。
## 3. 命令

在 SFTP 解释器中可以使用 `help` 命令来查看帮助文档。

```bash
sftp> help
Available commands:
bye                                Quit sftp
cd path                            Change remote directory to 'path'
chgrp grp path                     Change group of file 'path' to 'grp'
chmod mode path                    Change permissions of file 'path' to 'mode'
chown own path                     Change owner of file 'path' to 'own'
df [-hi] [path]                    Display statistics for current directory or
                                   filesystem containing 'path'
exit                               Quit sftp
get [-afPpRr] remote [local]       Download file
reget [-fPpRr] remote [local]      Resume download file
reput [-fPpRr] [local] remote      Resume upload file
help                               Display this help text
lcd path                           Change local directory to 'path'
lls [ls-options [path]]            Display local directory listing
lmkdir path                        Create local directory
ln [-s] oldpath newpath            Link remote file (-s for symlink)
lpwd                               Print local working directory
ls [-1afhlnrSt] [path]             Display remote directory listing
lumask umask                       Set local umask to 'umask'
mkdir path                         Create remote directory
progress                           Toggle display of progress meter
put [-afPpRr] local [remote]       Upload file
pwd                                Display remote working directory
quit                               Quit sftp
rename oldpath newpath             Rename remote file
rm path                            Delete remote file
rmdir path                         Remove remote directory
symlink oldpath newpath            Symlink remote file
version                            Show SFTP version
!command                           Execute 'command' in local shell
!                                  Escape to local shell
?                                  Synonym for help
```

### 3.1. 本地与远程

```bash
# 远程
sftp> pwd
Remote working directory: /

# 本地
sftp> lpwd
Local working directory: e:\git
```
`pwd`操作远程服务器的，如果想要操作本地目录呢？只需要在每个命令前添加 `l`即可，例如显示本地操作目录下的文件：

### 3.2. 运行本地shell命令

使用 `!` 
```bash
sftp> !conda env list
```

### 3.3. 传输文件

A->B

#### 3.3.1. 从远程服务器拉取文件

使用 `get` 命令可以从远程服务器拉取文件到本地：

```bash
sftp> get remoteFile [newName]
```

如果不指定 `newName`，将使用和远程服务器相同的文件名。

使用 `-r` 参数可以拉取整个目录：

```bash
sftp> get -r remoteDirectory
```

#### 3.3.2. 从本地上传文件到服务器

使用 `put` 命令可以从本地上传文件到服务器：

同样的，可以使用 `-r` 参数来上传整个目录

```bash
sftp> put localFile
sftp> put -r localDirectory
```