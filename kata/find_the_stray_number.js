/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

Personal challenge: do not use any javascript methods
*/


function stray(numbers) {
  let first = numbers[0];
  let last = numbers[numbers.length-1];
  
  if (first !== last) {
    if (first !== numbers[1]) {
      return first;
    } else {
      return last;
    }
  } else {
    for (var i=1; i<numbers.length-1; i++) {
       if (numbers[i] !== first) {
         return numbers[i]
       }
    }
  }
}

stray([1, 1, 1, 2, 1]) // returns 2
