/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

function permAlone(str) {
    let letters = str.split("")
    let perms = perm(letters)
    let count = 0
  
    for (let perm of perms) {
      let good = true
      for (let i=1; i<perm.length; i++) {
        if (perm[i] == perm[i-1]) {
          good = false
        }
      }
      if (good) {
        count+=1
      }
    }
    console.log("Good perm count: " + count)
    return count;
}
  
  permAlone('aab');
  
  function perm(xs) {
    let ret = [];
  
    for (let i = 0; i < xs.length; i = i + 1) {
      let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
  
      if(!rest.length) {
        ret.push([xs[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([xs[i]].concat(rest[j]))
        }
      }
    }
    return ret;
  }