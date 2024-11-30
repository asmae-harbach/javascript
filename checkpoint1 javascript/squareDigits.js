function squareDigits(num){
    var string = num.toString();
    var num2 = '';
    for(i in string){
        string[i] = 
        num2 += Number(string[i])**2
    }
    num2 = Number(num2)
    console.log(num2)
}
squareDigits(3212)