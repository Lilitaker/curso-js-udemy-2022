'use strict';

console.log('============== ARRAY METHODS ===============');

console.log('SLICE() METHOD');

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); //['c', 'd', 'e']
console.log(arr.slice(2, 4)); //['c', 'd']
console.log(arr.slice(-2)); //['d', 'e']
console.log(arr.slice(-1)); //['e']
console.log(arr.slice(1, -2)); //['b', 'c']
console.log(arr.slice()); //['a', 'b', 'c', 'd', 'e']
console.log([...arr]); //['a', 'b', 'c', 'd', 'e']

console.log('SPLICE() METHOD');

//console.log(arr.splice(2)); //['c', 'd', 'e']
arr.splice(-1); //['e']
arr.splice(1, 2); //['b', 'c']
console.log(arr); //['a', 'd']

console.log('REVERSE() METHOD');

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //['f', 'g', 'h', 'i', 'j']
console.log(arr2); //['f', 'g', 'h', 'i', 'j']

console.log('CONCAT() METHOD');

const letters = arr.concat(arr2);
console.log(letters); //['a', 'd', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]); //['a', 'd', 'f', 'g', 'h', 'i', 'j']

console.log('JOIN() METHOD');
console.log(letters.join(' - ')); //a - d - f - g - h - i - j

console.log('AT() METHOD');
const arr3 = [23, 11, 64];
console.log(arr3[0]); //23
console.log(arr3.at(0)); //23

//Getting last array element
console.log(arr3[arr3.length - 1]); //64
console.log(arr3.slice(-1)[0]); //64
console.log(arr3.at(-1)); //64

//Works for strings as well
console.log('jonas'.at(0)); //j
console.log('jonas'.at(-1)); //s


console.log('MAP() METHOD');

const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementsUSD = movements1.map(function(mov){
  return Math.trunc(mov * eurToUsd);
})

console.log(movementsUSD);

//Arrow function version
const movementsUSD2 = movements1.map(mov => Math.trunc(mov * eurToUsd));

console.log(movementsUSD2);

//For...of version (different philosophy)
const movementsUSDfor = [];
for(const mov of movements1){
  movementsUSDfor.push(Math.trunc(mov * eurToUsd));
}
console.log(movementsUSDfor);

//Map with some logic
const movementsDescription = movements1.map((mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);

console.log(movementsDescription);