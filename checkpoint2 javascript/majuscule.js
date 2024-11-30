function majuscule(chaine){
    var chaine2 = '';
    var chainemaj;
    for(i in chaine){
        if(i == 0 || chaine[i-1] == ' ' && chaine[i-2] == '.' || chaine[i-1] == '.'){
            chainemaj = chaine[i].toUpperCase();
            chaine2 += chainemaj
        }else{
            chaine2 += chaine[i]
        }
    }
    console.log(chaine2)
}
majuscule('première phrase . deuxième phrase')