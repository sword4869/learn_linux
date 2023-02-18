- [1. bash script](#1-bash-script)
  - [1.1. Basic](#11-basic)
    - [1.1.1. Interpreter](#111-interpreter)
    - [1.1.2. Permission to execute](#112-permission-to-execute)
    - [1.1.3. Run](#113-run)
  - [1.2. Usecase](#12-usecase)
  - [1.3. quotes](#13-quotes)
  - [1.4. 执行命令](#14-执行命令)
  - [1.5. alias](#15-alias)

---
# 1. bash script
## 1.1. Basic
### 1.1.1. Interpreter

The shebang `#!`: a combination of a bash mark and an exclamation mark.

`#! /bin/bash`, `#! python3`

### 1.1.2. Permission to execute

[chmod](./file%20permission.md/#%20change%20permission)

### 1.1.3. Run

`./` : it’s good practice to use the `./` when executing files as this localizes the file execution to the current directory. There may be another file with the same name on your system.


## 1.2. Usecase

`echo`: submit a message to standard output.

`read`: place whatever they input into a variable.

```bash
#! /bin/bash
read name
echo "Hello" $name "to Bash Script"
```

## 1.3. quotes


```bash
$ echo os
os
$ echo "os"
os
$ echo "'os'"
'os'
$ echo '"os"'
"os"
$ id=123
$ echo '"'$id'"'
"123"
$ echo "'"$id"'"
'123'
$ echo '"!!' $id---'"'
"!! 123---"
```

## 1.4. 执行命令


```bash
$ id1=`id -u -n`
$ echo $id1

$ id2=$(id -u -n)
$ echo $id2
```

## 1.5. alias

```bash
$ hhh='ls'
$ hhh
hhh: command not found
$ echo $hhh
ls
$ $hhh
cache.db  clash  config.yaml  Country.mmdb

$ alias jjj='ls'
$ jjj
docs  images  node_modules  package.json  yarn.lock
$ echo $jjj

$ $jjj
```