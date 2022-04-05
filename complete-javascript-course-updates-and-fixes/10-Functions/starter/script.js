'use strict';

console.log('=========DEFAULT PARAMETERS=========');

const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  //ES5 (Short-circuiting evaluation)
  //numPassenger = numPassenger || 1;
  //price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); //{flightNum: 'LH123', numPassenger: 1, price: 199}
createBooking('LH123', 2, 800); //{flightNum: 'LH123', numPassenger: 2, price: 800}
createBooking('LH123', 5); //{flightNum: 'LH123', numPassenger: 5, price: 995}
createBooking('LH123', undefined, 150); //{flightNum: 'LH123', numPassenger: 1, price: 150}

console.log('====PASSING ARGUMENTS = PRIMITIVES VS. REFERENCE====');

const flight = 'LH123';
const jonas = {
  name: 'Jonas Smith',
  passport: 5453131351345,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH897';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 5453131351345) {
    console.log('Check in!');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flight, jonas); //Check in!
console.log(flight); //LH123
console.log(jonas); //{name: 'Mr. Jonas Smith', passport: 5453131351345}

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas); //random number
checkIn(flight, jonas); //Wrong passport!

console.log('=======FUNCTIONS ACCEPTING CALLBACK FUNCTIONS=======');

//Generic functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
  //return with no spaces and lower case
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
  //return with spaces between words and the first word in upper case
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
/* 
Original string: JavaScript is the best!
Transformed string: JAVASCRIPT is the best!
Transformed by: upperFirstWord
*/

transformer('JavaScript is the best!', oneWord);
/* 
Original string: JavaScript is the best!
Transformed string: javascriptisthebest!
Transformed by: oneWord
*/

const high5 = function () {
  console.log('🖐');
};

['Jonas', 'Martha', 'Adam'].forEach(high5); //(3)🖐

console.log('========= FUNCTIONS RETURNING FUNCTIONS ==========');

//Regular function
/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}; */

//Arrow function
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeter = greet('Hey');
greeter('Jonas'); //Hey Jonas
greeter('Steven'); //Hey Steven

greet('Hello')('Lili'); //Hello Lili