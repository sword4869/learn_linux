ubuntu提供了ufw这个设定工具，以简化iptables的某些设定，其后台仍然是 iptables。ufw 即uncomplicated firewall的简称，一些复杂的设定还是要去iptables。

`sudo apt-get install ufw`

`ufw enable|disable|status|version|`

```bash
$ ufw version
ufw 0.36.1
Copyright 2008-2021 Canonical Ltd.

# 列出是否开启服务、已开放的端口
$ sudo ufw status		
Status: inactive

# (1) 开启了防火墙，并在系统启动时自动开启
$ sudo ufw enable
Firewall is active and enabled on system startup

# (2) 关闭所有外部对本机的访问，但本机访问外部正常。
$ sudo ufw default deny
Default incoming policy changed to 'deny'
(be sure to update your rules accordingly)

# (3) 开放某些服务
ufw allow 53
```



`sudo ufw allow | deny [service]`

```bash
sudo ufw allow 53 						允许外部访问53端口(tcp/udp)
sudo ufw allow 22/tcp 	 				允许所有的外部IP访问本机的22/tcp (ssh)端口
sudo ufw allow 8000:8100/tcp		    允许tcp和udp上的端口从8000到8100
sudo ufw allow smtp						允许所有的外部IP访问本机的25/tcp (smtp)端口
sudo ufw allow from 192.168.1.100 		允许此IP访问所有的本机端口
sudo ufw allow proto tcp from 10.0.1.0/10 to 127.0.0.1 port 25 				允许自10.0.1.0/10的tcp封包访问本机的25端口。
sudo ufw allow proto udp from 192.168.0.1 port 53 to 192.168.0.2 port 53	允许自192.168.0.1的53端口的udp封包访问192.168.0.2的53端口。
	
sudo ufw deny smtp 禁止外部访问smtp服务

sudo ufw delete allow smtp 删除上面建立的某条规则
```

```bash
# 添加了一些规则后
$ sudo ufw status		
Status: active

To                         Action      From
--                         ------      ----
127.0.0.1 25/tcp           ALLOW       10.0.0.0/10
192.168.0.2 53/udp         ALLOW       192.168.0.1 53/udp
22/tcp                     ALLOW       Anywhere
22/tcp (v6)                ALLOW       Anywhere (v6)
```

