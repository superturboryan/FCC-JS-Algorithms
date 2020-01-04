function frankenSplice(arr1, arr2, n) {
  
    let result = []
    result = result.concat(arr2.slice(0,n))
    result = result.concat(arr1)
    result = result.concat(arr2.slice(n,arr2.length))
    return result
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))