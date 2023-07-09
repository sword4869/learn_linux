# varible

```bash
count=10
```
`count = 10` is error. Note that there are no spaces.

```bash
echo "count = $count"
```
PS: if you want print '$', that is `\$`.

# comparision operators

```bash
# == : equal
if [ $count -eq 10 ]
# < : less than
if [ $count -lt 10 ]
# > : greater than
if [ $count -gt 10 ]
# <= : less and equal
if [ $count -le 10 ]
# >= : greater and equal
if [ $count -ge 10 ]
# != : not equal
if [ $count -ne 10 ]


if ( $count == 10 )
if ( $count < 10 )
if ( $count > 10 )
if ( $count <= 10 )
if ( $count >= 10 )
if ( $count != 10 )
```

`if [ $count -eq 10]` is error. Note that there must be spaces around.

either `[ $count ==0 ]` is error. `==0` is consided to a whole punctuation. The right format is either `[ $count==0 ]` or `[ $count == 0 ]`.


> str which include space character

```bash
str1="black hole"
if [ $str1 == "black hole" ]; then
    echo "str == 'black hole'"
else
    echo "str != 'black hole'"
fi

# ./comparision.sh: line 12: [: too many arguments
# str != 'black hole'
```

Because `if [ $str1 == "black hole" ];` is actually replaced to `if [ black hole == "black hole" ];`. 
PS: if `$str='black` and `if [ $str1 == "black" ]`, that is no problem.

So, the solution is to add quotations, `if [ "$str1" == "black hole" ];`

PS: this is also suitable for Integer. So we can all use the format which uses quotation.

```bash
if [ "$variable" == ... ]
```



# boolean operators

- and : `&&`, `-a`
- or : `||`, `-o`
```bash
if [ $count -gt 10 ] && [ $count -lt 20 ]

if [[ $count -gt 10  &&  $count -lt 20 ]]

if [ $count -gt 10 -a $count -lt 20 ]
```