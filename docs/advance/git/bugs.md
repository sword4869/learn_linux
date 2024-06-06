
## Failed to resolve HEAD as a valid ref.
https://juejin.cn/post/6961723320957927461

1.  `.git/logs/refs/heads/当前分支`文件下找到最后一条log信息

    ```
    f5f0450fe7a24db203305ce96057face9e7392c8 c9d57292d05d6ba155b2e5c90603718ea42050da YuShengSenior <Kingsun997@163.com> 1620892929 +0800	commit: 解决bug #412589 #210245 #320145
    ```

    这个`c9d57292d05d6ba155b2e5c90603718ea42050da`hash值就是我们需要的  
2. 把这个值复制到`.git/refs/heads/当前分支`文件下,保存  
3. 操作完之后我们可以刷新下`vscode`的git,可以看到文件都被恢复到蓝屏提交那次了

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