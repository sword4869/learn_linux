1. 安装

```bash
# client
sudo apt install openssh-client
# server
sudo apt install openssh-server
```

2. 启动

```bash
sudo service ssh start
```

3. 看ip: 在ubuntu里看，windows的不对

```bash
sudo apt install net-tools

# 得到 192.168.137.2
ifconfig
```

4. ssh

```bash
ssh lab@192.168.137.2
```



