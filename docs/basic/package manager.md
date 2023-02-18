- [1. package manager](#1-package-manager)
  - [1.1. APT, apt-get, apt](#11-apt-apt-get-apt)
  - [1.2. Command](#12-command)
  - [1.3. Advance](#13-advance)
---
# 1. package manager
## 1.1. APT, apt-get, apt

APT(Advanced Packaging Tool) is a tool used to **manage packages** for Debian.

apt is not APT.

在基于 Debian 的 Linux 发行版中，有各种工具可以与 APT 进行交互，以方便用户安装、删除和管理的软件包。`apt-get` 便是其中一款广受欢迎的命令行工具。

鼓励用户使用 `apt` 而不是 `apt-get`。apt 命令的引入就是为了解决命令过于分散的问题，它包括了 apt-get 命令出现以来使用最广泛的功能选项，以及 apt-cache 和 apt-config 命令中很少用到的功能。即apt = apt-get、apt-cache 和 apt-config 中最常用命令选项的集合。

## 1.2. Command
|apt 命令|取代的命令|命令的功能|
|-|-|-|
|apt update|apt-get update|刷新存储库索引|
|apt upgrade|apt-get upgrade|升级所有可升级的软件包|
|apt full-upgrade|apt-get dist-upgrade|在升级软件包时自动处理依赖关系|
|apt search|apt-cache search|搜索应用程序|
|apt show|apt-cache show|显示装细|
|apt install|apt-get install|安装软件包|
|apt remove|apt-get remove|移除软件包|
|apt purge|apt-get purge|移除软件包及配置文件|
|apt autoremove|apt-get autoremove|自动删除不需要的包|


|新的apt命令|命令的功能|
|-|-|
|apt list|列出包含条件的包（已安装，可升级等）|
|apt edit-sources|编辑源列，即`vim /etc/apt/sources.list`|


Details:
- update & upgrade
  `update` updates the **list** of package **available** for download from the repository.
  `upgrade` upgrades the **existing** packages on your system.

- remove & purge
  `remove` doesn't remove the configuration files, `purge` does.

## 1.3. Advance

```bash
$ dpkg -i xxx.deb
报了一堆依赖错误，要你先安装 apt install xx, apt install xxx...
```
不用一个一个手动敲，直接在报完错后打就全安装上。
```bash
$ dpkg -i xxx.deb
$ apt -f install
```