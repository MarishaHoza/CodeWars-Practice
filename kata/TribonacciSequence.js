function tribonacci(signature,n){
    let output = [];
    
    for (var i=0; i<n && i<3; i++){
      output.push(signature[i])
    }
      
    let pointer = 0;
    while (output.length>=3 && output.length<n){
      output.push(output[pointer] + output[pointer+1] + output[pointer+2])
      pointer ++
    }
      
    return output
  }


  tribonacci([1,1,1],10) // [1,1,1,3,5,9,17,31,57,105]