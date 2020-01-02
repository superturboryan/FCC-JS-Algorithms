/*
Here we will move on to an intermediate sorting algorithm: quick sort. 
Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. 
The array is then partitioned into two subarrays of values less than and greater than the pivot value. 
We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. 
This continues until the base case of an empty or single-item array is reached, which we return. 
The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. 
It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Instructions: Write a function quickSort which takes an array of integers as input 
and returns an array of these integers in sorted order from least to greatest. 

While the choice of the pivot value is important, any pivot will do for our purposes here. 
For simplicity, the first or last element could be used.
*/


//Pivot function returns the fixed pivot point
function pivot(arr, left=0, right = arr.length - 1) { // Item I want to find a position for
  let shift = left;
  for (let i = left + 1; i <= right; i++) {
    // shift's job is to remember the last position that an element was placed in, that was less than the pivot
    //Move all the small elements on the left side
    if (arr[i] < arr[left]) swap(arr, i, ++shift);
  }

  //Finally swapping the last element with the left
  swap(arr, left, shift);
  return shift;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);

    //Recusrively calling the function to the left of the pivot and to the right of the pivot
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

function swap(arr,left,right) {
  let temp = arr[right]
  arr[right] = arr[left]
  arr[left] = temp
}

// test array:
let arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
console.log(`OG array: ${arr}`)
let answer = quickSort(arr)
console.log(`Sorted array: ${answer}`)