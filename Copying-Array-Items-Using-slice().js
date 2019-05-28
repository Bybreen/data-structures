// Modify the function using slice() to extract information from the argument array and return a new array that 
// contains the elements 'warm' and 'sunny'.

function forecast (arr) {

let forecast = arr.slice();
return('warm', 'sunny');

console.log(forecast(['cold', 'rainy', 'warm', 'cool', 'thunderstorm']));
