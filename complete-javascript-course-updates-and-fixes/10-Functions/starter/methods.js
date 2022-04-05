'use strict';

console.log('============= CALL() METHOD ==============');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({flight:  `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`, name})
  },
};

lufthansa.book(239, 'Liliana Vasquez');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Doesn't work because of the place that this. keyword points to
//book(23, 'Sarah Williams');

//With the call() method the this. keyword works
book.call(eurowings, 23, 'Sarah Williams'); //Sarah Williams booked a seat on Eurowings flight EW23
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper'); //Mary Cooper booked a seat on Lufthansa flight LH239


console.log('============= APPLY() METHOD ==============');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: []
};

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); //George Cooper booked a seat on Swiss Air Lines flight LX583

//Better option in modern JS
book.call(swiss, ...flightData);//George Cooper booked a seat on Swiss Air Lines flight LX583


console.log('============= BIND() METHOD ==============');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams'); //Steven Williams booked a seat on Eurowings flight EW23

/* ================================================= */

//flightNum parameter is set in bookEW23
const bookEW23 = book.bind(eurowings, 23); 

//name is passed as argument when we call the function
bookEW23('Jonas Smith'); //Jonas Smith booked a seat on Eurowings flight EW23
bookEW23('Martha Cooper'); //Martha Cooper booked a seat on Eurowings flight EW23

/* ================================================= */

//With event listeners
lufthansa.planes = 300;
console.log(lufthansa); //{airline: 'Lufthansa', iataCode: 'LH', bookings: Array(3), planes: 300, book: ƒ}
lufthansa.buyplane = function() {
  this.planes++
  console.log(this.planes);
};

lufthansa.buyplane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyplane.bind(lufthansa));

/* ================================================= */

//Partial application

//General function to add tax
const addTax = (rate, value) => value + (value * rate);
console.log(addTax(0.1, 200)); //220

//Specific tax we use in Portugal (preset the rate always)
const addVat = addTax.bind(null, 0.23);
//The line above is like saying:
//addVat = value => value + (value * 0.23);

console.log(addVat(100)); //123
console.log(addVat(23)); //28.29

const addVat1 = addTax.bind(null, 0.23, 300);
console.log(addVat1()); //369

//Above example with high-order function (return function)
function addTaxRate(rate) {
  return function (value) {
    return value + (value * rate);
  }
}

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100)); //123
console.log(addVat2(23)); //28.29