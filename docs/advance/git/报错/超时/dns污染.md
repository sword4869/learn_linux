> 问题锁定：

使用密钥认证来登录github时

```bash
# 找不到 github.com
$ ssh -vT git@github.com
OpenSSH_8.9p1 Ubuntu-3ubuntu0.3, OpenSSL 3.0.2 15 Mar 2022
debug1: Reading configuration data /home/sword/.ssh/config
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 19: include /etc/ssh/ssh_config.d/*.conf matched no files
debug1: /etc/ssh/ssh_config line 21: Applying options for *
ssh: Could not resolve hostname github.com: Temporary failure in name resolution			#### <<<
```

> 解决：替换 github.com 的 HostName 来找到

```bash
$ sudo vim /home/sword/.ssh/config
Host github.com
    # >>>>>>>>>>>>>>>>>>>
    HostName ssh.github.com
   	# HostName 140.82.113.4
   	# >>>>>>>>>>>>>>>>>>>
    PreferredAuthentications publickey
    IdentityFile /home/sword/.ssh/id_rsa
```

（1）一般用 `ssh.github.com` 就可以找到

```bash
$ ping ssh.github.com
Ping 请求找不到主机 ssh.github.com。请检查该名称，然后重试。
```

（2）如果出现了意外情况，那么只能手动[查找域名](https://myssl.com/dns_check.html)

![image-20241116152104412](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202411161521476.png)

```bash
$ ping 20.205.243.166

正在 Ping 20.205.243.166 具有 32 字节的数据:
来自 20.205.243.166 的回复: 字节=32 时间=140ms TTL=111
来自 20.205.243.166 的回复: 字节=32 时间=130ms TTL=111
来自 20.205.243.166 的回复: 字节=32 时间=132ms TTL=111
```