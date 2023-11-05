#! /bin/sh
# Date: 20210427
# Author: Create by volume
# Description: alpine apk add
# Version: 1

apk add openrc	# alpine的/etc/init.d/sshd需要这个执行器

apk add vim

apk add wget

apk add curl

apk add tree

# apk add screen 【能下，但不能用，因为没有/dev/null/utmp（null文件夹），而pip要用到/dev/null这个文件，冲突了】

apk add git

apk add gcc

apk add g++

# 'apk add python3' is not enough
apk add python3-dev

# pip
wget https://bootstrap.pypa.io/get-pip.py
python3 get-pip.py -i https://mirrors.aliyun.com/pypi/simple/
# pip need: libxml2 & libxslt, normal version & development version
apk add libxml2-dev
apk add libxml2
apk add libxslt-dev
apk add libxslt
apk add gfortran    # 编译python模块要用

# repository of pip
pip config set global.index-url http://mirrors.aliyun.com/pypi/simple/
pip config set install.trusted-host mirrors.aliyun.com

exit 0