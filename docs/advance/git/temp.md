
## 写了几个change，发现这应该搞一个新分支，不想提交在当前分支下

那么可以直接创建新分支，`git checkout -b depth`。切换过去会发现，当前的change也会保留。

而且提交完切回 `main`，发现改变没了，也省得自己删除了。

## 本地正在开发，不想提交，又要修改线上bug

暂存本地开发，`git stash`

修改完bug后，切换会本地分支，使用`git stash apply`来恢复。