- `head` and `tail`
- nmubering the lines: `nl`
- replace: `sed`

```bash
# the first 10 lines
$ head FILE

# the first 20 lines
$ head -20 FILE
```
```bash
$ nl FILE          
    1  jk
    2  ddfd
    3  df
    4  sdfa
    5  dfsdf
```
```bash
# g: global occurrences
$ sed s/mysql/MYSQL/g FILE

# only first occurrence
$ sed s/mysql/MYSQL FILE

# only second occurrence
$ sed s/mysql/MYSQL/2 FILE
```