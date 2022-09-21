- [1. change owner](#1-change-owner)
- [2. change group](#2-change-group)
- [3. change permission](#3-change-permission)
---
When a file is created, the user who created it is the owner of the file, and the owning group is the user's current group.

# 1. change owner 
```bash
$ chown USER FILE
```
# 2. change group
You might have a group of pentesters and a group of security team members woking on the same project.

```bash
$ chgrp GROUP FILE
```

# 3. change permission

UGO(user, group, other)
rwx(4, 2, 1)
```bash
$ chmod 766 FILE
$ chmod u+x,o-x FILE
```

see which user you're logged in
```bash
$ whoami
user1
```