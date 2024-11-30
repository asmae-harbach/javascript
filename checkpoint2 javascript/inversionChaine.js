function inversionChaine(chaine){
    var arr = [];
    var chaine2 = '';
    for(i in chaine){
        arr.unshift(chaine[i]);
    }
    for(i in arr){
        chaine2 += arr[i]
    }
    console.log(chaine2)
}

inversionChaine('test')