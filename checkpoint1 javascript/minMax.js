function minMax(arr) {
    var min = arr[0];
    var max = arr[0];
    var arr2 = [];
    for(var i = 1; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
        if(arr[i]<min){
            min = arr[i];

        }
    }
    arr2.push(max)
    arr2.unshift(min)
    return arr2

}
console.log(minMax([1, 2, 5 , 3, 4]));











































