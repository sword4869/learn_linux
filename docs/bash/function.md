https://blog.csdn.net/xhaimail/article/details/103208901

```bash
function rename(){
    imgs="$1/imgs"
    files=($(ls -1v $imgs))

    # 从0开始重命名
    for i in "${!files[@]}"; do
        oldname="$imgs/${files[$i]}"
        newname=$(printf "$imgs/%05d.png" $i)
        mv "$oldname" "$newname"
        #echo $oldname $newname
	done
}

rename $subject
```

