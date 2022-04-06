'use strict';

console.log('====== IMMEDIATELY INVOKED FUNCTION ======');

//Immediately invoked function
(function () {
  console.log('This will never run again');
})(); //This will never run again

(() => console.log('This will ALSO never run again'))(); //This will ALSO never run again

//block scope
{
  const isPrivate = 23;
  var notPrivate = 25;
}
//console.log(isPrivate); //ERROR - isPrivate is not defined
console.log(notPrivate); //25