//  a function, countOnline; use a for...in statement within this function to loop through the users in the users 
//  object and return the number of users whose online property is set to true.

let users = {
Alan: {
age: 27,
online: false,
}

Jeff: {
age: 32,
online: true,
}

Sarah: {
age: 49,
online: false,
}

Ryan: {
age: 19,
online: true,
}
};

function countOnline(obj) {
var count = 0;
for(let name in users) {
if(users[name].online === true) {
count++;
}
}
return count;
}

console.long(countOnline(users));

