/*
The next sorting method we'll look at is insertion sort. 
This method works by building up a sorted array at the beginning of the list. 
It begins the sorted array with the first element. 
Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. 
It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. 
This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function insertionSort which takes an array of integers as input 
and returns an array of these integers in sorted order from least to greatest.
*/

function insertionSort(array) {
    let answer = []
    for (let num of array) {
        insert(num,answer)
    }
    return answer
  }
  
  insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  function insertionSort(array) {
  let answer = []
  for (let num of array) {
    insert(num,answer)
  }
  return answer
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))

function insert(element, array) {
  array.splice(locationOf(element, array) + 1, 0, element);
  return array;
}

function locationOf(element, array, start, end) {
  start = start || 0;
  end = end || array.length;
  var pivot = parseInt(start + (end - start) / 2, 10);
  if (end-start <= 1 || array[pivot] === element) return pivot;
  if (array[pivot] < element) {
    return locationOf(element, array, pivot, end);
  } else {
    return locationOf(element, array, start, pivot);
  }
}