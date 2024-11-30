[toc]

作业。

作业控制是一种允许用户在一个shell中同时运行多个进程的机制。**所以，当前shell退出（ssh登出），那么jobs的任务都终止**.

前台、后台。命令在后台运行，不会阻塞当前的shell。



缺点：后台作业还会输出打印到屏幕上，但是终端还是可以输入命令的，只要正确输入，就不会有问题。

## jobs显示当前有哪些作业

```bash
[linux@bashcommandnotfound.cn ~]$ jobs
[1]   Running                 ping 8.8.8.8 &
[2]-  Running                 sleep 100 &
[3]+  Running                 python &
```

`[1]`是**作业序号**。`+`是最近作业，`-`是上一个作业，别的就是更早的作业。

`&`表示后台作业。

`Stopped`, `Running`, `Killed`

参数：

​	`-l`: 再显示 pid

## 作业进入后台

方式一：执行时就`&`

```bash
[linux@bashcommandnotfound.cn ~]$ ping www.bing.com &
[1] 1234
```

`[1]`是**作业序号**，`1234`是pid。

方式二：前台程序时，按下 ctrl + z 进入后台并暂停，`bg`再让其执行。

```bash
$ python
>>>
[1]+  Stopped                 python
$ bg
[1]+ python &
```



## 作业进入前台

```bash
[1]+  Stopped                 python
(base) lenovo@lenovo:~$ fg
python
>>>
```

脚本默认是不支持作业控制的，需要在脚本的开头加上 `set -m` 命令，来启用作业控制。

## 暂停 Stopped 作业

暂停前台作业: ctrl + z

```bash
$ python
>>>
[1]+  Stopped                 python
```



暂停 Stopped 后台作业

```bash
# %作业序号
kill -STOP %1

# pid
kill -STOP 1234
```

PS: 恢复 作业 Running 

```bash
# 以后台继续
bg %1
# 以前台继续
fg %1
```



## bg fg

bg: 继续执行一个后台作业 Running

fg：将作业放到前台 Running

```bash
bg [job_spec ...]
```

```bash
# 什么不输入代表默认最近作业
bg

# %作业序号. 可以直接输入作业序号
bg %1
bg 1

# 最近的一个作业
bg %+
# 上一个作业
bg %-

# %?str	包含str的作业	
bg %?ping
# %str	以str开头的作业	
bg %sleep
```

