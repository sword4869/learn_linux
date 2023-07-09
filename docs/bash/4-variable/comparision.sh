#! /bin/bash

int1=10

if (( $int1 == 10 )); then
  echo "int == 10"
else
  echo "int != 10"
fi

str1="black hole"
if [[ "$str1" == "black hole" ]]; then
    echo "str == 'black hole'"
else
    echo "str != 'black hole'"
fi