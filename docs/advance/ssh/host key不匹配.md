修改~/.ssh/config文件加入以下代码

```bash
$ vim ~/.ssh/config
Host *
HostkeyAlgorithms +ssh-rsa
PubkeyAcceptedKeyTypes +ssh-rsa
 
$ sudo service ssh restart
```

