function marathonDistance(arr){
    var count = 0
    for(i in arr){
        if(arr[i]< 0){
            arr[i] = -arr[i]
            count += arr[i]
        }else{
            count += arr[i]
        }
    }
    if(count == 25){
        return true
    }else{
        return false
    }
}

console.log(marathonDistance([1, 2, 3, 4, -6]))