function binaryAgent(str) {

    // Split string on spaces
    var newBin = str.split(" ");
    // Make var to hold all converted words/string from above array
    var binCode = [];
    // Loop through each of the strings found in arr of strings
    for (let i = 0; i < newBin.length; i++) {
        // Use parseInt with base 2 (binary) to make string from char code string passed
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
      }
    // We don't need to add spaces when returning the joined array
    console.log(binCode.join(""))
    return binCode.join("");
}
    
    binaryAgent(
        `01000001 01110010 01100101 01101110 00100111 01110100 
        00100000 01100010 01101111 01101110 01100110 01101001 
        01110010 01100101 01110011 00100000 01100110 01110101 
        01101110 00100001 00111111`)