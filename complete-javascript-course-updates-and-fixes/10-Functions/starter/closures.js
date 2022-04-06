'use strict';

console.log('========== CLOSURES ==========');

const secureBooking = function () {
  let passengerCount = 0;
  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
};

const booker = secureBooking();

booker(); //1 passengers
booker(); //2 passengers
booker(); //3 passengers

console.dir(booker);

/* ================================================= */

let f;

const g = function() {
  const a = 23;
  f = function() {
    console.log(a * 2);
  }
}

const h = function(){
  const b = 777;
  f = function() {
    console.log(b * 2);
  }
}

g();
f(); //46

//Re-assigning f function
h();
f(); //1154
