```bash
sudo apt install -y net-tools
```

```
sudo vim /etc/netplan/01-network-manager-all.yaml
```



```
network:
  version: 2
  renderer: networkd
  ethernets:
    enp0s3:  # 替换为您的网络接口名称
      dhcp4: no
      addresses:
        - 192.168.3.50/24		# ip和mask
      routes:
        - to: default
          via: 192.168.3.1		# gateway
      nameservers:
        addresses: [223.6.6.6, 8.8.8.8]	# dns
```

```bash
sudo netplan apply
sudo systemctl restart NetworkManager
```

