/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, 
otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
    let index 
    for(let i in arr) {
      if (!func(arr[i])) {
        console.log("Removing " + arr[i])
        arr.splice(i,1,-1)
      }
      else {
        console.log("Returning slice starting from " + i)
        return arr.slice(i)
      }
    }
    return arr.filter(num=>num!=-1)
  }
  
  console.log(dropElements([1, 2, 3, 7, 4], function(n) { return n > 3 }))