- [1. cli\_history](#1-cli_history)
  - [1.1. HISTSIZE](#11-histsize)
# 1. cli_history

## 1.1. HISTSIZE
This variable `HISTSIZE` contains the maximum number of commands your command history file will store. These commands are any ones you’ve previously typed into your command prompt in this session and can be recalled with your up­ and down­arrow keys.

The default value of this variable is probably set to `1000` on your system. This indicates that the terminal will store your last 1,000 commands by default.
```bash
$ set | grep HISTSIZE
HISTSIZE=1000
```

Sometimes, you won’t want your system to save past commands because you don’t want to leave any evidence of your activity on your own system or a target system. So you can set the `HISTSIZE` variable to 0 and the system won’t store any of your past commands.

```bash
$ HISTSIZE=0
```
when should use?
- when you just invaded the computer.
    but it is hard for you to manipulate the computer.
- when you want to leave the computer
    firstly, type `HISTSIZE=0` to eliminate the current logs, followed `HISTSIZE=100` to resume the cli-history function.