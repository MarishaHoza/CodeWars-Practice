let vowels = {
    a:0, 
    e:0,
    i:0,
    o:0,
    u:0,
}
  
function disemvowel(str) {
    let letters = str.split("");
    let unvoweled = [];
    for (var i=0; i<letters.length; i++){
      if (vowels.hasOwnProperty(letters[i].toLowerCase())) {
      } else {
        unvoweled.push(letters[i])
      }
    }
    return unvoweled.join("");
}

  disemvowel("you guys are all loosers LOL")