'use strict';

console.log('=========DEFAULT PARAMETERS=========');

const bookings = [];

const createBooking = function(flightNum, numPassenger = 1, price = 199 * numPassenger) {

  //ES5 (Short-circuiting evaluation)
  //numPassenger = numPassenger || 1;
  //price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price
  };
  console.log(booking);
  bookings.push(booking);  
}

createBooking('LH123'); //{flightNum: 'LH123', numPassenger: 1, price: 199}
createBooking('LH123', 2, 800); //{flightNum: 'LH123', numPassenger: 2, price: 800}
createBooking('LH123', 5); //{flightNum: 'LH123', numPassenger: 5, price: 995}
createBooking('LH123', undefined, 150); //{flightNum: 'LH123', numPassenger: 1, price: 150}


console.log('====PASSING ARGUMENTS = PRIMITIVES VS. REFERENCE====');

const flight = 'LH123';
const jonas = {
  name: 'Jonas Smith',
  passport: 5453131351345
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH897'
  passenger.name = 'Mr. ' + passenger.name;
  if(passenger.passport === 5453131351345){
    console.log('Check in!');
  } else {
    console.log('Wrong passport!');
  }
}

checkIn(flight, jonas); //Check in!
console.log(flight); //LH123
console.log(jonas); //{name: 'Mr. Jonas Smith', passport: 5453131351345}


const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(jonas);
checkIn(flight, jonas); //Wrong passport!