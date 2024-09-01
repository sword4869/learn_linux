- [1. file permission](#1-file-permission)
  - [1.1. change owner](#11-change-owner)
  - [1.2. change group](#12-change-group)
  - [1.3. change permission](#13-change-permission)
---

# 1. file permission
When a file is created, the user who created it is the owner of the file, and the owning group is the user's current group.

## 1.1. change owner 
```bash
$ chown USER FILE
```
## 1.2. change group
You might have a group of pentesters and a group of security team members woking on the same project.

```bash
$ chgrp GROUP FILE
```

## 1.3. change permission

UGO(user, group, other)
rwx(4, 2, 1)
```bash
$ chmod 766 FILE
$ chmod u+x,o-x FILE

# `-R`: 递归子目录
$ chmod -R 777 DIR
```



see which user you're logged in
```bash
$ whoami
user1
```