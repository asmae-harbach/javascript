function sumOfCubes(arr){
    var sum = 0;
    for(i in arr){
        sum  += arr[i] ** 3;
    }
    console.log("La somme des cubes est : " + sum) ;
}

sumOfCubes([1, 5, 9])