## 安装

### windows

OptionalFeatures

选择tel客户端

### centos

```bash
yum -y install telnet
```

## 使用

判断端口是否开放

```bash
telnet 192.168.150.3 80


# 通的，开放的
$  telnet 192.168.150.3 1180
Trying 192.168.150.3...
Connected to 192.168.150.3.										
Escape character is '^]'.


brk
HTTP/1.1 400 Bad Request
Server: nginx/1.26.2
Date: Fri, 29 Nov 2024 17:24:24 GMT
Content-Type: text/html
Content-Length: 157
Connection: close

<html>
<head><title>400 Bad Request</title></head>
<body>
<center><h1>400 Bad Request</h1></center>
<hr><center>nginx/1.26.2</center>
</body>
</html>
Connection closed by foreign host.

# 不通的，不开放的
$  telnet 192.168.150.3 180
Trying 192.168.150.3...
telnet: connect to address 192.168.150.3: Connection refused		<<<< 
```

