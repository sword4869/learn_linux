前台的 **CTRL+C** 其实就是向前台程序发出 `2) SIGINT` 信号， **CTRL+Z** 发出的是 `20) SIGTSTP` 信号；

如果不指定 kill 发出的信号，则默认为 `15) SIGTERM`，终止任务；

用的最多的就是 `9) SIGKILL` 信号，无条件结束任务。

在 Shell 断开时，即退出终端或者断线的情况下，自动向该 Shell 中的子程序发送 `SIGHUP` 信号，让子程序全都停止运行。

```bash
# kill PID
kill 2388
```