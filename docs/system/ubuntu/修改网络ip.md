```bash
sudo apt install -y net-tools
```

```bash
$ ls /etc/netplan
01-network-manager-all.yaml

$ sudo vim /etc/netplan/01-network-manager-all.yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    enp0s3:  # 替换为您的网络接口名称
      dhcp4: no               # 关闭 DHCP
      addresses:
        - 192.168.3.50/24		  # ip和mask
      routes:
        - to: default
          via: 192.168.3.1		# gateway
      nameservers:
        addresses: [192.168.3.1, 8.8.8.8]	# dns

$ sudo netplan apply
$ sudo systemctl restart NetworkManager
```

