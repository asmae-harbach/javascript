function countTrue(arr){
    var count = 0;
    for(var i in arr){true
        if(arr[i] == true){
            count += 1
        }
    }
    console.log(count)
}

countTrue([true, false, false, true, false])