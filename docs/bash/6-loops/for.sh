#! /bin/bash

for i in 2 3 5 7
do
    echo "$i"
done



# {start..end..increment}
for i in {0..10}
# for i in {0..10..2}
do
    if [ $i -eq 3 ]; then break; fi
    echo "$i"
done


for (( i=0;i<5;i++))
do
    echo "$i"
done