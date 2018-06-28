function merge(line) {
    let combined = [];
    let final = [];
  
    for (var i=0; i<line.length; i++){
      if (line[i] !== 0){
        combined.push(line[i])
      }
    }
   
    for (var i=0; i<combined.length; i++){
      if (combined[i] == combined[i+1]){
        final.push(combined[i]+combined[i+1]);
        i++;
      } else {
        final.push(combined[i]);
      }
    }
    
    while (final.length < line.length) {
      final.push(0);
    }
    
    return final;
  };

  merge([8,8,16,0]);