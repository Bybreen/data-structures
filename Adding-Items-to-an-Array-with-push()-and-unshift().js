// the function, mixedNumbers passes an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned 
// array contains representations of the numbers 1-9 in order.

funciton mixedNumbers(arr) {
arr.push(7, 'VIII', 9);
arr.unshift('I', 2, 'three');

console.log(mixedNumbers(['IV', 5, 'six']));
