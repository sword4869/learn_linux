> for filename with space

```bash
# quotation
$ ./file.sh "log diary.txt"
hello world

# slash the space
$ ./file.sh log\ diary.txt
hello world
```


# write to file

## echo


```bash
# rewrite
echo "hello" > log.txt

# append
echo "world" >> log.txt
```


## cat

```bash
cat > log.txt
```
you get into an editor where you can input from keyboard. Even you can input enter character.

when you wand to get out of it, press `ctrl + d`.