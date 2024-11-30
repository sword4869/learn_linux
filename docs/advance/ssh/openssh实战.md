[toc]



## 配置密钥认证

（1）客户端生成密钥

```bash
ssh-keygen
```

（2）确保服务端已生成密钥

```bash
# 确保有 sshd_config中指定的 HostKey 存在
ls /etc/ssh
```

（3）客户端上传密钥到服务器的可信列表中

```bash
client$ scp /home/sword/.ssh/id_rsa.pub coco@192.168.112.130:~
server$ cat /home/coco/id_rsa.pub >> /home/coco/.ssh/authorized_keys
```

确保其权限正确

```bash
server$ chmod 700 .ssh
server$ chmod 600 .ssh/authorized_keys
```



（4）修改服务端的sshd_config

```bash
sudo vim /etc/ssh/sshd_config

PubkeyAuthnentication yes
PasswordAuthentication no
```

（5）重启服务端的sshd

```bash
sudo service ssh reload		# ubuntu 是 ssh，centos是sshd
```

## 登陆问题
### WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!

这里要登陆的 server 变化了，因为你 client 本地存有以前记住的 server 的 hostname，所以发现不匹配后的问题。

解决办法就是删除**client**中的 `~/.ssh/known_hosts` 的对应的服务器ip的记录。

### WARNING: UNPROTECTED PRIVATE KEY FILE!
```bash
$ /usr/sbin/sshd -h /home/sword/.ssh/id_rsa
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions 0644 for '/home/sword/.ssh/known_hosts' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
Unable to load host key "/home/sword/.ssh/known_hosts": bad permissions
Unable to load host key: /home/sword/.ssh/known_hosts
sshd: no hostkeys available -- exiting.
【这个情况是说/home/sword/.ssh/id_rsa的文件权限太开放，容易被骇客入侵，我们修改权限就行】

# 调整私钥的文件权限
$ chmod 0600 /home/sword/.ssh/id_rsa
```

### 使用 SSH 连接报 Bad owner or permissions on C:\\Users\\Administrator/.ssh/config 错误问题解决

> 问题描述

在 Windows 系统下的 VSCode 安装 Remote - SSH 扩展后，使用扩展配置 SSH 并进行远程连接，可能会发生 Bad owner or permissions on C:\Users\Administrator/.ssh/config 错误，造成无法进行 SSH 远程连接的问题。

原因是由于使用 Remote - SSH 扩展所依赖的 Remote - SSH: Editing Configuration Files 扩展编辑了 C:\Users\Administrator.ssh\config 文件后，此文件的权限发生了改变

而把此配置文件删除后，使用 PowerShell 即可正常进行远程连接。但 VSCode 的 SSH 连接又依赖此配置文件，所以就产生了冲突，要么只有 PowerShell 能用，要么就都不能用。

> 解决办法

1. 在 GitHub 上下载 openssh-portable 项目，其 Git 命令如下：

    ```bash
    git clone https://github.com/PowerShell/openssh-portable.git
    ```

2. 下载完成后进入 openssh-portable 项目中的 `contrib\win32\openssh` 目录
    ```bash
    cd openssh-portable/contrib/win32/openssh
    ```

3. 在此目录中以管理员权限打开powershell，执行以下命令：

    ```bash
    ./FixUserFilePermissions.ps1 -Confirm:$false
    ```

    PS: 执行powershell脚本出错：未对文件进行数字签名：以管理员权限打开powershell
    ```bash
    # Y
    set-ExecutionPolicy RemoteSigned
    
    # 为RemoteSigned表示成功
    get-executionpolicy
    ```
    右击powershell脚本文件，选中解除锁定，并应用
    ![](https://img-blog.csdnimg.cn/20210706173551640.png)

### No matching host key type found. Their offer: ssh-rsa

openssh觉得ssh-rsa加密方式不安全，从8.8开始的 openssh 的**客户端**默认禁用了 `ssh-rsa` 算法

解决：让客户端允许接受rsa算法。

- 临时性方案命令行增加参数

```bash
ssh -o HostKeyAlgorithms=+ssh-rsa -o PubkeyAcceptedKeyTypes=+ssh-rsa  user@host
```

- 配置文件持久化: 将需要连接的服务器IP加入到host，可以用 `*` 对所有主机生效

```bash
sudo vim ~/.ssh/config


Host *
    HostKeyAlgorithms +ssh-rsa
    PubkeyAcceptedKeyTypes +ssh-rsa
```
