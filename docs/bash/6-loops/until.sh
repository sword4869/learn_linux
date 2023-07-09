#! /bin/bash

count=0

until [ $count -gt 10 ]
# until (( $count > 10 ))
do
    echo "$count"
    count=$(( count + 1))
done