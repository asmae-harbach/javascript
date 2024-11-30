function factorielle(num){
    var fac = 1;
    for(i = 1; i<=num; i++){
        fac *= i;
    }
    console.log(fac)
}
factorielle(3)