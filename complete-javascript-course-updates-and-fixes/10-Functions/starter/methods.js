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

