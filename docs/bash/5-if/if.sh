#! /bin/bash

count=10

echo "count = $count"

# if
# if [ $count == 10 ]
if [ $count -eq 10 ]
then
    echo "count is 10"
fi

# if-else
if [ $count == 0 ]
# if [ $count -eq 0 ]
then
    echo "count is 0"
else
    echo "count is not 0"
fi

# if-elif-else
if [ $count == 0 ]
# if [ $count -eq 0 ]
then
    echo "count is 0"
elif [ $count == 10 ]
# elif [ $count -eq 10 ]
then
    echo "count is 10"
else
    echo "count is not neither 0 nor 10"
fi
