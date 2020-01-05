/*
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    let result = []
    let word = ""
    console.log(str.split(""))
    for (let letter of str.split("")) {
      
        // If its not a space letter, and its either not uppercase or the word to add is empty
      if (!isSpaceLetter(letter) && (!isUpperCase(letter) || word == "")) {
        word += letter
      }
      else if (isSpaceLetter(letter) && word != "") {
        result.push(word.toLowerCase())
        word = ""
      }
      else if (isUpperCase(letter)) {
        result.push(word.toLowerCase())
        word = letter
      }
      
    }
    result.push(word.toLowerCase())
    return result.join("-")
  }
  
  function isUpperCase(elem) {
    return elem.charCodeAt(0) > 64 && elem.charCodeAt(0) < 91
  }
  
  function isSpaceLetter(elem) {
    return elem == " " || elem == "-" || elem == "_"
  }
  
  console.log(spinalCase('AllThe-small Things'))