function filterArray(arr){
    var arr2 = [];
    for(i in arr){
        if(typeof(arr[i]) === "number" && arr[i]>= 0){
            arr2.push(arr[i]);
        }
    }
    return arr2
}

console.log(filterArray([1, 2, "aasf", "1", "123", 123]))