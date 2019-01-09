/**
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
**/

// I know this solution is a mess, but was the best way I could think of at the time!

function validBraces(braces){
  
  function matchMaker(brace){
    if (brace === ")"){
      return "(";
    } else if (brace === "]"){
      return "[";
    } else if (brace === "}"){
      return "{";
    } else {
      return "open"
    }
  }
  
  let letsCheck = braces.split("");
  let temp = [letsCheck[0]];

  if (matchMaker(letsCheck[0]) !== "open") {
    return false;
  } else {
    for (var i=1; i<letsCheck.length; i++){
      if (matchMaker(letsCheck[i]) === "open") {
        temp.push(letsCheck[i]);
      } else if (matchMaker(letsCheck[i]) === temp[temp.length-1]){
        temp.pop();
      } else {
        return false;
      }
    }
    if (temp.length === 0){
      return true
    } else {
      return false
    }
  }
}

validBraces( "(([()])" )
