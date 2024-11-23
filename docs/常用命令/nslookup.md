用来查询 **DNS 服务器**解析结果的工具，能够返回 **IP 地址和域名的对应关系**



（1）查询域名对应的 IP 地址

```bash
$ nslookup www.example.com
服务器:  public1.114dns.com
Address:  114.114.114.114

非权威应答:
名称:    www.example.com
Addresses:  2606:2800:21f:cb07:6820:80da:af6b:8b2c
          93.184.215.14
          

# 查询特定 DNS 服务器的解析
$ nslookup www.example.com 8.8.8.8
服务器:  dns.google
Address:  8.8.8.8

非权威应答:
名称:    www.example.com
Addresses:  2606:2800:21f:cb07:6820:80da:af6b:8b2c
          93.184.215.14
```

（2）反向查询 IP 对应的域名

```bash
$ nslookup 114.114.114.114
服务器:  public1.114dns.com
Address:  114.114.114.114

名称:    public1.114dns.com
Address:  114.114.114.114
```



