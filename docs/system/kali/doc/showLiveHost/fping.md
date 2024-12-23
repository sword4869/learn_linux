

---

先做到这个：[虚拟机 ping 不通主机，但是主机可以 ping 通虚拟机](https://blog.csdn.net/sandalphon4869/article/details/119768272)

```bash
$ apt install fping
```

```bash
$ fping -a -g -q 192.168.0.1/24
192.168.0.1
192.168.0.105
192.168.0.102
192.168.0.100
192.168.0.251
192.168.0.250
```

`-a`：显示成功的结果
`-g`：fping 一群 ip，`192.168.0.1/24`
`-q`：不显示失败的结果，`ICMP Host Unreachable from 192.168.0.105 for ICMP Echo sent to 192.168.0.253`。

但是结果还是只能显示 wifi 正在跑流量的主机，那种连上 wifi 待机的就抓不到。
