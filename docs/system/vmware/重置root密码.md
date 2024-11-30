作步骤大概如下：

第一步：

​	启动虚拟机，然后确保光标此时已经在虚拟机内了，出现启动倒计时界面时，按键盘上的任意键，进入如下界面：

![在这里插入图片描述](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406102040710.png)

​	在白条选中的这个CentOs Linux上，按下键盘的e键，进入编辑模式：

第二步：
	
	在`crashkernel`前面，`ro`(即readonly权限），修改`ro`->`rw`，另外，加入 `init=/sysroot/bin/sh`

![在这里插入图片描述](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406102040070.png)

​	修改完成后，Ctrl+x保存

​	然后会进入安全模式：

​	输入`chroot /sysroot`命令，然后`passwd`命令才可以使用，运行passwd,并按提示修改root密码，输入密码和确认密码后，即可修改成功。

​	![image-20240610204147593](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406102041617.png)

第三步：

​	然后运行命令`touch /.autorelabel`，使得修改的密码生效，否则修改的密码不起作用。

​	接着使用`exit`命令退出

​	然后`reboot`命令重启虚拟机的Linux服务