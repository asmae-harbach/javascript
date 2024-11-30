function nombreCar(chaine){
    var count = 0;
    for(i in chaine){
        if(chaine[i] != ' ' && chaine[i] != '.'){
            count += 1
        }
    }
    console.log(count)
}

nombreCar('test .')