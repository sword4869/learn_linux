## fatal: bad object refs/remotes/origin/xxx

git拉取时报错

```bash
$ git pull     
error: github.com:sword4869/learn_java.git did not send all necessary objects

fatal: bad object refs/remotes/origin/main
```

解决方法，到项目的`.git/refs/remotes/origin/` 目录下

删除所有内容

重新拉取，成功