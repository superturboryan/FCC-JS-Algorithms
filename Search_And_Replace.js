/*
Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
  
    let words = str.split(" ")
    let indexToReplace = words.indexOf(before)
    if (indexToReplace != -1) {
      if (isUpperCase(words[indexToReplace][0])) {
        after = makeFirstLetter(true,after)
      }
      words.splice(indexToReplace,1,after)
    }
    console.log(words.join(" "))
    return words.join(" ")
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  
  function isUpperCase(elem) {
    return elem == elem.toUpperCase()
  }
  
  function makeFirstLetter(capital,str) {
    let letters = str.split("")
    let firstLetter = letters[0]
    if (capital) {
      firstLetter = firstLetter.toUpperCase()
    }
    else {
      firstLetter = firstLetter.toLowerCase()
    }
    letters.splice(0,1,firstLetter)
    return letters.join("")
  }