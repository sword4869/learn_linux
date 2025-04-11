[toc]

```bash
# kill PID
kill 2388
kill -9 2388
```

## 信号

使用 `kill -l` 命令列出所有可用信号

```
root@7d294bf7fee9:/# kill -l
 1) SIGHUP	 2) SIGINT	 3) SIGQUIT	 4) SIGILL	 5) SIGTRAP
 6) SIGABRT	 7) SIGBUS	 8) SIGFPE	 9) SIGKILL	10) SIGUSR1
11) SIGSEGV	12) SIGUSR2	13) SIGPIPE	14) SIGALRM	15) SIGTERM
16) SIGSTKFLT	17) SIGCHLD	18) SIGCONT	19) SIGSTOP	20) SIGTSTP
21) SIGTTIN	22) SIGTTOU	23) SIGURG	24) SIGXCPU	25) SIGXFSZ
26) SIGVTALRM	27) SIGPROF	28) SIGWINCH	29) SIGIO	30) SIGPWR
31) SIGSYS	34) SIGRTMIN	35) SIGRTMIN+1	36) SIGRTMIN+2	37) SIGRTMIN+3
38) SIGRTMIN+4	39) SIGRTMIN+5	40) SIGRTMIN+6	41) SIGRTMIN+7	42) SIGRTMIN+8
43) SIGRTMIN+9	44) SIGRTMIN+10	45) SIGRTMIN+11	46) SIGRTMIN+12	47) SIGRTMIN+13
48) SIGRTMIN+14	49) SIGRTMIN+15	50) SIGRTMAX-14	51) SIGRTMAX-13	52) SIGRTMAX-12
53) SIGRTMAX-11	54) SIGRTMAX-10	55) SIGRTMAX-9	56) SIGRTMAX-8	57) SIGRTMAX-7
58) SIGRTMAX-6	59) SIGRTMAX-5	60) SIGRTMAX-4	61) SIGRTMAX-3	62) SIGRTMAX-2
63) SIGRTMAX-1	64) SIGRTMAX
```



- `SIGHUP`（信号1）：在 Shell 断开时，即退出终端或者断线的情况下，自动向该 Shell 中的子程序发送信号，让子程序全都停止运行。
- `SIGINT`（信号2）：前台的 **CTRL+C** 产生的信号，**可以**被进程捕获或忽略。
- `SIGKILL`（信号9）：强制结束进程，**不能**被捕获或忽略。
  - 但僵尸进程可能无法被杀死
- `SIGUSR1`（10）和 `SIGUSR2`（12）
  - 是预留给用户程序的，**需在代码中显式处理**（如重新加载配置、切换日志文件等）。若未处理，默认行为是终止进程。
- `SIGTERM`（信号15）：**默认**，正常结束进程，**可以**被捕获或忽略。
- `SIGCONT`（信号18）：继续执行被暂停的进程。
- `SIGSTOP`（信号19）：前台的 **CTRL+Z** 暂停进程，**不能**被捕获、忽略或结束。



正常退出和ctrl-C，都是可以被捕获的。

强制杀死和暂停，都是不可捕获的。



### 杀死进程组

```bash
# kill -9 -PGID
kill -9 -1234  # 向 PGID=1234 的整个进程组发送 SIGKILL（强制终止）
```
### 杀死指定用户所有进程

```bash
# 方法一 过滤出hnlinux用户进程
kill -9 $(ps -ef | grep hnlinux) 
# 方法二
kill -u hnlinux 
```

## 返回值

**`kill` 的返回值**：

- **成功**：返回 `0`（信号已发送，不保证进程正确处理了信号）。
- 非0：
  - **失败**：返回 `1`（如进程不存在、无权限等）
  - **无效信号或选项**：返回`2`
  - 并附带错误信息，例如：
    - `bash: kill: (1234) - No such process`（进程不存在）
    - `bash: kill: (1234) - Operation not permitted`（权限不足）

