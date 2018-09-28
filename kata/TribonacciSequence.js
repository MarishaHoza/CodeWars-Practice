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



  // second solution using recursion

  function tribonacci2(signature,n){
    if (n >= 3) {
      while (signature.length < n) {
        signature.push(trib(signature))
      }
    } else {
      while (signature.length > n) {
        signature.pop()
      }
    }
    return signature
  }
  
  function trib (nums) {
    return (nums[nums.length-1] + nums[nums.length-2] + nums[nums.length-3])
  }

  tribonacci2([1,1,1],10) // [1,1,1,3,5,9,17,31,57,105]
