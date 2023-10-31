- [1. submodule](#1-submodule)
	- [1.1. 显示](#11-显示)
	- [1.2. 添加子模块](#12-添加子模块)
	- [1.3. 怎么下载有子模块的项目](#13-怎么下载有子模块的项目)
	- [1.4. 删除](#14-删除)
	- [1.5. 修改问题](#15-修改问题)
# 1. submodule

## 1.1. 显示

```bash
$ git submodule
啥也没有, 说明没有 submodule
```

```bash
# facenet_pytorch是表示所在文件夹位置
$ git submodule
 4b5af565a967b84d0b7611e3f2589ac1a20d3c99 facenet_pytorch (heads/master)
```
## 1.2. 添加子模块

```bash
# PS：这个submodule的子目录指定时不能以 “/”结尾， 比如上面的命令，就不能写成 `Directory/` 这个样子。

git submodule add projectB.git Directory

# git submodule add https://gitlab.inria.fr/sibr/sibr_core.git SIBR_viewers
```
然后就会往那个目录里下载文件(直接下, 而不是像git clone 一样套一层仓库的名字, 所以`SIBR_viewers`起了子文件夹的名字).

```
├── train.py
├── LICENSE.md
├── README.md
├── SIBR_viewers
│   ├── CMakeLists.txt
│   ├── LICENSE.md
│   ├── README.md
│   ├── cmake
│   ├── docs
│   └── src
```

并且会生成`.gitmodules`文件，其内容如下：
```bash
[submodule "SIBR_viewers"]
	path = SIBR_viewers
	url = https://gitlab.inria.fr/sibr/sibr_core.git
```


> PS2: 注意到 `facenet-pytorch.git ` 和 `facenet_pytorch` 的 `-_`，是因为python import 的包名不能有`-`

```bash
[submodule "facenet_pytorch"]
	path = facenet_pytorch
	url = https://github.com/timesler/facenet-pytorch.git
```

## 1.3. 怎么下载有子模块的项目
> 分阶段

```bash
git clone projectA.git
cd projectA
git submodule init
git submodule update
```

> clone时一步到位
```bash
git clone --recursive projectA.git
```
下的时候子模块可能会失败，多下几次。

## 1.4. 删除

删除子模块（四个步骤）
1. 删除子模块文件夹
```
rm -rf facenet_pytorch
```
2. 删除`.gitmodules`文件中相关子模块信息
```
[submodule "facenet_pytorch"]
	path = facenet_pytorch
	url = https://github.com/timesler/facenet-pytorch.git
```

3. 删除`.git/config`中的相关子模块信息
```
[submodule "facenet_pytorch"]
	url = https://github.com/timesler/facenet-pytorch.git
	active = true
```

4. 删除`.git/modules`文件夹下的相关子模块
```
rm -rf .git/modules/facenet_pytorch
```

5. 缓存
```
git rm --cached facenet_pytorch
```
## 1.5. 修改问题

> 问题：

修改了模块，但是不想在git里提交。

> 无效方法：

使用 .gitignore 来忽略submodule的修改，但是无法做到。

> 做法：

我们要做的就是在`.gitmodules`中添加一个`ignore`子项，这个ignore子项可以有上个可选的值：

- `untracked` ：忽略在子模块新添加的，即未受版本控制内容
- `dirty` ： 忽略对受版本控制的内容进行了修改
- `all` ： 同时忽略untracked和dirty

```bash
[submodule "utils"]
	path = utils
	url = https://github.com/timesler/facenet-pytorch.git
	ignore = all
```