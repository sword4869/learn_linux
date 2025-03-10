[toc]

## 基本

### 在哪个分支下开发

某个功能的开发分支上，最后再合并到开发分支上。

开发分支经过布署测试后，才会合并到release分支上。



## stash

> 本地正在开发，不想提交，又要修改线上bug

暂存本地开发，`git stash`

修改完bug后，切换会本地分支，使用`git stash apply`来恢复。

## cherry-pick