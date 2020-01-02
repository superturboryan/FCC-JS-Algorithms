/*

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), 
the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, 
but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), 
you should get the set with elements which are in either of the two the sets but not both 
(C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). 

The resulting array must contain only unique values (no duplicates).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

 */

function sym(args) {
  
    let unique = new Set()
    for (let index in arguments) {
        for (let num of arguments[index]) {
            let copy = Object.assign([],arguments)
            copy.splice(index,1)
            let otherNumbers = flattenArray(copy)
                if (!otherNumbers.includes(num)) {
                    unique.add(num)
                }            
        }
    }

    return [...unique]
}

  let answer = sym([1, 2, 3], [5, 2, 1, 4])

  console.log("Unique: " + answer)


//FLATTEN NESTED ARRAY:
function flattenArray(nested) {
    let returnArray = []
    for (let value of nested) {
        if (typeof(value) == "number") {
            returnArray.push(Number(value))
        }
        else if (typeof(value) == "object") {
    
            let recursionResult = flattenArray(value)
    
            for (let num of recursionResult) {
                returnArray.push(num)
            }
        }
    }
    return returnArray
    }