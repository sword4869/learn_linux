显示内存使用情况

## 解释

```bash
lab@LAPTOP-KB4DNMO0:~$ free
               total        used        free      shared  buff/cache   available
Mem:        15976796      560284    14952652        3380      463860    15150056
Swap:        4194304           0     4194304
```

分为 mem 内存 和 swap 交换空间。

total: 总共

used: 已使用的

free: 未被使用的

shared: 进程共享的

buff/cache: 操作系统缓存的

available: **可用的**

PS：

（1）free = total - used - buff

（2）available 一般是 free 多，但小于 free + buff

## 单位

默认是 kB。

可指定 `-b` 字节, `-k`, `-m`, `-g`, `-h`

（1）`-g`等是1024，`-h`是1000.

```bash
lab@LAPTOP-KB4DNMO0:~$ free
               total        used        free      shared  buff/cache   available
Mem:        15976796      560284    14952652        3380      463860    15150056
Swap:        4194304           0     4194304
lab@LAPTOP-KB4DNMO0:~$ free -b
               total        used        free      shared  buff/cache   available
Mem:     16360239104   575303680 15309914112     3465216   475021312 15512023040
Swap:     4294967296           0  4294967296
lab@LAPTOP-KB4DNMO0:~$ free -k
               total        used        free      shared  buff/cache   available
Mem:        15976796      560496    14952404        3380      463896    15149832
Swap:        4194304           0     4194304
lab@LAPTOP-KB4DNMO0:~$ free -m
               total        used        free      shared  buff/cache   available
Mem:           15602         547       14601           3         453       14794
Swap:           4096           0        4096
lab@LAPTOP-KB4DNMO0:~$ free -g
               total        used        free      shared  buff/cache   available
Mem:              15           0          14           0           0          14
Swap:              4           0           4
lab@LAPTOP-KB4DNMO0:~$ free -h
               total        used        free      shared  buff/cache   available
Mem:            15Gi       549Mi        14Gi       3.0Mi       453Mi        14Gi
Swap:          4.0Gi          0B       4.0Gi
```

## 其他

`-t` mem 内存 和 swap 交换空间的总计

```bash
lab@LAPTOP-KB4DNMO0:~$ free -th
               total        used        free      shared  buff/cache   available
Mem:            15Gi       546Mi        14Gi       3.0Mi       453Mi        14Gi
Swap:          4.0Gi          0B       4.0Gi
Total:          19Gi       546Mi        18Gi
```

