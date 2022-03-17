'use strict';

console.log('====== SHORT CIRCUITING (&& AND ||) ======');

console.log('OR OPERATOR');

console.log(3 || 'Jonas'); //3
console.log('' || 'Jonas'); //Jonas
console.log(true || 0); //true
console.log(undefined || null); //null
console.log(undefined || null || '' || 0); //0

console.log('AND OPERATOR');

console.log(3 && 'Jonas'); //Jonas
console.log(0 && 'Jonas'); // 0
console.log('Hello' && 23 && null && 'jonas'); //null
console.log('' && 'Jonas'); //empty string
console.log(true && 0); //0
console.log(undefined && null); //undefined
console.log(undefined && null && '' && 0); //undefined

const restaurant3 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  }
};

console.log('OR OPERATOR RESTAURANT EXAMPLE');

//restaurant3.numGuest = 23; this would be the default value

//With a ternary
const guests = restaurant3.numGuest ? restaurant3.numGuest : 10;
console.log(guests); //10

//Same result and better code with OR operator
const guests2 = restaurant3.numGuest || 15;
console.log(guests2); //15

console.log('AND OPERATOR RESTAURANT EXAMPLE');

//With an if structure
if(restaurant3.orderPizza) {
  restaurant3.orderPizza('mushrooms', 'spinach')
} //mushrooms - ['spinach']

//With AND operator
restaurant3.orderPizza && restaurant3.orderPizza('tomatoes', 'spinach')
//tomatoes - ['spinach']
