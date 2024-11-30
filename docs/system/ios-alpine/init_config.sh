#! /bin/sh
# Date: 20210426
# Author: Create by volume
# Description: alpine start up
# Version: 1

# if you want more mirrors, go to https://mirrors.alpinelinux.org/
echo "http://mirrors.ustc.edu.cn/alpine/latest-stable/main" > /etc/apk/repositories
echo "http://mirrors.ustc.edu.cn/alpine/latest-stable/community" >> /etc/apk/repositories
echo "http://mirrors.nju.edu.cn/alpine/latest-stable/main" >> /etc/apk/repositories
echo "http://mirrors.nju.edu.cn/alpine/latest-stable/community" >> /etc/apk/repositories
echo "file:///ish/apk/main" >> /etc/apk/repositories
echo "file:///ish/apk/community" >> /etc/apk/repositories

# if you don't update & upgrade, then there will be a error, "Error relocating /usr/bin/ssh: __localtime64_r: symbol not found".	
apk update
apk upgrade

exit 0