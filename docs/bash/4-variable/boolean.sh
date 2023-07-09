#! /bin/bash

count=15

# if [ $count -gt 10 ] && [ $count -lt 20 ]; then
# if [[ "$count" -gt 10  &&  "$count" -lt 20 ]]; then
if [ "$count" -gt 10 -a "$count" -lt 20 ]; then
    echo "count is in (10, 20)"
else
    echo "count is not in (10, 20)"
fi