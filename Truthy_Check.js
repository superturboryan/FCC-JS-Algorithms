/*
Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {

    for (let obj of collection) {
      console.log("Object's type: " + typeof(obj[pre]))
      // If object's value is falsey, undefined, null, or NaN
      if (obj[pre] == false || 
          obj[pre] === undefined ||
          obj[pre] === null || 
          (typeof(obj[pre]) == "number" && isNaN(obj[pre]))) {
        return false
      }
    }
    return true
  }
  
  truthCheck([{"single": "double"}, {"single": NaN}], "single")