'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours1 = {
  //ES6 enhanced object literals (compute property names)
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant5 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals (avoid repetition)
  // openingHours1: openingHours1
  openingHours1,

  //ES6 enhanced object literals (avoid function keyword)
  /*  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }, */
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log('====== LOOPING ARRAYS ======');

const menu2 = [...restaurant5.starterMenu, ...restaurant5.mainMenu];

/* //Regular for
for(let i = 0; i < menu2.length; i++){
    console.log(menu2[i]);
} */

//For of - Element
for (const item of menu2) console.log(item);

//For of - Index & element (old way)
/*   for (const item of menu2.entries()) {
    console.log(`${item[0] + 1}: ${item[1]}`);
} */

//For of - Index & element (new way)
for (const [i, el] of menu2.entries()) {
  console.log(`${i + 1}: ${el}`);
}
/* 
1: Focaccia
2: Bruschetta
3: Garlic Bread
4: Caprese Salad
5: Pizza
6: Pasta
7: Risotto
*/

console.log([...menu2.entries()]); //New array which each position contains a new array with the element and the original index of it
/* 
[Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
*/

console.log('====== OPTIONAL CHAINING ======');

//Data exists
if (restaurant5.openingHours1.fri)
  console.log(restaurant5.openingHours1.fri.open); //11

//Data doesn't exist
if (restaurant5.openingHours1 && restaurant5.openingHours1.mon)
  console.log(restaurant5.openingHours1.mon.open); //empty

//Data doesn't exist - with optional chaining
console.log(restaurant5.openingHours1.mon?.open); //Undefined

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant5.openingHours1[day]?.open;
  console.log(
    restaurant5.openingHours1[day]
      ? `On ${day}, we open at ${open}`
      : `We don't open on ${day}`
  );
}

//Methods
//If it exists we call the function
console.log(restaurant5.order?.(0, 1) ?? 'Method does not exist'); //['Focaccia', 'Pasta']

console.log(restaurant5.orderRisotto?.(0, 1) ?? 'Method does not exist'); //Method does not exist

//Arrays
//New way
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty'); //Jonas

//Old way
if (users.length > 0) console.log(users[0].name); else console.log('User array empty'); //Jonas
