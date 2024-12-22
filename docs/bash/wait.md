[toc]


---

## background job

1. The ampersand sign (`&`) after a command indicates a background job.
   PS: `&&` 是并且。
2. `$!` fetches the PID of the last background process. Store the previous PID in a variable when working with multiple background processes.
3. `$?` prints the exit status of the last process.
4. `jobs -l`: show the running job in the background.


## sleep

```bash
# wait one second:
sleep 1

# 100ms
sleep 0.1

sleep 20m

sleep 8h

sleep 7d
```

## wait

### default

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
![图 2](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231918193.png)  

### PID

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

![图 1](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202406231918194.png)  
