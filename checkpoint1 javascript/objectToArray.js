function objectToArray(object){
    var arr = [];
    for(i in object){
        arr.push([i, object[i]])
    }
    console.log(arr)
}

objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  })