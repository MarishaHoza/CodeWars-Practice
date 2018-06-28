function fish(shoal){
    let remaining = shoal.split("").map(Number);
    let mySize = 1
    let tummy = 0;
    let nextSize = 4;
  
    for (var i=0; i<remaining.length; i++){
      if (remaining[i] <= mySize && remaining[i] > 0){
        tummy += remaining[i];
        remaining.splice(i,1);
        if (tummy >= nextSize){
          mySize ++;
          tummy -= nextSize;
          nextSize += 4;
        }
        i = -1;
      }
    }
    return mySize;
  }
  
  fish("151128241212192113722321331")