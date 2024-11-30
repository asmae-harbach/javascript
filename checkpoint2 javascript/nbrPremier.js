function nbrPremier(nbr){
    var res;
    var arr = [];
    for(i=1; i<10; i++){
        if(i != 1 && i != nbr){
            res = nbr % i;
            if(res == 0) {
                arr.push(i)
            }
        }
    }
    if(arr.length == 0){
        console.log("C'est un nombre premier")
    }else{
        console.log("C'est pas un nombre premier")
    }
}
nbrPremier(9)