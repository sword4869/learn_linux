# HISTSIZE
This variable `HISTSIZE` contains the maximum number of commands your command history file will store. These commands are any ones you’ve previously typed into your command prompt in this session and can be recalled with your up­ and down­arrow keys.

The default value of this variable is probably set to `1000` on your system. This indicates that the terminal will store your last 1,000 commands by default.
```bash
$ set | grep HISTSIZE
HISTSIZE=1000
```
Sometimes, you won’t want your system to save past commands because you don’t want to leave any evidence of your activity on your own system or a target system. So you can set the HISTSIZEvariable to 0so the system won’t store any of your past commands.
```bash
$ HISTSIZE=0
```

> Question: Should you use this command when you just invaded the computer or when you want to leave the computer?