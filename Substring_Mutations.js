/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
  
    arr[0] = arr[0].toLowerCase().split("").sort().join("")
    arr[1] = arr[1].toLowerCase().split("").sort().join("")
    console.log("First: " + arr[0] + " Second: " + arr[1])
    console.log(arr[0].slice(0,arr[1].length) == arr[1])
  
    for (let letter of arr[1].split("")) {
      if (!arr[0].split("").includes(letter)) {
        return false
      }
    }
  
    return true
  }
  
  mutation(["hello", "hey"]);