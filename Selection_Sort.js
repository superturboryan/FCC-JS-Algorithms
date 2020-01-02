/*
Here we will implement selection sort. 
Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. 
It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. 
It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. 

Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input 
and returns an array of these integers in sorted order from least to greatest.
*/

function selectionSort(array) {
  
    console.log("OG array: " + array)
  
    for (let index in array) {
      if (index == array.length-1) {break}
      let bSlice = array.slice(0,index)
      let slice = array.slice(Number(index) + 1)
      console.log(`Before slice: ${bSlice} After slice: ${slice}`)
      let sliceMin = Math.min.apply(Math,slice) 
      console.log(`Current number: ${array[index]}, checking against min from slice: ${sliceMin}`)
      let sliceMinIndex = slice.indexOf(sliceMin)+Number(index)
      if (sliceMin < array[index]) {
        console.log(`Swapping ${sliceMin} with ${array[index]}`)
        let tmp = array[index]
        array[index] = sliceMin
        array[sliceMinIndex] = tmp
      }
    }
    console.log("Sorted array: " + array)
    return array
  }

selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);