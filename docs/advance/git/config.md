[toc]

## list

```bash
$ git config --global --list
core.editor="D:\MySoftware\Microsoft VS Code\bin\code" --wait
user.name=USERNAME
user.email=EMAILs
safe.directory=*
safe.directory=D:/code
```

对应的是 `C:\Users\用户名\.gitconfig` 文件中的内容

## name & email


```bash
git config --global user.name 'xxxxx'
git config --global user.email 'xxxxx@xx.com'
```

## 密码

Git提供了一个名为git-credentials的工具，可以帮助我们更好地管理密码

```bash
# 设置为哪种模式
$ git config --global credential.helper store

# 显示当前是什么模式
$ git config --global credential.helper
store

# 删除
git config --global --unset credential.helper
```

- 无：

  默认所有都不缓存。 每一次连接都会询问你的用户名和密码。

- “cache” 

  模式会将凭证存放在内存，并且在15分钟后从内存中清除。

- “store” 

  将凭证用明文的形式存放在磁盘中 `~/.git-credentials` 文件中，并且永不过期。 

- **"osxkeychain"**

  如果你使用的是 Mac，它会将凭证缓存到你系统用户的钥匙串中。 这种方式将凭证存放在磁盘中，并且永不过期，但是是被加密的，这种加密方式与存放 HTTPS 凭证以及 Safari 的自动填写是相同的。

- **"manager"**

  如果你使用的是 Windows，你可以安装一个叫做 “Git Credential Manager for Windows” 的辅助工具。

  这和上面说的 “osxkeychain” 十分类似，但是是使用 Windows Credential Store 来控制敏感信息。 可以在 https://github.com/Microsoft/Git-Credential-Manager-for-Windows 下载。

