- [安装](#安装)
- [机制](#机制)
- [操作](#操作)
  - [screen外和screen内的命令关系](#screen外和screen内的命令关系)
  - [screen内的命令](#screen内的命令)
    - [创建](#创建)
    - [显示](#显示)
    - [切换](#切换)
    - [帮助](#帮助)
    - [退出](#退出)

---

# 安装
```bash
sudo apt install screen
```

# 机制
- 在终端中输入`screen`创建多个screen命令窗口。
- 在screen命令窗口中可以创建多个会话窗口。


# 操作

## screen外和screen内的命令关系
- 在screen外（就是普通的终端中）：只可以使用以`screen`开头的命令
- 进入screen之后才能使用相关命令：以`screen`开头的命令 和 `^a`（Ctrl + a）系列 都可以使用

PS：在screen外大`screen`进入screen窗口内



## screen内的命令
`^`表示同时按住`Ctrl`
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200326190911583.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NhbmRhbHBob240ODY5,size_16,color_FFFFFF,t_70)
### 创建
- screen进入后自动创建一个会话窗口`0`
- `^a → c`：创建一个会话窗口，数字增加1

### 显示
- 当前screen窗口列表：`screen -ls`
- 当前会话窗口列表：`^a → "`
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200703222759427.png)
这个`9982`就是yourScreenId
### 切换
- 后台运行screen窗口：`^a → d`或`screen -d yourScreenId`
- 回到screen窗口：`screen -r yourScreenId`


【当出现Attached时，不让你回到screen窗口，怎么办？】
让它断开链接就能回去了：`screen -d yourScreenId`，然后`screen -r yourScreenId`
### 帮助
`^a → ?`
### 退出
- 退出当前：
`exit`
或`^a → k`或`^a → K`
或`screen -ls`, `kill yourScreenId`
- 退出全部：`^a → \`
