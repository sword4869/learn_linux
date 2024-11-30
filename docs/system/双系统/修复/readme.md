## grub和高级选项

启动系统后，按 Esc 会跳出

![image-20241010193828918](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202410101938967.png)

如果再多按 Esc，会进入 grub 命令行。无须担心，exit退出后，就重新回到流程，重新按下Esc即可。

```bash
grub> exit			# 退出
```

## Recovery模式

选择“Advanced options for Ubuntu”，选择以 recovery mode 启动的内核

![image-20241010194125626](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202410101941665.png)

dpkg是修复坏包，clean是清理垃圾，resume是修好后的继续启动。

![image-20241010194110912](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202410101941960.png)

其他选项：[在Ubuntu上使用恢复模式及Recovery Mode各选项的使用方法_ubuntu recovery mode-CSDN博客](https://blog.csdn.net/qq_36786467/article/details/108156413)