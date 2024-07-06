# remote

## show names of remote repository

```bash
$ git remote
origin

$ git remote -v
origin  https://gitee.com/sandalphon/weather_predict.git (fetch)
origin  https://gitee.com/sandalphon/weather_predict.git (push)

# 没有远程仓库
$ git remote
fatal: not a git repository (or any of the parent directories): .git
```
## add and remove

### add a remote repository

```bash
# git remote add <remote repository name> <remote repository url>
$ git remote add origin https://gitee.com/sandalphon/weather_predict.git
```

### remove a remote repository

```bash
$ git remote remove origin
```

## push

### 推送

1. 【分支同名】

```bash
# git push <remote repository name> <local branch name>
$ git push origin master
```

将 `本地的分支`推送到 `远程仓库`的 `同本地分支名`。

两种情况：远程仓库有，则更新。没有，则创建一个新的同名分支。

2. 【分支异名】

```bash
# git push <remote repository name> <local branch name>:<remote branch name>
$ git push origin master:main
```
### 删除
3. 【删除远程仓库的某远程分支】

```bash
# git push <remote repository name> :<remote branch name>
$ git push origin :main
```

相当于推送空本地分支，自然效果就是删除。

```bash
# 例如
git push origin :master
# 等同于
git push origin --delete master
```
###  默认
- 【默认 the current branch】

```bash
# git push <remote repository name>
$ git push origin
```

默认当前分支。

- 【默认化 remote repository】

```bash
# git push -u <remote repository name> [<local branch name>]
$ git push -u origin [master]
```

将 `本地的分支`推送到 `远程仓库`，同时指定 `远程仓库`为 `默认的远程仓库`，后面就可以不加任何参数使用 `git push`了。

```bash
# 将当前分支推送到默认远程仓库
$ git push
```

只有当默认指定 `远程仓库`后，才能使用！

### 强制更新（合并冲突的问题）

- 使用此命令告诉 git 允许不相关历史合并

  这样就能把远程文件拉取回来。执行此命令后会有一个提示，要求说明为何要讲两个不相关的分支合并，输入信息后保存即可。

```bash
$ git pull origin master –allow-unrelated-histories
$ git push origin master
```

- 强制将本地文件推送至远程

  **这样会将远程仓库的master分支的历史文件都清掉**。从而不会产生因为合并冲突的问题.
  PS：建议使用此命令前备份一个远程分支：先本地创建一个分支，拉去远程分支，再push一个新的分支，最后再push到那原来的分支。

  ```bash
  $ git push origin master -f
  ```

- push到一个新的远程分支。

```bash
$ git push origin master:master2
```



### 撤销远程提交
本地回退+强制推送

1. 查找需要回退至的版本号 `2eee0e26d2d5fd00ec462df47752223952f6bf4e`
    ```
    $ git log
    commit 13c1a52e0624f172cfa8612ad27e90a030735f2f (HEAD -> main, origin/main, origin/HEAD)
    Author: sword4869 <xxx@qq.com>
    Date:   Tue Nov 7 18:41:35 2023 +0800
    
        add GPU number and lazy load img to GPU       ### 这次提交，想要被撤回
    
    commit 2eee0e26d2d5fd00ec462df47752223952f6bf4e
    Author: Bernhard Kerbl <kerbl@icg.tugraz.at>
    Date:   Wed Nov 1 13:10:29 2023 +0100
    
        Bumped sibr viewers                           ### 那么就回退到这里
    
    commit f11001b46c5c73a0a7d553353c898efd68412abe
    Author: bkerbl <bkerbl@ad.inria.fr>
    Date:   Mon Oct 23 16:02:30 2023 +0200
    
        Random background flag added
    ```
2. 回退

     - soft指的是：保留当前工作区，以便重新提交，比如我们这次是修改后重新提交
     - hard，会撤销相应工作区的修改，一定要谨慎使用。一般用于指定某个版本的内容，不考虑自己的修改。
    ```bash
    $ git reset --soft 2eee0e26d2d5fd00ec462df47752223952f6bf4e
    # git reset --hard 2eee0e26d2d5fd00ec462df47752223952f6bf4e
    
    # 验证
    $ git log
    commit 2eee0e26d2d5fd00ec462df47752223952f6bf4e (HEAD -> main)
    Author: Bernhard Kerbl <kerbl@icg.tugraz.at>
    Date:   Wed Nov 1 13:10:29 2023 +0100
    
        Bumped sibr viewers
    
    commit f11001b46c5c73a0a7d553353c898efd68412abe
    Author: bkerbl <bkerbl@ad.inria.fr>
    Date:   Mon Oct 23 16:02:30 2023 +0200
    
        Random background flag added
    ```
3. 强制推送
    ```bash
    $ git push origin main -f
    Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
    To github.com:sword4869/gaussian-splatting.git
    + 13c1a52...2eee0e2 main -> main (forced update)
    ```

## pull = fetch + merge

基本用法：``git pull <remote repository> <remote branch>:<local branch>``。

```bash
# 将远程主机origin的master分支拉取过来，与本地的brantest分支合并。
$ git pull origin master:brantest

# 分支都是master可省略
$ git pull origin master
```



## fetch + merge

fetch：将远程拉取到本地，创建一个本地分支 `<remote repository>/<remote branch>`。但并不会在 `git branch`中显示。

merge：让当前分支融合 `<remote repository>/<remote branch>`

```bash
# git fetch <remote repository> <remote branch>
$ git fetch origin master
From github.com:sword4869/learn_python
 * branch            main       -> FETCH_HEAD
 
# 切换到想要被更新的本地分支
$ git checkout main

# 默认就是融合 origin/master。git merge origin/master
$ git merge
```
相比起来git fetch更安全一些，因为在merge前，我们可以查看更新情况，然后再决定是否合并。

```bash
$ git fetch origin master
$ git checkout main

# 查看区别，再决定合并
$ git diff

$ git merge
```





### 远程分支

- 当本地没有其他分支的代码仓库时

  ```bash
  # 默认分支
  git clone origin
  # 指定分支
  git clone -b 分支名 origin
  ```
  执行上述命令后就将远程分支拉取到了本地。

- 当本地有其他分支的代码仓库时, 查看所有的远程分支

  ```bash
  $ git branch -r
    origin/docs
    origin/modern
    origin/residual
  ```
  
  + 不需要本地分支和远程分支建立映射关系

    ```bash
    git fetch origin 远程分支名xxx:本地分支名xxx
    ```

    使用这种方式会在本地仓库新建分支xxx，但是并不会自动切换到新建的分支xxx，需要手动checkout。然后远程分支xxx的代码也拉取到了本地分支xxx中。采用这种方法建立的本地分支不会和远程分支建立映射关系。

  + 需要本地分支和远程分支建立映射关系

    ```bash
    git checkout -b 本地分支名xxx origin/远程分支名xxx
    ```

    使用这种方式会在本地仓库新建分支xxx，并自动切换到新建的分支xxx。然后远程分支xxx的代码也拉取到了本地分支xxx中。采用这种方法建立的本地分支会和远程分支建立映射关系。

## fork仓库拉取原仓库更新
### merge法
```bash
git remote add upstream git@github.com:facebookresearch/pytorch3d.git
git pull upstream main:main
```

### reset法
![Alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231908690.png)
```bash
git remote add upstream git@github.com:facebookresearch/pytorch3d.git
# 回退到 main 一致的结点
git reset --soft 3b4f8a49
git pull upstream main:main
# 强制更新
git add .
git commit -m 'fetch upstream'
git push -f 
```