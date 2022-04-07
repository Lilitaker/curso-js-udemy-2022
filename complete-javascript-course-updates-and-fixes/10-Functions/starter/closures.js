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

/* Example 1 */
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
console.dir(f);

//Re-assigning f function
h();
f(); //1154
console.dir(f);


/* Example 2 */
const boardPassengers = function(numPassenger, waitTime) {

  const perGroup = numPassenger / 3;

  setTimeout(function(){
    console.log(`We are now boarding all ${numPassenger} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, waitTime * 1000)

  console.log(`Will start boarding in ${waitTime} seconds`);

}

const perGroup = 1000;

boardPassengers(180, 3);