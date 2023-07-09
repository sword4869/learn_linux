# script arguments

> first argument is the name of the srcipt.
```bash
#! /bin/bash

echo $0 $1 $2
```
```bash
$ ./dollar.sh hello 21
./dollar.sh hello 21
```
`$0` is the name of the script.
```bash
#! /bin/bash

echo $1 $2
```
```bash
$ ./dollar2.sh 2 3
2 3
```

> first argument is indeed argument.

```bash
#! /bin/bash

# the length of arguments
echo $#

# all arguments
echo $@

# the arguments by index
args=("$@")
echo ${args[0]} ${args[1]}
```

Note that `args=('$@')` is error.

```bash
$ ./args.sh hello 1
2
hello 1
hello 1
```