```bash
#! /bin/bash

# just record std out
ls -al >file.txt

# 1 represent std out, 2 represent std error.
ls -al 1>file.txt 2>file2.txt

# file.txt records std out and std error
ls -al >file.txt 2>&1
# another format
ls -al >& file.txt
```