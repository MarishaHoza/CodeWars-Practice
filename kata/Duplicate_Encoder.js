
/* 
The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:
"din" => "((("
"recede" => "()()()"
"Success" => ")())())"
"(( @" => "))(("

*/

function duplicateEncode(word){
    let key = {};
    let characters = word.toLowerCase().split("");
    for (var i = 0; i < characters.length; i++){
      if (key.hasOwnProperty(characters[i])){
        key[characters[i]] ++;
      } else {
        key[characters[i]] = 1;
      }
    }
    let answer = [];
    for (var i = 0; i < characters.length; i++){
      if (key[characters[i]] >= 2){
        answer.push(")")
      } else {
        answer.push("(")
      }
    }
    return answer.join("")
}

duplicateEncode("Success")