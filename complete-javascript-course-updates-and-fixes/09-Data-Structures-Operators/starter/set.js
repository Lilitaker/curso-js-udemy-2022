'use strict'; 

console.log('======= SET =======');

//Iterable elements
const ordersSet = new Set([
  'Pasta', 
  'Pizza', 
  'Pizza', 
  'Risotto', 
  'Pasta', 
  'Pizza'
]);
console.log(ordersSet); //Set(3) {'Pasta', 'Pizza', 'Risotto'}

console.log(new Set('Jonas')); //{'J', 'o', 'n', 'a', 's'}

//Empty Set()
console.log(new Set()); //{size: 0}

//Getting the size
console.log(ordersSet.size); //3
console.log(new Set('globant').size); //7
console.log(new Set('liliana').size); //4 (no se repiten letras)


//Checking if there's an element or not
console.log(ordersSet.has('Pizza')); //true
console.log(ordersSet.has('Bread')); //false

//Add an element 
ordersSet.add('Garlic Bread', 'toast');
//ordersSet.add('Garlic Bread');
ordersSet.add('Chocolate Donnut');
console.log(ordersSet); //{'Pasta', 'Pizza', 'Risotto', 'Garlic Bread', 'Chocolate Donnut'}

//Delete an element
ordersSet.delete('Risotto');
console.log(ordersSet); //'Pasta', 'Pizza', 'Garlic Bread', 'Chocolate Donnut'}

//Delete all elements
/* ordersSet.clear();
console.log(ordersSet); //Set(0) {size: 0} */

//Loop
for(const order of ordersSet) console.log(order);
/* 
Pasta
Pizza
Garlic Bread
Chocolate Donnut
*/

//Create an array with unique values
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); //['Waiter', 'Chef', 'Manager']
console.log(new Set(staffUnique).size); //3



console.log('======= MAPS =======');

const rest = new Map();

