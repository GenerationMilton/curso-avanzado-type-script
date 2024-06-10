//arrays
const prices:(number|string)[] =[1,3,2,2,2, 'as'];
prices.push(1);
prices.push('1');


//tuple
let user:[string, number, boolean];
//user=['milton',15];
//user=['12',15];

//user=[];
//user=['milton'];

user=['milton',12,true];
//desestructurar la tuple

const[username,age]=user;
console.log(username);
console.log(age);
