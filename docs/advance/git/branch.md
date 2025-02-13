[toc]

## show branch

`git branch`列出的分支前带 `*`号的表示当前分支。

默认显示本地分支

- -v 显示详细信息
- -a 显示本地和远程
- -r 只显示远程。所以去掉了r

但是并不会显示fetch下来的分支。

```bash
$ git branch
* main

$ git branch -v
* main 35a169c [behind 1] 1

$ git branch -a
* main
  remotes/origin/HEAD -> origin/main
  remotes/origin/gh-pages
  remotes/origin/main
  
$ git branch -r
  origin/HEAD -> origin/main
  origin/gh-pages
  origin/main
```

## remove branch

```bash
# 同当前分支一样，即merge过的，那么就不会error
git branch -d <branch>

# 同当前分支不一样，所以要强制删除
git branch -D <branch>
```

## 切换和添加分支

对于不同分支，**工作区和暂存区是共用的**。

创建分支，是对当前分支的**提交历史**进行镜像，而并不复制工作区和暂存区。

### 切换分支

```bash
# 方式一：
git checkout orange

# 方式二：由于checkout也是对文件的命令，git为了避免歧义而新建了switch命令。
git switch orange
```

你快速切换回前一个分支，无需记住分支名称:

```bash
git switch -
```



### add a branch

```bash
# git branch <branch>
git branch orange
```

### add a branch and switch to it

```bash
git checkout -b <branch name>
git switch -c <branch name>
```

## rename a branch

```bash
git branch -M main
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

## 孤儿分支


checkout会保持当前分支的所有内容到暂存区。

switch则真是全新的分支，没有任何内容。

### checkout

> 1、用于 Github清除历史记录，瘦身大型仓库
>
> 2、清除历史

1. 孤儿分支

```bash
# 先在老分支上修改，修改完了再去孤儿分支
git add . && git commit -m '修改'

git checkout --orphan new
# 孤儿分支中什么也没有
git add .
git commit -m 'init'
```

2. push 孤儿分支

```bash
git push origin new
```

3. 将当前分支重命名为`hold240706`，将新分支`new`重命名`main`.

   ![image-20240706230655462](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407062306513.png)

   ![image-20240706230650108](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407062306160.png)

   此时主分支会保持不变，还是`hold240706`

   ![image-20240706230755111](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407062307161.png)


4. 管理默认分支，将默认分支设置为孤儿分支`main`

   ![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231908689.png)

5. （可选）删除hold分支，不删就留着当做备份

```bash
git push origin :hold240128
```

6. 孤儿分支，但还是很大。因为其他分支中还存在，也就是说`.git`文件夹中还记录着其他分支的东西。

   要么下面删除大文件，要么直接删除远程分支。

![image-20240706233251972](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407062332044.png)

### switch

```bash
git switch --orphan new
git status
# 什么都
```



## 融合分支

### merge

`git merge <other branch>`: **当前分支吸收指定分支的内容**

- merge后，指定分支**并不会消失**。

- merge分为两种情况

  fast-forward：

  ​	当前分支没有变化，而只有其他分支变化时，那么合并的结果就完全可以是其他分支的记录。

  ​	只是移动头指针，**记录数不变**。

  no-fast-forward：

  ​	当前分支和对方分支都变了，那么合并的结果必然是一个不同于二者的新记录。

  ​	当前分支就**多了一条提交记录**。

merge规则：

- 当前分支中有，某分支中没有的：则**删除**当前分支中的。

- 当前分支中没有，某分支中有的：则添加到当前分支。
- 当前分支和某分支中的共同部分：冲突。

```bash
# new 分支新增文件
$ git switch new
Switched to branch 'new'
$ echo 2 > new.txt
$ git add .
$ git commit -m '2'
[new 00d73b9] 2
 1 file changed, 1 insertion(+)
 create mode 100644 new.txt
$ git switch main
Switched to branch 'main'

# main分支合并new分支
$ git merge new
Merge made by the 'ort' strategy.
 new.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 new.txt
# 这里跳出来让你填写提交记录：我们就保持默认的Merge branch 'new'

$ git log --all --oneline --graph
*   8b357c5 (HEAD -> main) Merge branch 'new'			【新的提交记录】
|\
| * 00d73b9 (new) 2
* | 3f0d8eb merge
```

#### merge冲突

```bash
$ git merge new
Auto-merging main.txt
CONFLICT (content): Merge conflict in main.txt
Automatic merge failed; fix conflicts and then commit the result.		【检测到有冲突】
```
这里可以选择：

（1）放弃合并 `git merge --abort`

（2）解决冲突，手动提交，完成合并。

```bash
$ git status
On branch main
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   main.txt

no changes added to commit (use "git add" and/or "git commit -a")

# 查看冲突文件：-是删除，+是新增。<<<< 和 >>> 表示不同的分支的内容，中间的 === 是两分支不同内容的分隔。
$ git diff new
diff --git a/main.txt b/main.txt
index 2081982..94e8c68 100644
--- a/main.txt
+++ b/main.txt
@@ -1 +1,5 @@
+<<<<<<< HEAD
+1_main
+=======
 1_new
+>>>>>>> new

# 手动编辑：冲突的文本内容 git 已经帮我们提出出来了，很方便
$ vi main.txt
<<<<<<< HEAD
1_main
=======
1_new
>>>>>>> new

$ git add .
$ git status
On branch main
All conflicts fixed but you are still merging.
  (use "git commit" to conclude merge)

Changes to be committed:
        modified:   main.txt

# 手动提交
$ git commit -m 'merge'
[main 3f0d8eb] merge
$ git log --all --oneline --graph
*   3f0d8eb (HEAD -> main) merge
|\
| * 46a6990 (new) new
* | 45c76ec main
* | ee42f27 main update
|/
* 6113dc0 2
* 857afae 1
```

### rebase

![image-20241205190240424](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202412051902473.png)

Merge

​	优点:不会破坏原分支的提交历史，方便回溯和查看。

​	缺点:会产生额外的提交节点，分支图比较复杂。

Rebase

​	优点:不会新增额外的提交记录，形成线性历史，比较直观和干净

​	缺点:会改变提交历史，改变了当前分支branch out的节点



建议：

​	对于公共的分支，为了避免大家对于历史记录的困扰，不要用rebase，用merge。

​	自己的本地分支，可以用rebase来简洁。



## 开发分支管理

![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231906094.png)

hotfix: master出现灾难，紧急修复。解决完bug后，提交给master，也提交给develop让开发也纠错。

develop：从master拉取，开发后要经过测试后发布到release后，才合并给master。

feature: 从develop中，突然想开发和主线**松耦合**的某个功能，开发完毕后合并给develop，不想做了也不合并给develop，因为本来就联系不紧密。