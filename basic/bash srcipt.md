- [Basic](#basic)
  - [Interpreter](#interpreter)
  - [Permission to execute](#permission-to-execute)
  - [Run](#run)
- [Usecase](#usecase)

---

# Basic
## Interpreter

The shebang `#!`: a combination of a bash mark and an exclamation mark.

`#! /bin/bash`, `#! python3`

## Permission to execute

[chmod](./file%20permission.md/#%20change%20permission)

## Run

`./` : it’s good practice to use the `./` when executing files as this localizes the file execution to the current directory. There may be another file with the same name on your system.


# Usecase

`echo`: submit a message to standard output.

`read`: place whatever they input into a variable.

```bash
#! /bin/bash
read name
echo "Hello" $name "to Bash Script"
```

