'use strict';

console.log(23 === 23.0); //true

//Problems with precise calculation in JS
console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false

//Type Coercion --> Convert a string into a number
console.log(Number('23')); //23
console.log(+'23'); //23

//Parsing
console.log(Number.parseInt('30px')); //30
console.log(Number.parseInt('e23')); //NaN