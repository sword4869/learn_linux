[toc]

## 前言

与`telnet`、 `rlogin`、`FTP`明文传输不同，SSH可以对所有传输的数据进行加密，能够防止 DNS 欺骗和 IP 欺骗。


让ssh不安全的妙招:
- 使用密码登陆，可能会被冒充主机骗到，也可能被暴力破解，建议密钥
- 使用22端口，可能会被扫网，建议换成别的。
- 公私钥被窃取后，服务器就判断不出来了。
- Server的配置`PermitRootLogin`，禁止直接以root登陆的话`no`，那么就可以避免扫网，因为这样必须得知道你的普通用户名是什么(可能是coco，也可能是cola，而不是每台机子都有的root)。




## Usage
### scp传文件

```bash
usage: scp [-346BCpqrv] [-c cipher] [-F ssh_config] [-i identity_file]
           [-l limit] [-o ssh_option] [-P port] [-S program] 
           source ... target

-l 网速限制
-P 端口
-r 递归文件
```

```bash
# 【source → target】考察的是这两个的顺序
$ scp usersomeone@192.168.135.83:~/wikiart.tar.gz ~/wikiart.tar.gz		# 远→本：下载
$ scp ~/wikiart.tar.gz usersomeone@192.168.135.83:~/wikiart.tar.gz 		# 本→远：上传

# [-r] 递归文件夹 [-P port] 
$ scp -r -P 2206 eone@192.168.135.83:~/Downloads .
```
## 两种认证机制

一种是用户密码的方式，另一种是密钥验证的方式

### 密码认证
过程：
1. client向server发起登录请求，client 收到返回的 **server公钥**
2. client输入密码，密码经client获得的server公钥加密后发送到server
3. server接收到加密密码后使用 **server私钥** 解密，如果密码正确则登录成功

配置需求：

（1）**server**要生成自己的私钥和公钥，client不需要配置

（2）client就可以登录了

```bash
# 以用户coco，登陆server
ssh coco@192.168.112.130

The authenticity of host 'host (12.18.429.21)' can't be established.
RSA key fingerprint is 98:2e:d7:e0:de:9f:ac:67:28:c2:42:2d:37:16:58:4d.
Are you sure you want to continue connecting (yes/no)?
```

这是第一步server发来的公钥的公钥指纹（公钥的摘要），**让用户自行核对**。因为有一种攻击方式，骇客冒充服务器端，所以你需要手动核对这个公钥指纹是不是真的。

### 密钥认证
过程：
1. client发起密钥连接请求，并上传 **client公钥**。
2. server收到 client公钥后，在可信列表文件`~/.ssh/authorized_keys`中查询此公钥，若无此client则断开连接，否则发送一串用用此**client公钥**加密处理的随机问询码。
3. client收到加密问询码后，使用**client私钥**解密出问询码再用通信session对问询码加密并传送给server
4. server解密问询码并对比是否一致，一致则建立连接

看起来，server并不需要配置自己的公私密钥？答案是还要，虽然服务器生成公私密钥对是默认和推荐的做法，但理论上你可以选择不生成这些密钥。然而，这样做会有以下后果：

- **缺乏主机认证**：客户端无法验证服务器的身份，增加了中间人攻击的风险。
- **用户体验**：每次连接时，客户端都会提示无法验证服务器的身份，导致用户体验不佳。

配置：
1. client配置自己的私钥和公钥生成密钥对: 

    `id_rsa`是私钥，`id_rsa.pub`是公钥（其实都是文本文件）
    
    ```bash
    $ ssh-keygen
    Generating public/private rsa key pair.
    Enter file in which to save the key (/home/sword/.ssh/id_rsa): 
    【这里告诉你默认生成的位置，直接一路Enter】
    Enter passphrase (empty for no passphrase): 
    Enter same passphrase again: 
    Your identification has been saved in /home/sword/.ssh/id_rsa
    Your public key has been saved in /home/sword/.ssh/id_rsa.pub
    The key fingerprint is:
    SHA256:b1pwv7wBG1IOrznkNsAc1ZAfYwXwoCK50wlU9/b7/PQ sword@sword
    The key's randomart image is:
    +---[RSA 3072]----+
    |  ... . ==.o.    |
    | . . . +.o=      |
    |  + . o +ooo     |
    |   = = o *.      |
    |  o o + S B      |
    |   .   + B *     |
    |        B * o .  |
    |       . * + + . |
    |        .   *o. E|
    +----[SHA256]-----+
    ```
    默认采取rsa，换成别的`[-t dsa | ecdsa | ed25519 | rsa]`, 比如dsa，就是`ssh-keygen -t dsa`.


2. client将client公钥上传到server的可信列表文件 authorized_keys 中。

    ```bash
    # 方法1: ssh-copy-id 自动添加到~/.ssh/authorized_keys中。
    # 配合 -i 指定位置，避免~歧义
    $ ssh-copy-id -i /home/sword/.ssh/id_rsa.pub coco@192.168.112.130
    
    # 方法2：手动
    client$ scp /home/sword/.ssh/id_rsa.pub coco@192.168.112.130:~
    server$ cat /home/coco/id_rsa.pub >> /home/coco/.ssh/authorized_keys
    ```
    
    PS: 
    
    server 查client公钥也是`~/.ssh/authorized_keys`是根据server要登陆的`~`，
    
    比如`ssh coco@192.168.1.100`是`/home/coco/.ssh/authorized_keys`，`ssh root@192.168.1.100`是`/root/.ssh/authorized_keys`。

## linux

### 安装


Linux：默认有client, 但没有server

```bash
# client
sudo apt install openssh-client
# server
sudo apt install openssh-server
yum install openssh-server -y
```

Configuration：
- client时
  - `~/.ssh/config`：ssh 配置文件。
  - `~/.ssh/known_hosts`：已知 server 列表。
  - `~/.ssh/id_rsa`：`ssh-keygen`生成的私钥。
  - `~/.ssh/id_rsa.pub`：`ssh-keygen`生成的公钥。
- server:
  - `/etc/ssh/sshd_config`：sshd 配置文件。
  - `~/.ssh/authorized_keys`： 可信client列表。

### ssh client

```bash
usage: ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-B bind_interface]
           [-b bind_address] [-c cipher_spec] [-D [bind_address:]port]
           [-E log_file] [-e escape_char] [-F configfile] [-I pkcs11]
           [-i identity_file] [-J [user@]host[:port]] [-L address]
           [-l login_name] [-m mac_spec] [-O ctl_cmd] [-o option] [-p port]
           [-Q query_option] [-R address] [-S ctl_path] [-W host:port]
           [-w local_tun[:remote_tun]] destination [command]
```
```bash
# 以端口2222登陆
ssh -p 2222 coco@192.168.112.130
```

`coco@192.168.112.130`就是`destination`（user@hostname）. 只有`192.168.112.130`的话，就是以client的当前用户名登陆。

`command`：一次性执行后退出远程登陆返回本机，而不是持久挂载shell。如`ssh coco@192.168.112.130 ls`。

### client的配置: config / ssh_config

这个用于将经常登录的帐号记录下来, 像快捷方式一样便捷使用.

```bash
vim ~/.ssh/config
# 或者直接修改根配置文件 vim /etc/ssh/ssh_config
# 优先级是`~/.ssh/config`高，然后是`/etc/ssh/ssh_config`。
```


```bash
# 这是配置的匹配名字 alias
Host co
  # 用户名
  User coco
  # 实际的host地址
  HostName 192.168.112.130
  # 登陆端口，默认22就不用写
  Port 7222
  # 私钥，选了这个就不能密码登陆
  IdentityFile ~/.ssh/id_rsa
  # 默认允许三种方式
  PreferredAuthentications keyboard-interactive,password,publickey
```

```bash
$ ssh co
```
这里找co是在 `~/.ssh/config` 中找，

​	当你（是client系统登陆的，而不是config中的User）是在普通用户时，在`/home/user/.ssh/config`找；

​	当你是root时在`/root/.ssh/config`找。或者你可以指定位置， `ssh -F File destination`。



注意：即时修改生效，不用重启ssh。

### server的配置: sshd_config

> sshd 配置文件

```bash
# 这个是sshd读取的默认配置文件
sudo vim /etc/ssh/sshd_config
```

> 配置

（1）端口

```bash
#Port 22
```
**建议换成7222之类的**

（2）服务器的密钥

```bash
HostKey /etc/ssh/ssh_host_rsa_key
#HostKey /etc/ssh/ssh_host_dsa_key
HostKey /etc/ssh/ssh_host_ecdsa_key
HostKey /etc/ssh/ssh_host_ed25519_key
```
这个不一定有，用ls /etc/ssh看一下有没有。

**如果没有，那么就要服务器生成** ssh-keygen。如果有，那么就保持不变。

（3）直接root登陆

```bash
#PermitRootLogin yes
```
- `yes`（都行）

- `prohibit-password`（不能用密码登陆root账户，只能用公私钥登陆root），
- `forced-commands-only`(只能`ssh destination command`的形式登陆root)，
- `no`（禁止直接以root登陆，可以先登陆用户再sudo提升权限）

**如果可以，建议no，这样就不知道登录用户名就无法破解，而root这个都有的用户名可以硬猜。**

（4）认证方式

```bash
#PubkeyAuthentication yes

PasswordAuthentication yes
```

三种登陆选择：
- 先密钥再密码（默认）：
  ```bash
  PasswordAuthentication yes
  PubkeyAuthnentication yes
  ```

​	`HostKey`还要设定好。
​	这样会先让你密钥登陆，不行的话再密码登陆。

- 只用密码：
  ```bash
  PubkeyAuthnentication no
  PasswordAuthentication yes
  ```
  （`HostKey`就不用管了）。PS：`$ passwd`是你没设Linux当前用户的密码下才搞的，这密码不是ssh特定的。
- **只用密钥**：
  
  ```bash
  PubkeyAuthnentication yes
  PasswordAuthentication no
  ```
  `HostKey`还要设定好。


（5）可信客户端公钥列表

```bash
AuthorizedKeysFile      .ssh/authorized_keys
```


> 配置完成后，要重新加载配置文件才生效：

```bash
sudo service ssh reload		# ubuntu 是 ssh，centos是sshd

sudo /etc/init.d/ssh reload
```


### Server Start

#### service 启动

启动
```bash
sudo service ssh start
```

查看是否启动
```bash
sudo service ssh status

# 方法2
ps -e | grep ssh
```

关闭
```bash
sudo service ssh stop

# 方法2
$ ps -e | grep ssh                         
    910 ?        00:00:00 ssh-agent
   1873 ?        00:00:00 sshd
$ kill 1873   
```


#### 脚本启动

`/etc/init.d/ssh`

![1664798068676714.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231915823.png)

这个其实就是个脚本，将上面`sshd`的功能包装了一下，把一些命令按照用途分成了几个功能，省得你多写字。一般我们都是通过这个来启动sshdserver，而不是敲复杂的`sshd xxx`命令。
```bash
Usage: /etc/init.d/ssh {start|stop|reload|force-reload|restart|try-restart|status}.
```

注意：这个脚本开启后是以`root`权限执行`/usr/sbin/sshd`的，所以注意`~`的问题，建议直接写成绝对路径。

PS：`/etc/init.d/`大多数是`ssh`，有的极个别的(IOS的ish)是`sshd`


```bash
# 启动
sudo /etc/init.d/ssh start

# 状态
sudo /etc/init.d/ssh status
```

#### 原生启动

```bash
usage: sshd [-46DdeiqTt] [-C connection_spec] [-c host_cert_file]
            [-E log_file] [-f config_file] [-g login_grace_time]
            [-h host_key_file] [-o option] [-p port] [-u len]

$ sshd
sshd re-exec requires execution with an absolute path
【需要加上路径`/xxx/sshd xxx`。可以通过`which sshd`来寻找路径。】

$ which sshd          
/usr/sbin/sshd

$ /usr/sbin/sshd
sshd: no hostkeys available -- exiting.
【这是要我们的密钥对的私钥】
【默认文件是/etc/ssh/ssh_host_ecdsa_key, /etc/ssh/ssh_host_ed25519_key and /etc/ssh/ssh_host_rsa_key.】
【三者分别表示三种类型，选择其一即可。但是这些其实未被初始化，都是空的！！！】
【我们之前ssh-keygen，不是生成了/home/sword/.ssh/id_rsa，拿这搞】

$ /usr/sbin/sshd -h /home/sword/.ssh/id_rsa
【已经开启server了】
【或者直接修改默认配置文件/etc/ssh/sshd_config，`HostKey /home/sword/.ssh/id_rsa`】
```
```bash
# sshd启动的，只能杀死进程
$ ps -e | grep ssh
    987 ?        00:00:00 ssh-agent
   1505 ?        00:00:00 sshd
$ kill 987 1505
```

- 直接启动sshd程序后，`sudo service status`看不到启动，只能用`ps -e | grep ssh`确认是否启动。
- 直接启动sshd程序后，`sudo service stop`关不掉，只能`kill`
- 直接启动sshd程序后，如果没有kill，那么`sudo service ssh start`就会因为矛盾而启动失败。


## windows

### client
OpenSSH 已添加至Windows 10：`C:\Windows\System32\OpenSSH`。
![picture 1](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231915824.png)  


创建`C:\Users\xxx\.ssh\config`文件.

`cat > config`创建空后缀的空文件, 直接`notepad config`的后缀是`.txt`.

> 其他

`ssh-keygen`生成的密钥、本机充当client的登陆文件`config`、`known_hosts`都在windows在`C:\Users\xxx\.ssh`下
![1664798068926048.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231915825.png)

### server
> 安装

默认没装, 去windows设置的【应用】【可选功能】【添加功能】【OpenSSH 服务器】
![picture 2](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231915826.png)  

会多出服务器的程序
![16647980687963946.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231915827.png)

`cat > sshd_config_default`创建空后缀的空文件, `sshd_config_default`是本机充当server的配置文件。

> 启动服务器
```bash
# 需要以管理员身份打开cmd
net start sshd
net stop sshd

# 也可以原生sshd程序启动。
```
> 自启动

windows shell:startup xxx.bat
```bash
%1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit

net stop sshd
net start sshd
```




## 其他ssh实例
【win10client ssh 自己的虚拟机linux服务器】

虚拟机网络使用桥接模式，虚拟机充当服务器`sudo /etc/init.d/ssh start`，查看虚拟机的ip`ifconfig`看到`192.168.1.107`，win10直接cmd下`ssh coco@192.168.1.107`。

同理，手机下个JuiceSSH也能连。

【ipad ssh自己】
越狱，安装openssh，这时其他设备已经可以`ssh root@192.168.1.100`（ipad的ip）。

但因为IOS系统不能直接连接自己的22端口，所以另建端口。
`vim /etc/services`

```bash
ssh              22/udp     # SSH Remote Login Protocol
ssh              22/tcp     # SSH Remote Login Protocol
ssh2             7222/udp
ssh2             7222/tcp
```
`vim /Library/LaunchDaemons/com.openssh.sshd.plist`

```xml
<key>Sockets</key>
<dict>
	<key>SSHListener</key>
		<dict>
			<key>SockServiceName</key>
			<string>ssh</string>
		</dict>
	<key>SSHListener2</key>
		<dict>
			<key>SockServiceName</key>
			<string>ssh2</string>
		</dict>
</dict>          
```
`reboot`后，就可以`ssh -p 7222 root@localhost`(ipad连自己)。

## 端口转发

<https://zhuanlan.zhihu.com/p/148825449>

![图 1](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231915829.png)  

本地是 *Host_A* ，远程是 *Host_B* ， *Host_B* 能连其内网 *Host_C* 的端口，现在想让 *Host_A* 可以访问内网C的端口。

都是借端口，只不过本地端口转发是请求借，远程端口转发是主动借。

A借到后，就可以通过自己的端口 **X** 来访问 *Host_C* 的端口 **Y**。

- 本地（因为是本地A发起ssh到远程B）端口转发 `-L`：A借用B的端口. 
    ```bash
    A$ ssh -L X:Host_C:Y User_B@Host_B
    ```
- 远程（因为是远程B发起ssh到本地A）端口转发 `-R`：将B的端口借给A.
    ```bash
    B$ ssh -R X:Host_C:Y User_A@Host_A
    ```

应用
```bash
############## 本地或远程方式都行
# ssh 虚拟机
A$ ssh -p X User_C@localhost
# sftp 虚拟机
A$ sftp -P X User_C@localhost
# tensorboard
A$ localhost:6006
# VNC
A$ localhost:20


############## 只能本地端口转发（堡垒机不能向外连接），用户登陆堡垒机
A$ ssh -L 6006:localhost:6006 User_B@Host_B
A$ localhost:6006
############## 只能远程端口转发（公网连不到内网），内网 B 挂载到公网 A 上
B$ ssh -R 6006:localhost:6006 User_A@Host_A
Any Machine$ Host_A:6006    # 比如, 10.10.10.10:6006
```

现在关闭方式是关闭终端。

通常配合参数 `-N` 不登陆只forward转发。`ssh -L X:Host_C:Y User_B@Host_B -N`， 然后就可以ctrl-C停止，不用关闭终端。

```
channel 3: open failed: administratively prohibited: Connection denied
channel 4: open failed: connect failed: channelOpen too offen type=direct-tcpip
channel 3: open failed: connect failed: channelOpen too offen type=direct-tcpip
channel 3: open failed: administratively prohibited: Connection denied
```

sshd 的配置 `AllowTcpForwarding yes`