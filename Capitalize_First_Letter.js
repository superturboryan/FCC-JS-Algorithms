function titleCase(str) {
    
    let newStr = []
    
    for (let word of str.split(" ")) {
        console.log(word)
      let capital = word.substring(0,1).toUpperCase()
      capital += word.substring(1,word.length).toLowerCase()
      newStr.push(capital)
    }
    
    return newStr.join(" ")
  }

  let str = "ryaN fOrsyth CaN code"

  console.log(titleCase(str))