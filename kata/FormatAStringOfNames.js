function list(names){
    let allNames = names.map(data => data.name);
    if (names.length <= 1){
      return allNames.join(", ");
    } else if (allNames.length == 2) {
      return allNames.join(" & ")
    } else if (allNames.length > 2){
      for (var i=allNames.length-2; i=allNames.length-2; i--){
        allNames[i] = (allNames[i] + " & " + allNames[i+1]);
        allNames.pop();
        return allNames.join(", ")
      }
    }
  }
  
  list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}])