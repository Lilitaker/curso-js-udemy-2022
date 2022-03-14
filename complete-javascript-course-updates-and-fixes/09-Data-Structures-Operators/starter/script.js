'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

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

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '3:00 pm',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

/* ========================
=== ARRAY DESTRUCTURING ===
=========================== */

//Without destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c); //2 3 4

//With destructuring
const [x, y, z] = arr;
console.log(x, y, z); //2 3 4
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); //Italian Vegetarian

//Switch variables without destructuring (need a temporary variable)
/* const temp = main;
main = secondary;
secondary= temp;
console.log(main, secondary); //Vegetarian Italian */

//Switch variables with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); //Vegetarian Italian

//Receive 2 return values from a function and destructure the result
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); //Garlic Bread Pizza

//Nested destructuring
const nested = [2, 4, [5, 6]];
const [u, w] = nested;
const [s, , t] = nested;
console.log(u, w); //2 4
console.log(s, t); //2 [5, 6]

const [i, , [j, k]] = nested;
console.log(i, j, k); //2 5 6

//Set default values for the variables

/* const [p, q, r] = [8, 9];
console.log(p, q, r); //8 9 undefind */

const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r); //8 1 1

/* ========================
== OBJECT DESTRUCTURING ===
=========================== */

//Default values
restaurant.orderDelivery({
  time: '10:30 am',
  address: 'Via del Sol, 21',
  mainIndex: 2,
  starterIndex: 2,
}); //Order received! Garlic Bread and Risotto will be delivered Via del Sol, 21 at 10:30 am

restaurant.orderDelivery({
  address: 'Via del Sol, 21',
  starterIndex: 1,
}); //Order received! Bruschetta and Pizza will be delivered to Via del Sol, 21 at 3:00 pm

//Using the names of the object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//Classico Italiano
//{thu: {…}, fri: {…}, sat: {…}}
//(4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

//Creating new variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(name, openingHours, categories);
//Classico Italiano
//{thu: {…}, fri: {…}, sat: {…}}
//(4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

//No setting default value
const { menu1, starterMenu: starters1 = [] } = restaurant;
console.log(menu1, starters1);
//undefined
//(4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//Set default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
//[]
//(4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//Mutating variables
let a1 = 111;
let b1 = 999;
const obj = { a1: 23, b1: 7, c1: 14 };

({ a1, b1 } = obj);
console.log(a1, b1); //23 7

//Nested destructuring - new names
const {
  fri: { open: op, close: cl },
} = openingHours;
console.log(op, cl); //11 23
