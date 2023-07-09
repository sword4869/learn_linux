#! /bin/bash

count=0

while [ $count -lt 10 ]
# while (( $count < 10 ))
do
    echo "$count"
    count=$(( count + 1))
done