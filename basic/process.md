- [1. all processes](#1-all-processes)
- [2. the greediest process](#2-the-greediest-process)
- [3. change process priority](#3-change-process-priority)
- [4. kill](#4-kill)
- [5. run in background](#5-run-in-background)
- [6. schedule a process](#6-schedule-a-process)
---
# 1. all processes

`ps` without any options lists the processes started by the currently logged-in user. It is insufficient to see the processes run by other users and by the system in the background.
`ps axu` can do this.

```bash
$ ps axu
```

# 2. the greediest process
```bash
$ top
  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
    1 root      20   0     896    580    516 S   0.0   0.0   0:00.06 init
    8 root      20   0     896     84     20 S   0.0   0.0   0:00.00 init
```

# 3. change process priority

We could start the process with the `nice` command. And `renice` a pid of the running process.

The values for `nice` and `renice`is `NI` of `top`, which represent the the process priority(the left is executed firstly, the right is executed later). And the values range from `-20` to `+19`, with zero being the default value.
```bash
# get higher priority
$ nice -n -10 /usr/bin/python3

$ renice -10 6996
```

# 4. kill

- pid
```bash
$ kill -9 6996
```
- name
```bash
$ killall -9 python3
```

# 5. run in background

All commands that run are executed from within that shell, even if they run from the graphical interface.
```bash
# COMMAND & 
$ vim config.txt &
```
Move a process running in the background to the foreground.
```
$ fg vim
``` 

# 6. schedule a process

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