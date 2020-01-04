function confirmEnding(str, target) {
    let tLength = target.length
    let sLength = str.length
    if (tLength > sLength) {
      return false
    }
    let suffix = str.substring(sLength-tLength,sLength)
    return (suffix == target)
  }

  console.log(confirmEnding("Bastian", "n"))