/*
Description:
You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note
consecutive strings : follow one after another without an interruption
*/


function longestConsec(strarr, k) {
    let longest = "";
    for (var i=0; i<strarr.length+1-k; i++){
      let temp = "";
      for (var j=i; j < i+k; j++){
        temp += strarr[j]
      }
      if ( temp.length > longest.length) {
        longest = temp
      }
    }
    return longest
}

longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)
