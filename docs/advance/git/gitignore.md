- [1. gitignore](#1-gitignore)
  - [1.1. 规则](#11-规则)
    - [1.1.1. 排除哪个](#111-排除哪个)
    - [1.1.2. 不忽略](#112-不忽略)
    - [1.1.3. 删除已经被追踪过的文件（远程仓库中对应的文件或文件夹会被删除）](#113-删除已经被追踪过的文件远程仓库中对应的文件或文件夹会被删除)
- [2. 检查](#2-检查)

# 1. gitignore
```
**/.ipynb_checkpoints
/readme.md
```

## 1.1. 规则

### 1.1.1. 排除哪个

```bash
test
**/test
/test
*/test
```
```bash
.
├── a
│   ├── b
│   │   └── test    (/a/b/test)
│   └── test        (/a/test)    
└── test            (/test)
```

不用担心文件夹和文件的同名问题, 因为现代系统只允许一个存在, 否则会直接报错.

- `/test`:
  
  表示根目录下的test, 只忽略`/test`.

- `*/test`:

  一层目录下的test, 只忽略`/a/test`

- `test`和`**/test`一样: 
  
  匹配任何位置的`test`. 忽略`/test`, `a/test`, `a/b/test`

  PS: 如果两级目录及其以上, 那么`a/test`就不是`**/a/test`, 而是`/a/test`. 也就是说, 如果要指定根目录下的test, 必须指定为`/test`, 而不是`test`； 而两级目录及其以上时, 就不用特意写`/`开头.

### 1.1.2. 不忽略


`!`开头的模式标识否定，该文件将会再次被包含

比如`!/bin/run.sh`表示不忽略 bin 目录下的 run.sh 文件

```
/a
!/a/test
```
这样没用，`/a`表示忽略`/a`文件夹及其子文件。`!/a/test`起作用要求`a`文件夹存在

正确的写法是

```
/a/*
!/a/test
```
`/a/*`不忽略`/a`文件夹。
### 1.1.3. 删除已经被追踪过的文件（远程仓库中对应的文件或文件夹会被删除）

`.gitignore`只能忽略那些原来没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的

解决方法就是先把本地缓存删除（改变成未track状态），然后再提交:
```bash
git rm --cached readme1.txt 删除readme1.txt的跟踪，并保留在本地。
# git rm -r --cached dir1  删除dir1目录，并保留在本地。
# git rm --f readme1.txt 删除readme1.txt的跟踪，并且删除本地文件

git add .
git commit -m 'update .gitignore'
```


# 2. 检查

> 查看暂存区文件

```bash
git ls-files
```

> 需要找出来到底哪个规则写错了，可以用git check-ignore命令检查：

```bash
git check-ignore -v App.class
```

如果该文件或者文件夹没有被忽略, 那么没有任何输出. 反之, 则说明被哪条规则命中而忽略了.