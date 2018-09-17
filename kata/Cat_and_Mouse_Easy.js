function catMouse(x){
    let characters = x.split("");
    let distance = 0;
    for (var i=0; i<characters.length; i++){
      if (characters[i] === "."){
        distance ++
      }
    }
    if (distance <= 3){
      return "Caught!"
    } else {
      return "Escaped!"
    }
  }

  catMouse('C.....m')