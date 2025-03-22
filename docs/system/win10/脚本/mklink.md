## 想要像linux一样软链接

```cmd
# cmd 管理员: mklink 参数 软连接 目标
mklink /D D:\git\FlashAvatar-code\dataset\nf_01 E:\Data\nf_01
```

`/d` 给目录创建**符号链接**，简称符号链接、软链接；

`/h` 创建**硬链接**，简称硬链接；

`/j` 给目录创建**联接点**，简称软链接。

当没有上面3个命令符时，创建是**文件软链接**（只能用于文件）！文件类型：`.symlink`



在创建后的图标也和原文件的图标一样，可用在属性中看出其链接对象

mklink /D D:\other\nchu\论文\实验1\code\FlashAvatar-code\dataset\nf_03 D:\other\nchu\论文\实验1\code\dataset\nf_03