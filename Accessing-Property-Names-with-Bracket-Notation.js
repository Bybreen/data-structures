// The function, checkInventory, which receives a scanned item as an argument. 
// Return the current value of the scannedItem key in the foods object. 
// You can assume that only valid keys will be provided as an argument to checkInventory.

let foods = {
apples: 7,
oranges: 10,
plums: 12,
grapes: 30,
bananas: 4,
strawberries: 18
};

function checkInventory(scannedItems) {

return foods[scannedItems];
}

console.log(checkInventory("apples"));
