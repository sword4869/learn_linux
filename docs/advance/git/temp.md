
## 本地正在开发，想提交在新分支下

那么可以直接创建新分支，`git checkout -b depth`。切换过去会发现，当前的change也会保留。

而且提交完切回 `main`，发现改变没了，也省得自己删除了。

## 本地正在开发，不想提交，又要修改线上bug

暂存本地开发，`git stash`

修改完bug后，切换会本地分支，使用`git stash apply`来恢复。

```bash
# 暂存，多个暂存的顺序类似栈，新暂存头插到暂存栈
git stash 					# 默认message + 只追踪
git stash -m "depth"		# 添加message
git stash -u			    # + 未跟踪
git stash -a -m "最全记录"   # 全部变化的文件（跟踪的 + 未跟踪的 + 被 .gitignore忽视的文件），执行的完后的效果就像新clone下来一样。

# 显示已有
git stash list

# 显示某个stash的修改内容
git stash show
git stash show -u


# 恢复
git stash apply		# 恢复第一个，且不删除记录
git stash pop		# 恢复第一个，且删除它
git stash apply|pop	--index 2	# 根据序号。
git stash apply|pop	'stash@{0}'	# 根据完整名字。`stash@{序号}`


# 删除
git stash drop          	# 默认删除第一个
git stash drop 'stash@{0}'	# 根据完整名字
git stash clear				# 删除所有

# 超级删除：还原一个如同新clone下来一样干净的项目
git stash -a;  git stash drop
```

```bash
git stash branch <branchname> [<stash>]
git stash save [-p | --patch] [-S | --staged] [-k | --[no-]keep-index] [-q | --quiet] [-u | --include-untracked] [-a | --all] [<message>]
git stash [push 
				[-p | --patch] [-S | --staged] [-k | --[no-]keep-index] [-q | --quiet] [-u | --include-untracked] [-a | --all] [<message>]      # 这些都是和save一样
                [--pathspec-from-file=<file> [--pathspec-file-nul]] [--] [<pathspec>...]
          ]


git stash list [<log-options>]
git stash show [-u | --include-untracked | --only-untracked] [<diff-options>] [<stash>]

git stash pop [--index] [-q | --quiet] [<stash>]
git stash apply [--index] [-q | --quiet] [<stash>]


git stash clear
git stash drop [-q | --quiet] [<stash>]

git stash create [<message>]
git stash store [(-m | --message) <message>] [-q | --quiet] <commit>
```
git stash show
```
(3d) PS D:\git\face-parsing.PyTorch> git stash show 'stash@{0}'     
 makeup/116_3.png | Bin 531600 -> 0 bytes
 test.py          |   4 +---
 2 files changed, 1 insertion(+), 3 deletions(-)

(3d) PS D:\git\face-parsing.PyTorch> git stash show -u  'stash@{0}'     
 .vscode/launch.json |  15 +++++++++++++++              # 未跟踪
 data/00000.jpg      | Bin 0 -> 29351 bytes             # 未跟踪
 data/116_ori.png    | Bin 0 -> 471886 bytes            # 未跟踪
 makeup/116_3.png    | Bin 531600 -> 0 bytes
 test.py             |   4 +---
 5 files changed, 16 insertions(+), 3 deletions(-)
```
git stash | git stash push | git stash save
```
(3d) PS D:\git\face-parsing.PyTorch> git stash
Saved working directory and index state WIP on master: d2e684c add imgs
(3d) PS D:\git\face-parsing.PyTorch> git stash list
stash@{0}: WIP on master: d2e684c add imgs          # WIP标识默认 message (当前提交id + 提交的message)

# + 未跟踪：默认是只记录已追踪的文件（已修改、已删除）；想要记录已追踪 + 未跟踪的文件（新文件） [-u | --include-untracked]
(3d) PS D:\git\face-parsing.PyTorch> git stash  -u -m '+未追踪'       
Saved working directory and index state On master: +未追踪
(3d) PS D:\git\face-parsing.PyTorch> git stash list
stash@{0}: On master: +未追踪

# 全部变化的文件（跟踪的 + 未跟踪的 + 被 .gitignore忽视的文件），执行的完后的效果就像新clone下来一样。
(3d) PS D:\git\face-parsing.PyTorch> git stash  -a
Saved working directory and index state On master: sdfs
(3d) PS D:\git\face-parsing.PyTorch> git stash show -u
 .vscode/launch.json                |  15 +++++++++++++++               # 未跟踪的
 __pycache__/logger.cpython-310.pyc | Bin 0 -> 759 bytes                # 被 .gitignore忽视的文件
 __pycache__/model.cpython-310.pyc  | Bin 0 -> 8173 bytes               # 被 .gitignore忽视的文件
 __pycache__/resnet.cpython-310.pyc | Bin 0 -> 3584 bytes               # 被 .gitignore忽视的文件
 data/00000.jpg                     | Bin 0 -> 29351 bytes
 data/116_ori.png                   | Bin 0 -> 471886 bytes
 makeup/116_3.png                   | Bin 531600 -> 0 bytes
 res/cp/79999_iter.pth              | Bin 0 -> 53289463 bytes
 res/requirements.txt               | Bin 0 -> 12316 bytes
 res/t.txt                          | Bin 0 -> 12316 bytes
 res/test_res/00000.jpg             | Bin 0 -> 78713 bytes
 res/test_res/00000.png             | Bin 0 -> 5787 bytes
 res/test_res/116_ori.png           | Bin 0 -> 361489 bytes
 test.py                            |   4 +---
 14 files changed, 16 insertions(+), 3 deletions(-)
```

git stash branch 

先stash（搞新分支需要当前分支上干净），git stash branch 会创建并切换新分支、pop某个stash
```bash
(3d) PS D:\git\face-parsing.PyTorch> git stash -u
Saved working directory and index state WIP on test: d2e684c add imgs

# git stash branch ttt 'stash@{0}'
(3d) PS D:\git\face-parsing.PyTorch> git stash branch ttt
Switched to a new branch 'ttt'
On branch ttt
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    makeup/116_3.png
        modified:   test.py

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        111

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (b1dc3996af6dc49a30a50aec81a86cfda63193a0)
```