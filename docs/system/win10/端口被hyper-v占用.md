[hyper-v占用其他软件或服务端口解决方案_hyper-v 端口-CSDN博客](https://blog.csdn.net/ning521513/article/details/123524763)



## 这个问题的背景分为两部分

`Windows` 中有一个「TCP 动态端口范围」，处在这个范围内的端口，有时候会被一些服务占用。

​	在 `Windows Vista`（或 `Windows Server 2008`）之前，动态端口范围是 `1025` 到 `5000`；在 `Windows Vista`（或 `Windows Server 2008`）之后，新的默认起始端口为 `49152`，新的默认结束端口为 `65535`。



如果安装了 `Hyper-V`，那么 `Hyper-V` 会为容器宿主网络服务（Windows Container Host Networking Service）在「TCP 动态端口范围」随机保留一些端口号使用。正常情况下，就算保留几百、几千个也影响不大。



但是，Windows 自动更新有时会出错，导致这个范围的起始端口被重置为 `1024`……这可就麻烦了，一些常用端口动不动就因为被保留而无法使用了。

```bash
# 可以查看目前「TCP 动态端口」的范围
(base) PS C:\Users\lab> netsh int ipv4 show dynamicport tcp

Protocol tcp Dynamic Port Range
---------------------------------
Start Port      : 1024		【问题！】
Number of Ports : 13977

# 查看当前所有已经被征用了的端口
(base) PS C:\Users\lab> netsh int ipv4 show excludedportrange protocol=tcp

Protocol tcp Port Exclusion Ranges

Start Port    End Port
----------    --------
      1074        1173
      1174        1273
      1374        1473
      1474        1573
      1574        1673
      1678        1777
      2224        2323
      9598        9697
      9698        9797
      9798        9897
      9898        9997
      9998       10097
     10098       10197
     10198       10297
     10298       10397
     13510       13609
     27339       27339
     50000       50059     *

* - Administered port exclusions.
```

如果这些被征用的端口范围随机挑选到 `8088`、`8000`、`3000` 等 Web 开发常用端口，那开发就会受到影响；如果挑选到其他应用软件要调用的端口，那这些应用软件就会受到影响，可以说非常坑爹了……

## 错误的解决方法

错误的解决方法是，运行 `net stop winnat` 停止 winnat 服务，然后再运行 `net start winnat` 启动 winnat 服务。

这个方法本质上就是重启电脑的简化版……让 `Hyper-V` 再随机初始化一些端口保留，如果正好没随机到要用的端口，那一次成功。如果还是随机到了要用的端口，那就只能多来几次。

在那个问题的回答下，我看到有一些网友说「对我有用」，也有一些网友说「对我没用」，原因就是这个方法解决问题的概率完全是随机的……

## 正确的解决方法

（1）管理员权限重新设置一下「TCP 动态端口范围」，让 `Hyper-V` 只在我们设定的范围内保留端口即可。

```bash
netsh int ipv4 set dynamic tcp start=49152 num=16384

netsh int ipv6 set dynamic tcp start=49152 num=16384
```

然后重启电脑，让winnat重新加载动态端口。

不想重启就手动

```bash
net stop winnat
net start winnat
```

（2）~~为了以防这种windows更新而导致「TCP 动态端口范围」异常的问题，直接关闭hyper-V~~。不行，因为wsl2需要Hyper-V！

```bash
dism.exe /Online /Disable-Feature:Microsoft-Hyper-V
```