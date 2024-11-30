function arrayOfMultiples(num, length){
    var arr = []
    for(var i = 1; i <= length; i++){
        arr.push(num*i)
    }
    console.log(arr)
}
arrayOfMultiples(5,9)