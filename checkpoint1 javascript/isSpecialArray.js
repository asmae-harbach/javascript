function isSpecialArray(arr){
    var arr2 = [];
    for(i in arr){
        if(i % 2 == 0 && arr[i] % 2 != 0 || i % 2 !=0  && arr[i] % 2 == 0){
            arr2.push(arr[i]);
        }
    }
    if(arr2.length == 0){
        return true
    }else{
        return false
    }
}
console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]))