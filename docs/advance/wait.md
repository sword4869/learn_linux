- [1. background job](#1-background-job)
- [2. sleep](#2-sleep)
- [3. wait](#3-wait)
  - [3.1. default](#31-default)
  - [3.2. PID](#32-pid)


---

## 1. background job

1. The ampersand sign (`&`) after a command indicates a background job.
   PS: `&&` 是并且。
2. `$!` fetches the PID of the last background process. Store the previous PID in a variable when working with multiple background processes.
3. `$?` prints the exit status of the last process.
4. `jobs -l`: show the running job in the background.


## 2. sleep

```bash
# wait one second:
sleep 1

# 100ms
sleep 0.1

sleep 20m

sleep 8h

sleep 7d
```

## 3. wait

### 3.1. default

Without any parameters, the wait command waits for **all** background processes to finish before continuing the script.

```bash
#!/bin/bash
sleep 10 &
sleep 15 &
sleep 5 &
echo $(date +%T)
wait
echo $(date +%T)
```
![图 2](../../images/60e5b8f979678b151806f122b282b994354806674c5bb5cde11866e15e4e3d95.png)  

### 3.2. PID

```bash
wait $PID
```

```bash
#!/bin/bash
echo "Process 1 lasts for 2s" && sleep 2 &
PID=$!
echo "Process 2 lasts for 3s" && sleep 3 &
echo "Current time $(date +%T)"
wait $PID
echo "Process 1 ended at time $(date +%T) with exit status $?"
wait $!
echo "Process 2 ended at time $(date +%T) with exit status $?"
```

![图 1](../../images/04f4744f4539b085f7064bcf050c16bd043fcc629dd23f3558df7b943c0f2890.png)  
