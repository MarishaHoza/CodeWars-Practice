function order(words){
    let order = words.split("").filter(Number).map(Number);
    let text = words.split(" ");
    let newWords = [];
    for (var i=0; i<order.length; i++){
      newWords[order[i]-1] = text[i]
    }
    return newWords.join(" ")
  }

  order("is2 Thi1s T4est 3a")