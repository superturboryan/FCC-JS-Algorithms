/*
Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
    let result = []
    let i = 0
    for (i; i<arr.length+1;i+=size) {
      console.log(result)
      if (arr[i] == null) {return result}
      result.push(arr.slice(i,i+size))
    }
    console.log(result)
    return result
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)