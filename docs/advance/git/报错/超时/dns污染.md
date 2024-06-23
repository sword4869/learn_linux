## ssh config


替换 github.com 的 HostName 来找到


1. 上默认

   一般用 `ssh.github.com` 就可以找到

   ```bash
   $ sudo vim /home/sword/.ssh/config
   Host github.com
       # >>>>>>>>>>>>>>>>>>>
       HostName ssh.github.com
       PreferredAuthentications publickey
       IdentityFile /home/sword/.ssh/id_rsa
   ```

2. 精准域名

   ```bash
   $ sudo vim /home/sword/.ssh/config
   Host github.com
       # >>>>>>>>>>>>>>>>>>>
       HostName 140.82.113.4
       PreferredAuthentications publickey
       IdentityFile /home/sword/.ssh/id_rsa
   ```

   ```bash
   # 域名污染, 找不到 github.com
   $ ssh -vT git@github.com
   OpenSSH_8.9p1 Ubuntu-3ubuntu0.3, OpenSSL 3.0.2 15 Mar 2022
   debug1: Reading configuration data /home/sword/.ssh/config
   debug1: Reading configuration data /etc/ssh/ssh_config
   debug1: /etc/ssh/ssh_config line 19: include /etc/ssh/ssh_config.d/*.conf matched no files
   debug1: /etc/ssh/ssh_config line 21: Applying options for *
   ssh: Could not resolve hostname github.com: Temporary failure in name resolution
   
   $ ping ssh.github.com
   Ping 请求找不到主机 ssh.github.com。请检查该名称，然后重试。
   ```

   如果出现了意外情况，那么只能手动[查找域名](https://myssl.com/dns_check.html)

   ![图 1](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231907927.png)  

   ```bash
   $ ping 140.82.113.4
   
   正在 Ping 140.82.113.4 具有 32 字节的数据:
   来自 140.82.113.4 的回复: 字节=32 时间=278ms TTL=43
   来自 140.82.113.4 的回复: 字节=32 时间=296ms TTL=43
   来自 140.82.113.4 的回复: 字节=32 时间=309ms TTL=43
   来自 140.82.113.4 的回复: 字节=32 时间=286ms TTL=43
   ```

