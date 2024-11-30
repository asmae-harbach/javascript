function isSymmetrical(num){
    string = num.toString();
    var arr2 = [];
    var sum = '';
    var isSymmetric = true;
    for (i in string){
        arr2.unshift(string[i])
    }
    for (i in arr2){
        sum += arr2[i]
    }
    sum = Number(sum)
    if(sum == num){
        console.log(isSymmetric);
    }else{
        console.log(!isSymmetric)
    }
}

isSymmetrical(7227)