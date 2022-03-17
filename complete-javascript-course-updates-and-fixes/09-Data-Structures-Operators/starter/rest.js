'use strict';

console.log('======REST PATTERN AND REST OPERATOR======');

//SPREAD because on RIGHT side of =
const array2 = [1, 2, ...[3, 4]];
console.log(array2); //[1, 2, 3, 4]

//REST because on LEFT side of =
const [a2, b2, ...others] = [1, 2, 3, 4, 5];
console.log(a2, b2, others); //1 2 [3, 4, 5]

/* 
Functions part
*/

const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
    //console.log(numbers);
  };
  
  //Console sum
  add(2, 3); //5
  add(5, 3, 7, 2); //17
  add(8, 2, 5, 3, 2, 1, 4); //25
  
  /* //Console numbers 
  add(2, 3); //[2, 3]
  add(5, 3, 7, 2); //[5, 3, 7, 2]
  add(8, 2, 5, 3, 2, 1, 4); //[8, 2, 5, 3, 2, 1, 4] */
  
  const num = [23, 5, 7];
  add(...num); //35 <-- Spread operator
  

/* ============================================================ */

const restaurant2 = {
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

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
    console.log(`Your pizza was made with ${mainIngredient}, ${otherIngredient[0]}, ${otherIngredient[1]} and ${otherIngredient[2]}.`);
  }

};

/* 
Destructuring part
*/

const [pizza, , risotto, ...otherFood] = [
  ...restaurant2.mainMenu,
  ...restaurant2.starterMenu,
];
console.log(pizza, risotto, otherFood); //Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//Objects
const { sat, ...weekDays } = restaurant2.openingHours;
console.log(weekDays); //{thu: {…}, fri: {…}}

//Rest parameters
restaurant2.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
//mushrooms
//['onion', 'olives', 'spinach']
//Your pizza was made with mushrooms, onion, olives and spinach.

restaurant2.orderPizza('mushrooms');
//mushrooms
//[]
//Your pizza was made with mushrooms, onion, olives and spinach.
