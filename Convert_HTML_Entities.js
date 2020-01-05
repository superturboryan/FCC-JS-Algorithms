/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  
    let letters = str.split("")
    for (let i in letters) {
      switch (letters[i]) {
        case "&":
          letters[i] = "&amp;"
          break
        case "<":
          letters[i] = "&lt;"
          break
        case ">":
          letters[i] = "&gt;"
          break
        case "\"":
          letters[i] = "&quot;"
          break
        case "'":
          letters[i] = "&apos;"
          break
        default:
          break
      }
    }
    return letters.join("")
  }
  
  console.log(convertHTML("Dolce & Gabbana"))
  convertHTML('Stuff in "quotation marks"')