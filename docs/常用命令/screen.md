- [1. screen](#1-screen)
  - [1.1. 安装](#11-安装)
  - [1.2. 机制](#12-机制)
  - [1.3. 操作](#13-操作)
  - [1.4. screen外和screen内的命令关系](#14-screen外和screen内的命令关系)
    - [1.4.1. screen内的命令](#141-screen内的命令)
      - [1.4.1.1. 创建](#1411-创建)
      - [1.4.1.2. 显示](#1412-显示)
      - [1.4.1.3. 切换](#1413-切换)
      - [1.4.1.4. 帮助](#1414-帮助)
      - [1.4.1.5. 退出](#1415-退出)

---
# 1. screen

screen 创建窗口

ctrl + a +d 切出当前窗口

ctrl + a + k 杀死当前窗口

screen -ls

screen -r windowId

## 1.1. 安装
```bash
sudo apt install screen
```

## 1.2. 机制
- 在终端中输入`screen`创建多个screen命令窗口。
- 在screen命令窗口中可以创建多个会话窗口。


## 1.3. 操作

## 1.4. screen外和screen内的命令关系
- 在screen外（就是普通的终端中）：只可以使用以`screen`开头的命令
- 进入screen之后才能使用相关命令：以`screen`开头的命令 和 `^a`（Ctrl + a）系列 都可以使用

PS：在screen外大`screen`进入screen窗口内



### 1.4.1. screen内的命令
`^`表示同时按住`Ctrl`
![在这里插入图片描述](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231915949.png)

#### 1.4.1.1. 创建
- `screen`进入enter后自动创建一个会话窗口`0`
- `^a → c`：创建一个会话窗口，数字增加1

#### 1.4.1.2. 显示
- 当前screen窗口列表：`screen -ls`
  
  ![在这里插入图片描述](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231915383.png)
  
  这个`9982`就是yourScreenId
- 当前会话窗口列表：`^a → *`
#### 1.4.1.3. 切换
- 后台运行screen窗口：`^a → d`或`screen -d yourScreenId`
- 回到screen窗口：`screen -r yourScreenId`


【当出现Attached时，不让你回到screen窗口，怎么办？】
让它断开链接就能回去了：`screen -d yourScreenId`，然后`screen -r yourScreenId`
#### 1.4.1.4. 帮助
`^a → ?`
#### 1.4.1.5. 退出
- 退出当前：
`exit`
或`^a → k`或`^a → K`
或`screen -ls`, `kill yourScreenId`
- 退出全部：`^a → \`
