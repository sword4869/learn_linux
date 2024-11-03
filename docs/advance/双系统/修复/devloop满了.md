[/dev/loop0 空间满了处理方法_dev下loop都满了-CSDN博客](https://blog.csdn.net/xiang0526/article/details/133862511?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-1-133862511-blog-136989044.235^v43^control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-1-133862511-blog-136989044.235^v43^control&utm_relevant_index=2)

[【Linux】详细分析/dev/loop的基本知识 | 空间满了的解决方法_devloop1满了会怎么样-CSDN博客](https://blog.csdn.net/weixin_47872288/article/details/136989044)



dev/loop是由于snap而满了，如何删除snap

```bash
# 无法删除
$ sudo apt install snap snapd
$ sudo snap remove --purge firefox
error: cannot perform the following tasks:
- Remove data for snap "firefox" (1943) (unlinkat /var/snap/firefox/common/host-hunspell/en_ZA.dic: read-only file system)

# 解决方法
# （1）Verify that indeed /var/snap/firefox/common/host-hunspell is mounted as an ext4 file system using 
$ lsblk -fe7 -o+ro
# (2) stop the Firefox service
$ sudo systemctl stop var-snap-firefox-common-host\\x2dhunspell.mount
$ sudo systemctl disable var-snap-firefox-common-host\\x2dhunspell.mount 
Removed /etc/systemd/system/default.target.wants/var-snap-firefox-common-host\x2dhunspell.mount.
Removed /etc/systemd/system/multi-user.target.wants/var-snap-firefox-common-host\x2dhunspell.mount.

# （3）Then the uninstall command should work:
$ sudo snap remove --purge firefox

# （4）重复删除剩下的
$ sudo snap list
$ sudo snap remove --purge colmap
```

[Completely remove firefox snap package - Ask Ubuntu](https://askubuntu.com/questions/1414173/completely-remove-firefox-snap-package#:~:text=The following commands can be used to remove,snap%3A sudo umount %2Fvar%2Fsnap%2Ffirefox%2Fcommon%2Fhost-hunspell sudo snap remove firefox)

[Can't remove snap: read-only file system - snap - snapcraft.io](https://forum.snapcraft.io/t/cant-remove-snap-read-only-file-system/23494/8)