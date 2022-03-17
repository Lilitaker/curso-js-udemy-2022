'use strict';

console.log('======SPREAD OPERATOR======');

const array1 = [7, 8, 9];

//Without spread operator
const badNewArr = [1, 2, array1[0], array1[1], array1[2]];
console.log(badNewArr); //[1, 2, 7, 8, 9]

//With spread operator
const newArray = [1, 2, ...array1];
console.log(newArray); //[1, 2, 7, 8, 9]
console.log(...newArray); //1 2 7 8 9

//Iterables --> String
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); //['J', 'o', 'n', 'a', 's', ' ', 'S.']

/* =========================================================== */

const restaurant1 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  }

};

//Copy of an array
const mainMenuCopy = [...restaurant1.mainMenu];
console.log(mainMenuCopy); //['Pizza', 'Pasta', 'Risotto']

//Copy of an array and add new elements
const newMenu = [...restaurant1.mainMenu, 'Gnocci'];
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

//Merge two arrays or more together
const menuMerge = [...restaurant1.starterMenu, ...restaurant1.mainMenu];
console.log(menuMerge); //['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

//Multiple elements into a function
const ingredients = [
  /*   prompt(`Let\'s make pasta! Ingredient 1?`),
    prompt(`Ingredient 2?`),
    prompt(`Ingredient 3?`), */
];
console.log(ingredients); //['mushrooms', 'aspargus', 'cheese']

restaurant1.orderPasta(...ingredients); //Here is your delicious pasta with mushrooms, aspargus and cheese

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant1, founder: 'Guiseppe' };
console.log(newRestaurant); //{foundedIn: 1998, name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), …}

const restaurantCopy = { ...restaurant1 };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); //Ristorante Roma
console.log(restaurant1.name); //Classico Italiano
