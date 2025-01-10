```bash
    a - b - c - d   Master
         \
           e - f - g Feature
           

# 切换到 master 分支，master分支捡起 Feature分支的f
$ git checkout master
$ git cherry-pick f



    a - b - c - d - f   Master		【master分支的末尾增加了一个提交f，是完全独立于 Feature 的】
         \
           e - f - g Feature
```



语法：

```bash
# 提交记录是全局唯一的，即使在不同分支上。
git cherry-pick <commitHash>

# 一次转移多个
git cherry-pick <HashA> <HashB>

# [A...B]，提交 A 必须早于提交 B
$ git cherry-pick A..B 

# (A...B]
$ git cherry-pick A^..B 
```

处理：

1、成功，最好

2、代码冲突：

（1）手动解决冲突，然后

```bash
git cherry-pick --continue
```

（2）冲突解决不了，那么放弃整个操作，回到cherry-pick前的样子

```bash
git cherry-pick --abort
```

（3）发生代码冲突后，退出 Cherry pick，但是不回到操作前的样子。

````bash
git cherry-pick --quit
````

常用

**`-n`，`--no-commit`**

只更新工作区和暂存区，不产生新的提交。

这样用来提取为一次提交记录。