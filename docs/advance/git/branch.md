# branch

## add a branch

```bash
# git branch <branch>
$ git branch orange
```

创建分支的效果相当于虚拟机的快照。
PS：注意是对当前的 **commit到本地仓库中的** 的文件进行镜像。

## show branch

`git branch`列出的分支前带 `*`号的表示当前分支。

- 默认显示本地分支
- -v 显示详细信息
- -a 显示本地和远程
- -r 只显示远程。所以去掉了r

但是并不会显示fetch下来的分支。

```bash
PS D:\code_my\learn_python> git branch
* main
PS D:\code_my\learn_python> git branch -v
* main 35a169c [behind 1] 1
PS D:\code_my\learn_python> git branch -a
* main
  remotes/origin/HEAD -> origin/main
  remotes/origin/gh-pages
  remotes/origin/main
PS D:\code_my\learn_python> git branch -r
  origin/HEAD -> origin/main
  origin/gh-pages
  origin/main
```



## remove branch

```bash
# 同当前分支一样，即merge过的，那么就不会error
$ git branch -d <branch>

# 同当前分支不一样，所以要强制删除
$ git branch -D <branch>
```

## switch branch

```bash
$ git checkout orange
Switched to branch 'orange'
M       branch.md
M       config.md
D       renmote.md
```

当你切换到某分支时，工作目录下的文件就是那个分支 **commit到本地仓库中的** 的文件。

PS: 切换分支要求你工作区和暂存区没有东西。

```bash
# add a branch and switch to it. `-b` means branch.
$ git checkout -b <branch>
```

## rename a branch

```bash
$ git branch -M main
```

```
-M: 
Shortcut for --move --force.

-m/--move:
Move/rename a branch, together with its config and reflog.

-f/--force
Reset <branchname> to <startpoint>, even if <branchname> exists already. Without -f, git branch refuses to change an existing branch. In combination with -d (or --delete), allow deleting the branch irrespective of its merged status, or whether it even points to a valid commit. In combination with -m (or --move), allow renaming the branch even if the new branch name already exists, the same applies for -c (or --copy).
```

i.e. 想要重命名已存在的分支，重命名是 `-m`，而修改已存在需要 `--force`，`-M = -m -f`。

## merge

```bash
$ git merge <other branch>
```

**当前分支吞噬指定分支**：当前分支融合别的分支被后，别的分支消失，只剩下当前分支。

Rules: 将目标分支上的修改应用到当前分支上

- 当前分支中有，某分支中没有的：则**删除**当前分支中的。

- 当前分支中没有，某分支中有的：则添加到当前分支。
- 当前分支和某分支中的共同文件：如无不同，则无事。如有不同，则冲突。

使用 `git diff`查看冲突之处。会用 `-`、`+`和红绿颜色标识。

![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231931649.png)

场景：

​	大家提交不同的分支dev1、dev2，然后main分支将其融合。