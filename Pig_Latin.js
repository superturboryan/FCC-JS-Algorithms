/*
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

If a word does not contain a vowel, just add "ay" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    
    // If the first letter is a vowel, add way
    if (hasVowel(str[0])) {
        return str+"way"
    }
    // If the word does not contain a vowel, add ay
    else if (!hasVowel(str)) {
        return str+"ay"
    }
    // Get first consonant or consonant cluster
    let cluster = getFirstConsonantCluster(str)
    // Chop cluster's size off beginning of string
    str = str.substring(cluster.length-2,str.length) // Investigate why the beginning is -2 offset
    // Return chopped string + cluster + ay
    return str+cluster+"ay"
}

function hasVowel(elem) { // String input
    let letters = elem.split("")
    for (letter of letters) {
        // If any of the letters are vowels return true
        if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
            return true
        }
    }
    // If we still have found a vowel, return false
    return false
}

function getFirstConsonantCluster(elem) {
    let letters = elem.split("")
    let cluster = ""
    for (letter of letters) {
        if (letter != "a" && letter != "e" && letter != "i" && letter != "o" && letter != "u") {
            cluster += letter
        }
        else if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
            return cluster
        }
    }
    //We have to return if we don't find any clusters at all
    return cluster
}

translatePigLatin("schwartz")
  
console.log(translatePigLatin("california"))

console.log(getFirstConsonantCluster("california"))

// TRICK TO CHECKING UPPERCASE VS LOWERCASE
// if (character == character.toUpperCase()) {
//     alert ('upper case true');
//    }
// if (character == character.toLowerCase()){
// alert ('lower case true');
// }
