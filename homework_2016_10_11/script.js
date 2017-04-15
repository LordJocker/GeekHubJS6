// Joins all elements of an array into a string.
var arr = ['H', 'e', 'l', 'l', 'o','!'];
arr.join(''); // Hello!


// Creates a new Array from an array-like object.
Array.from('Hello!'); // ['H', 'e', 'l', 'l', 'o', '!']


// Reverses an array in place.
var arr = ['1', '2', '3', '4', '5'];
arr.reverse(); // ['5', '4', '3', '2', '1']


// Removes the first element from an array 
var arr = ['1', '2', '3', '4', '5'];
console.log('Removed element: ' + arr.shift()); // Removed element: 1


// Adds one or more elements to the beginning of an array and returns the
// new length of the array.
var arr = [1, 2];
arr.unshift(0); // 3

console.log(arr); // [0, 1, 2]


// Modifies Array by removing the specified number of elements
// from specified position and inserting new elements. 
// The deleted elements are returned as a new Array object.
var arr = ['One', 2, 3];
arr.splice (2, 1, 'Two', 'Three'); // [2,3]

console.log(arr); // ['One', 'Two', 'Three']