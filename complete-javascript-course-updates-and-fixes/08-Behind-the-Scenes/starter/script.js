'use strict';

/*=========================
=====Execution Context===== 
==========================*/
const name = 'Jonas';

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};

function second(x, y) {
  var c = 2;
  return c;
}

const x = first();

console.log(x); //3

/*========================
======The Scope Chain===== 
==========================*/
const myName = 'Jonas';

function firstSentence() {
  const age = 30;

  if (age >= 30) {
    //true
    const decade = 3;
    var millenial = true;
  }

  function secondSentence() {
    const job = 'teacher';
    console.log(`${myName} is a ${age}-old ${job}`);
  }

  secondSentence();
}

firstSentence(); //Jonas is a 30-old teacher

/*========================
====Scoping in practice=== 
==========================*/

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;

      console.log(str); //Oh, and you're a millenial, Jonas

      function add(a, b) {
        return a + b;
      }

      output = 'New Output';
    }

    console.log(millenial); //true
    //console.log(str); error
    console.log(output); //New Output
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
//Jonas, you are 46, born in 1991
//Oh, and you're a millenial, Steven

/*================= 
====Hoisting=== 
==================*/

//Variables
console.log(num1); //undefined
//console.log(num2); //error
//console.log(num3); //error

var num1 = 10;
let num2 = 20;
const num3 = 30;

//Functions
console.log(num4()); //2
//console.log(num5()); //error
//console.log(num6()); //error

function num4() {
  return 1 + 1;
}

let num5 = function () {
  return 2 + 2;
};

let num6 = () => 3 + 3;

var w = 1;
let y = 2;
const z = 3;
//console.log(w === window.w); //true
//console.log(y === window.y); //false
//console.log(z === window.z); //false

/*================= 
====This keyword=== 
==================*/

console.log(this); //Window object

//Arrow function
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear); //57
    console.log(this); //Window object
};

calcAgeArrow(1980);

//Regular function
const calcAge1 = function (birthYear) {
    console.log(2037 - birthYear); //46
    console.log(this); //undefined

    //Arrow function inside a regular function
    const calcAgeArrow1 = birthYear => {
        console.log(2037 - birthYear); //57
        console.log(this); //undefined
    };
    calcAgeArrow1(1980);
};

calcAge1(1991);

//Method
const lili = {
    year: 1988,
    calcAge: function() {
        console.log(this); //{year: 1988, calcAge: ƒ}
        console.log(2037 - this.year); //49
    }
}

lili.calcAge();

//Method borrowing

//Example 1
const matilda = {
    year: 2017,
}

matilda.calcAge = lili.calcAge; //{year: 2017, calcAge: ƒ}
matilda.calcAge(); //20

//Example 2
const laura = {
    firstName: "Laura",
    year: 1988,
    calcAge: function() {
        console.log(this); //{year: 1988, calcAge: ƒ}
        console.log(2037 - this.year); //49
    },
	greet: () => {
		console.log(this); //Window object
        console.log(`Hey ${this.firstName}`); //Hey undefined
	} 
};

laura.greet();

/*======================
====Arguments keyword=== 
========================*/

const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
}

addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
}

//addArrow(2, 5, 8, 12); //error


/*========================
==Primitives vs. Objects== 
==========================*/

//Primitive types
let age = 30;
let oldAge = age; //30
age = 31; 
console.log(age); //31
console.log(oldAge); //30

//Reference types
const me = {
  name: "Lili",
  age: 33
}

const friend = me; 
friend.age = 27;

console.log('Friend:', friend); //Friend: { name: 'Lili', age: 27 }
console.log('Me:', me); //Me: { name: 'Lili', age: 27 }

//How we can fix it
//Copying objects
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Simon']
}

const jessicaMarried = Object.assign({}, jessica);
jessicaMarried.lastName = 'Davis';

jessicaMarried.family.push('Mark');

console.log('Before marriage:', jessica); //Before marriage: { firstName: 'Jessica', lastName: 'Williams', age: 27, family: [ 'Simon', 'Mark' ]}
console.log('After marriage:', jessicaMarried); //After marriage: { firstName: 'Jessica', lastName: 'Davis', age: 27, family: [ 'Simon', 'Mark' ]}

