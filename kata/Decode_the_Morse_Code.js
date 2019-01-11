// decode a string in morse code. Given library of morse code symbols called Morse_Code
// 6kyu

decodeMorse = function(morseCode){
    let letters = morseCode.trim().split(" ");
    let decode = [];
    for (var i=0; i<letters.length; i++){
      if (letters[i] === "" && decode[decode.length-1] === " "){
      } else if (letters[i] === ""){
        decode.push(" ");
      }
      else {
        decode.push(MORSE_CODE[letters[i]])
      }
    }
    return decode.join("")
  }