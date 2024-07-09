# basic



## 区

工作区：未add

暂存区stage：已add

本地仓库：已提交commit


![1664849831679287.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231908734.png)

## 本地提交

### git init

怎么让这个普通的文件夹，变成git的仓库呢？
用这个命令生成一个 `.git`配置来允许git来管理它，所有 Git 需要的数据和资源都存放在这个目录中。

```bash
$ git init
```
你会发现在文件夹下面多里一个名为`.git`的文件夹。

![16648498319128447.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231908735.png)

### 查看文件情况

```bash
$ git status

# 已追踪的文件
Changes to be committed			# 已add，未commit
Changes not staged for commit:	# 还没add
# 未追踪的新文件 (还没add)
Untracked files:		
```



### 工作区-暂存区

```bash
# 添加：全部改动 `git add -A`或 `git add .`
$ git add click3.py

# 删除
$ git restore --staged click3.py
```

### 暂存区-本地仓库

将缓存区里的文件都commit到本地仓库 `.git`中。

PS：为什么要提交？这个文件夹里不是有吗？
本地仓库又名版本库，提交是让Git来管理的意思，在 `.git`的里面的信息变动。提交后的文件被Git管理起来，对文件的修改、删除，Git都能跟踪，可以比较不同、可以还原。

```bash
$ git commit -m "备注信息"
```

![1664849832160575.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231908736.png)

可以使用 `git log`来查看提交记录。

![16648498324312801.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231908737.png)

```bash
# 补充上一次提交，而不是新开一个提交。
$ git commit -am 'xxx'
```

### 删除文件

如果只是简单地从工作目录中手工删除 `rm xxx`文件，运行 `git status` 时就会在 `Changes not staged for commit`的提示。**因为你没有告诉git你的变动**，git本地仓库中还保留着该文件。

1. 【删除git本地仓库中，并删除工作区中】

```bash
git rm xxx
```

2. 【删除git本地仓库中没有，只是提交到暂存区的，并删除工作区的】

```bash
git rm -f xxx
```

PS：如果git本地仓库中有，也提交到暂存区的。那么删除后，暂存区中的和本地仓库中的都没得。

3. 【把文件从暂存区域移除，但仍然希望保留在当前工作目录中：就是取消放入暂存区】

```bash
git rm --cached xxx
```

对应的，用 `git add xxx`再添加到暂存区

4. 【暂存区和本地仓库中都没有的：一般是新建在工作区的，才可以直接删除】

```bash
rm xxx
```

## 远程仓库

### github & git
#### git config

`github`，你会有两个关键的信息要填写，一个是你的账号名字，一个是你的邮箱。

```bash
$ git config --global  user.name  '注册的用户名';
$ git config --global  user.email  '注册时候的邮箱';
```

```bash
# 检查是否配置成功
$ git config --global --list
user.name=Scott Chacon
user.email=schacon@gmail.com


$ git config --global user.name
Scott Chacon
```

#### ssh

```bash
# -C 是表示comment，可有可无
ssh-keygen -t rsa -C 'your email'
```

接着按3个回车就行

![16648498327265737.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231908738.png)

在文件夹`~/.ssh`下，可以看到公钥 `id_rsa`（私有秘钥）和 `id_rsa.pub`（公有密钥）。

![16648498330310729.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231908739.png)

打开 `id_rsa.pub`（公有密钥），复制里面的内容。

![16648498334588249.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231908740.png)

标题随便起，只是用于区分而已，如同图片中的 `Foast`。
将复制的公钥内容粘贴在公钥中，确定就ok。

### 将本地写好的东西提交到空的远程仓库

> 先在网站创建

git只是个提交工具，将本地仓库的代码提交到远程仓库中。**所以你得先在网站上创建一个远程仓库**，这让git知道提交到哪里。

![16648498338327637.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231908741.png)

这个链接就是提交到的远程仓库。


> summary

```bash
git init	# 在本地写好的东西的文件夹中
git add *
git commit -m ''
git branch -M main
git remote add origin git@github.com:USERNAME/REPOSITORY.git
git push -u origin main
```

之后每次就可以直接 `git push`

### 将本地写好的东西提交到有东西的远程仓库

> git clone


通过HTTPS协议克隆

```bash
git clone https://gitee.com/xxx.git
```

通过SSH协议克隆

```bash
git clone git@gitee.com:xxx.git
```

例：不用特地创建一个文件夹了，clone下来默认直接以远程仓库名为名创建一个文件夹。

![166484983399699.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231908742.png)

![1664849834114752.png](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231908743.png)




> summary


```bash
git clone	# 先在一个随便的文件夹下
...			# 进入下好的文件夹下，将本地写好的东西复制到这里
git add *
git commit -m ''
git push	# 已经将远程仓库默认了
```
