function funcFibonacci(n){
    var sum;
    var arr = [0, 1]
    for(i = 1; i<n; i++){
        sum = arr[i-1] + arr[i];
        arr.push(sum)
    }
    console.log(arr)
}
funcFibonacci(12)