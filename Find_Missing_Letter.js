/*
Missing letters
Find the missing letter in the passed (sorted) letter range and return it. 
Only one character can be missing.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  
    let prev
    for (let letter of str.split("")) {
      if (prev != null && letter.charCodeAt(0) != prev.charCodeAt(0) + 1) {
        return String.fromCharCode(prev.charCodeAt(0) + 1)
      }
      console.log("Prev is now " + letter)
      prev = letter
    }
    return undefined
  }
  
  console.log(fearNotLetter("abce"))