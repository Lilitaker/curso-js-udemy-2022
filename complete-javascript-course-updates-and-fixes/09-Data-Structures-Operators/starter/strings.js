'use strict';

console.log('======= STRINGS - PART 1 ========');

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); //A
console.log(plane[1]); //3 (string)
console.log(Number(plane[1])); //3 (number)
console.log(airline.length); //16

/* ======== METHODS ========== */

//indexOf & lastindexOf
console.log(airline.indexOf('r')); //6
console.log(airline.lastIndexOf('r')); //10
console.log(airline.indexOf('Portugal')); //8

//slice
console.log(airline.slice(4)); //Air Portugal
console.log(airline.slice(4, 7)); //Air

//indexOf / lastindexOf & slice
console.log(airline.slice(0, airline.indexOf(' '))); //TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal (the + is to eliminate de space before the word)

console.log(airline.slice(-2)); //al
console.log(airline.slice(1, -1)); //AP Air Portuga

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky!');
  }
};

checkMiddleSeat('11B'); //row, column (seat), letter
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//Convertion string primitive to object and vice versa
console.log(new String('Jonas')); //String {'Jonas'} (object)
console.log(typeof new String('Jonas')); //object
console.log(typeof new String('Jonas').slice(1)); //string

console.log('======= STRINGS - PART 2 ========');

//toLowerCase & toUpperCase
console.log(airline.toLowerCase()); //tap air portugal
console.log(airline.toUpperCase()); //TAP AIR PORTUGAL

//Fix capitalization in name
function fixNames(name) {
  const lowerCase = name.toLowerCase();
  const fixed = lowerCase[0].toUpperCase() + lowerCase.slice(1);
  return fixed;
}

console.log(fixNames('liLIAna')); //Liliana
console.log(fixNames('aRTURo')); //Arturo
console.log(fixNames('jOnAS')); //Jonas

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

//Old solution
/* const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); */

//New solution
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); //hello@jonas.io
console.log(email === normalizedEmail); //true

//trimStart & trimEnd
const greeting = '   Hello world!   ';
console.log(greeting.trimStart()); //'Hello world!   '
console.log(greeting.trimEnd()); //'   Hello world!'

//replace && replaceAll
const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS); //288.97$

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); //All passengers come to boarding gate 23. Boarding door 23!
console.log(announcement.replaceAll('door', 'gate')); //All passengers come to boarding gate 23. Boarding gate 23!

//replacing with regular expressions
console.log(announcement.replace(/door/g, 'gate')); //All passengers come to boarding gate 23. Boarding gate 23!

//Booleans = includes / startsWith / endsWith
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320')); //true
console.log(plane1.startsWith('Air')); //true
console.log(plane1.endsWith('neo')); //true

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife'); //You are not allowed on board
checkBaggage('I have Socks and a camera'); //Welcome aboard!
checkBaggage('I got some snacks and a gun for protection'); //You are not allowed on board

console.log('======= STRINGS - PART 3 ========');

//split
console.log('a+very+nice+string'.split('+')); //['a', 'very', 'nice', 'string']
console.log('Liliana Vasquez'.split(' ')); //['Liliana', 'Vasquez']

const [firstName, lastName] = 'Felipe Ortiz'.split(' ');
console.log(firstName, lastName); //Felipe Ortiz

//join
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); //Mr. Felipe ORTIZ

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    /* namesUpper.push(n[0].toUpperCase() + n.slice(1)) */
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis'); //Jessica Ann Smith Davis
capitalizeName('jonas callaway'); //Jonas Callaway

//Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '-')); //+++++++++++Go to gate 23!-----
console.log('jonas'.padStart(25, '+')); //++++++++++++++++++++jonas

const maskCreditCard = function (number) {
  const str = number + ''; //Convertion to string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(31351321)); /* ****1321 */
console.log(maskCreditCard(313513213133541)); /* ***********3541 */
console.log(maskCreditCard('1321354654153418531')); 
/* **************8531 */

//repeat
const message1 = 'Bad weather...All Departures Delayed... ';
console.log(message1.repeat(5));

const planesInLine = function(n){
  console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`);
}

planesInLine(5); //There are 5 planes in line 🛫🛫🛫🛫🛫
planesInLine(3); //There are 3 planes in line 🛫🛫🛫

//Extra exercise

/* 
Convert the const below into this organized format:
 🔴 Delayed Departure from FAO to TXL (11h25)
              Arrival from BRU to FAO (11h45)
   🔴 Delayed Arrival from HEL to FAO (12h05)
            Departure from FAO to LIS (12h30)
*/

const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) { //Array of flights
  const [status, departure, arrival, time] = flight.split(';');
  const statusModif = status.slice(1).replace('_', ' ');
  const timeModif = time.replace('h', ':') 
  const output = `${statusModif.startsWith('Delayed') ? '✈' : ''} ${statusModif} from ${getCode(departure)} to ${getCode(arrival)} (${timeModif})`.padStart(45);
  console.log(output);
}