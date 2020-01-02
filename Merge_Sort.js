/*
Another common intermediate sorting algorithm is merge sort. 
Like quick sort, merge sort also uses a divide-and-conquer, recursive methodology to sort an array. 
It takes advantage of the fact that it is relatively easy to sort two arrays as long as each is sorted in the first place. 
But we'll start with only one array as input, so how do we get to two sorted arrays from that? 
Well, we can recursively divide the original input in two until we reach the base case of an array with one item. 
A single-item array is naturally sorted, so then we can start combining. 
This combination will unwind the recursive calls that split the original array, eventually producing a final sorted array of all the elements. 
The steps of merge sort, then, are:

1) Recursively split the input array in half until a sub-array with only one element is produced.

2) Merge each sorted sub-array together to produce the final sorted array.

Merge sort is an efficient sorting method, with time complexity of O(nlog(n)). This algorithm is popular because it is performant and relatively easy to implement.

Instructions: 
Write a function mergeSort which takes an array of integers as input 
and returns an array of these integers in sorted order from least to greatest. 
A good way to implement this is to write one function, for instance merge, 
which is responsible for merging two sorted arrays, and another function, for instance mergeSort, 
which is responsible for the recursion that produces single-item arrays to feed into merge. 

*/

function merger(arr1, arr2) {
    let i = 0,
      j = 0,
      mergedArr = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] > arr2[j]) mergedArr.push(arr2[j++]);
      else mergedArr.push(arr1[i++]);
    }
    while (i < arr1.length) {
      mergedArr.push(arr1[i++]);
    }
    while (j < arr2.length) {
      mergedArr.push(arr2[j++]);
    }
    return mergedArr;
  }
  function mergeSort(array) {
    //Array of length 1 is sorted so we return the same array back
    if (array.length == 1) return array;
  
    //Break down the array to half from middle into left and right
    let middle = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, middle));
    let right = mergeSort(array.slice(middle));
  
    //Return the merged sorted array
    return merger(left, right);
  }