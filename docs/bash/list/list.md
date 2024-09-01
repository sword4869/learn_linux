```bash

$ listTest=(value1 value2 value3)

$ echo $listTest 
value1
$ echo ${listTest}
value1

$ echo ${listTest[@]}
value1 value2 value3

$ echo ${listTest[0]}
value1
$ echo ${listTest[1]}
value2
$ echo ${listTest[-1]}
value3

$ echo ${#listTest[@]}
3

$ echo ${!listTest[@]}
0 1 2
```

```bash
subdirs=(bala  biden  justin  malte_1  marcel  nf_01  nf_03  obama)

for subject in ${subdirs[@]}; do
	echo $subject
done
```