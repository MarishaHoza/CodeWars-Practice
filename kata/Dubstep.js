function songDecoder(song){
    let words = song.split("WUB");
    let decode = [];
    
    for (var i=0; i<words.length; i++){
      if (words[i] !== ""){
        decode.push(words[i])
      }
    }
    return decode.join(" ")
  }

  songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")