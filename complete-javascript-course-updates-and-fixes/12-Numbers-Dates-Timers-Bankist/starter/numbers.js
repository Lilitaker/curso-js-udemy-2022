'use strict';

console.log(23 === 23.0); //true

//Problems with precise calculation in JS
console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false

/* =============== Number Objects ================== */

//Type Coercion --> Convert a string into a number
console.log(Number('23')); //23
console.log(+'23'); //23

//Parsing
console.log(Number.parseInt('30px')); //30
console.log(Number.parseInt('e23')); //NaN
console.log(Number.parseInt('30px', 10)); //30
console.log(Number.parseInt('e23', 10)); //NaN

console.log(Number.parseInt('2.5rem')); //2
console.log(Number.parseFloat('2.5rem')); //2.5

//NaN - Check if value is NaN
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false --> String
console.log(Number.isNaN(+'20X')); //true
console.log(Number.isNaN(23 / 0)); //false --> Infinity

//Finite - Best way to check if a value is a number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20X')); //false
console.log(Number.isFinite(23 / 0)); //false

//Check if value is an integer
console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23 / 0)); //false

/* ================== Math methods =====================*/

//Square root
console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(8 ** (1 / 3)); //2

//Max number
console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, '23', 11, 2)); //23
console.log(Math.max(5, 18, '23px', 11, 2)); //NaN
console.log(Math.max()); //-Infinity
console.log(Math.max(-5, 10)); //10
console.log(Math.max(-5, -10)); //-5
console.log(Math.max(1.5, 2.5)); //2.5

//Min number
console.log(Math.min(5, 18, 23, 11, 2)); //2
console.log(Math.min(5, 18, 23, 11, '2')); //2
console.log(Math.min(5, 18, '23px', 11, 2)); //NaN
console.log(Math.min()); //-Infinity
console.log(Math.min(-5, 10)); //-5
console.log(Math.min(-5, -10)); //-10
console.log(Math.min(1.5, 2.5)); //1.5

//PI
console.log(Math.PI); //3.141592653589793
console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.1592653589793

//Random
console.log(Math.random() * 6); //Random number (between 0 and 1) multiplied by 6

//Trunc
console.log(Math.trunc(Math.random() * 6)); //A random integer number among 0 and 6 (exclusive)
console.log(Math.trunc(Math.random() * 6) + 1); //A random integer number among 1 and 6 (inclusive)

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20)); //Random number between 10 (exclusive) and 20 (inclusive)

//Rounding integers
console.log(Math.trunc(33.3)); //23
console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); //24
console.log(Math.ceil(45.3)); //46
console.log(Math.ceil(45.7)); //46
console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.9)); //23
console.log(Math.floor('23.9')); //23
