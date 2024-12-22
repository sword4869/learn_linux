[toc]

- 对于很大的文件，可以只用很小的空间(lfs 指针)来管理它。

## 1. install

windows下的git已经集成了git lfs.

linux: `sudo apt install git git-lfs`

wsl同linux

然后对该机器的当前用户进行全局初始化，所以新机器、新用户要执行一次，已经执行过的就不用执行了（PS: 取消初始化`git lfs uninstall`）
```bash
# 会去修改 git config --global 的东西
$ git lfs install
```

```bash
$ git lfs version
git-lfs/3.3.0 (GitHub; windows amd64; go 1.19.3; git 77deabdf)
```

## 2. 下载

还是老样子, `git clone`：
- git clone 会先下载下来不是lfs的普通文件，然后再下载lfs。
- 如果lfs下载卡住，ctrl-c后，会发现普通文件是下载好的，那么进入仓库，`git lfs pull`去拉lfs文件（`git pull`是去拉普通文件）

## 3. 添加

### 3.1. 未add
```bash
$ git lfs track "*.tar"
$ git lfs track "a.tar"
$ git lfs track "images/*"

# 老一套
$ git add .
$ git commit -m 'track'
$ git push
```

`git lfs track <file>`会去将符合规则的东西，添加到`.gitattributes`里面。所以，直接编辑`.gitattributes`一个意思。


`git lfs untrack <file>`移除`.gitattributes`里面相应的规则。

### 3.2. 已经add

已经add的东西，用`git lfs track <file>`还是普通文件。

```bash
$ git lfs migrate import --include-ref=main --include="*.tar"

$ git add .
$ git commit -m 'track'
On branch main
Your branch and 'origin/main' have diverged,
and have 14 and 14 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)

# 因为修改了历史，所以强制更新
$ git push --force
```

## 4. huggingface

### 4.1. gitattributes的坑

hugggingface会默认提供给我们一个`.gitattributes`规则。
```bash
# 默认
*.tar.* filter=lfs diff=lfs merge=lfs -text

*.tar filter=lfs diff=lfs merge=lfs -text
```
这两个不是一个规则！，所以`xxx.tar`不会被查找到。