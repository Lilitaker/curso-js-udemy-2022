'use strict';

const weekdays1 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours2 = {
  //ES6 enhanced object literals (compute property names)
  [weekdays1[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays1[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays1[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant6 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours2,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }

};

console.log('====== LOOPING OBJECTS ======');

console.log('PROPERTY NAMES');

console.log(Object.keys(openingHours2));

//Find out the length of the properties in an object
const properties = Object.keys(openingHours2);
let openStr = `We are open on ${properties.length} days: `;
console.log(openStr); //We are open on 3 days

//Loop over the object properties
for (const day of properties) {
  openStr += `${day}, `
}
console.log(openStr); //We are open on 3 days: thu, fri, sat, 


console.log('PROPERTY VALUES');

const values = Object.values(openingHours2);
console.log(values);

console.log('PROPERTY PAIRS - ENTIRE OBJECTS');

const entries = Object.entries(openingHours2);
console.log(entries);

//key = element / open, close = property, value
//Using destructuring
for(const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
/* 
On thu we open at 12 and close at 22
On fri we open at 11 and close at 23
On sat we open at 0 and close at 24
*/