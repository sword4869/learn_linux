#! /bin/bash

n1=3
n2=4

echo n1+n2              # n1+n2
echo 3+4                # 3+4

echo $(( n1 + n2 ))     # 7
echo $(expr $n1 + $n2)  # 7
