# script and console

```bash
#! /bin/bash

echo "hello"
```

```bash
$ echo "hello"
```

The command in the script is as same as the command in the console.

# where is shell and bash

```bash
# show all shell available on your system
$ cat /etc/shells
# /etc/shells: valid login shells
/bin/sh
/bin/bash
/usr/bin/bash
/bin/rbash
/usr/bin/rbash
/bin/dash
/usr/bin/dash
/usr/bin/tmux
/usr/bin/screen
```

```bash
# the path of bash
$ which bash
/bin/bash
```

# hello script

> create a script

```bash
#! /bin/bash

echo "hello"
```

`#! /bin/bash` means a interpreter which executes the script.

> run it

```bash
$ chmod +x hello.sh
$ .hello.sh
```
