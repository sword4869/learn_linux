- [1. list processes](#1-list-processes)
  - [1.1. all processes](#11-all-processes)
  - [1.2. the greediest process](#12-the-greediest-process)
- [2. change process priority](#2-change-process-priority)
- [3. kill](#3-kill)
  - [3.1. pid](#31-pid)
  - [3.2. name](#32-name)
- [4. run in background](#4-run-in-background)
- [5. schedule a process](#5-schedule-a-process)
---

# 1. list processes
## 1.1. all processes

`ps` without any options lists the processes started by the **currently logged-in user**. 

```bash
$ pss
```

It is insufficient to see the processes run **by other users and by the system in the background**. `ps axu` can do this.

```bash
$ ps axu
```

## 1.2. the greediest process
```bash
$ top
  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
    1 root      20   0     896    580    516 S   0.0   0.0   0:00.06 init
    8 root      20   0     896     84     20 S   0.0   0.0   0:00.00 init
```

# 2. change process priority

We could start the process with the `nice` command. And `renice` a pid of the running process.

The values for `nice` and `renice`is `NI` of `top`, which represent the the process priority(the left is executed firstly, the right is executed later). And the values range from `-20` to `+19`, with zero being the default value.
```bash
# get higher priority
$ nice -n -10 /usr/bin/python3

$ renice -10 6996
```

# 3. kill
## 3.1. pid

> sytax

展示不同功能的 kill 命令。
```bash
$ kill -l
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


Signals can be specified in three different ways which are equivalent to one another:
- Using number (e.g., `-9` or `-s 9`).
  `kill -9 <PID_NUMBER>`
- Using the “SIG” prefix (e.g., `-SIGKILL` or `-s SIGKILL`).
  `kill -SIGKILL <PID_NUMBER>`
- Without the “SIG” prefix (e.g., `-KILL` or `-s KILL`).
  `kill -KILL <PID_NUMBER>`

> 常用

```bash
# 杀死进程
$ kill -KILL 123

# 暂停进程
$ kill -STOP 123

# 恢复暂停的进程
$ kill -CONT 123
```
## 3.2. name
```bash
$ killall -9 python3
```

# 4. run in background

All commands that run are executed from within that shell, even if they run from the graphical interface.
```bash
# COMMAND & 
$ vim config.txt &
```
Move a process running in the background to the foreground.
```
$ fg vim
``` 

# 5. schedule a process

- `at now+5minutes`: (no seconds), minutes, hours, days, weeks, months, years
- `at 7:20pm 06/25/2022`, `at 7:20pm`(today), `at 7:20pm tomorrow`(tomorrow)
```bash
# open the daemon process `atd` of at.
$ sudo systemctl enable --now atd

# ctrl-D
$ at now+1minutes
at> touch hello.txt
at> <EOT>
job 2 at Mon Sep  5 22:57:00 2022

$ echo "hello" > ~/test.txt | at now+1minutes
job 3 at Mon Sep  5 22:57:00 2022
```