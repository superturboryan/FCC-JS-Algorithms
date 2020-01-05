/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.
The nested array may also contain objects, not just primitives and arrays.
*/

function steamrollArray(arr) {
  
    let result = []
    
    for (let elem of arr) {
      if (!Array.isArray(elem)) {
        result.push(elem)
      }
      else {
        let recursion = steamrollArray(elem)
        for (let elem of recursion) {
          result.push(elem)
        }
      }
    }
    console.log(result)
    return result
  }
  
  steamrollArray([1, [2], {}, [3, [[4]]]]);
  