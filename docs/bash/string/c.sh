#! /bin/bash

str1="hello"
str2="world"
str3=$str1$str2
echo $str3


str4="aBc"
# one ^ is uppercase first character, two ^ is uppercase all
echo ${str4^}
echo ${str4^^}