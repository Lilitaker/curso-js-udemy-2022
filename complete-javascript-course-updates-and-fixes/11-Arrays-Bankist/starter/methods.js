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
const movementsUSD = movements1.map(function (mov) {
  return Math.trunc(mov * eurToUsd);
});

console.log(movementsUSD);

//Arrow function version
const movementsUSD2 = movements1.map(mov => Math.trunc(mov * eurToUsd));

console.log(movementsUSD2);

//For...of version (different philosophy)
const movementsUSDfor = [];
for (const mov of movements1) {
  movementsUSDfor.push(Math.trunc(mov * eurToUsd));
}
console.log(movementsUSDfor);

//Map with some logic
const movementsDescription = movements1.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescription);


console.log('FILTER() METHOD');

const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Deposits -> Regular function
const deposits = movements2.filter(function (mov) {
  return mov > 0;
});
console.log(deposits); //[200, 450, 3000, 70, 1300]

//For...of version
const depositsFor = [];
for (const mov of movements2) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);
//[200, 450, 3000, 70, 1300]

//Withdrawals -> Arrow function
const withdrawals = movements2.filter(mov => mov < 0);
console.log(withdrawals); //[-400, -650, -130]


console.log('REDUCE() METHOD');

const balance = movements2.reduce(function (acc, mov, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + mov;
}, 0);
console.log(balance); //3840

//For...of version
let balance2 = 0;
for (const mov of movements2) balance2 += mov;
console.log(balance2); //3840

//Arrow function
const balance3 = movements2.reduce((acc, mov) => acc + mov, 0);
console.log(balance3); //3840

//Maximum value
const max = movements2.reduce((acc, mov) => {
  if(acc > mov) {
    return acc;
  }else {
    return mov;
  }    
}, movements2[0]);

console.log(max); //3000


console.log('CHAINING METHODS');

const movements3 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd2 = 1.1;

const totalDepositsUSD = movements3.filter(mov => mov > 0).map(mov => mov * eurToUsd2).reduce((acc, mov) => acc + mov, 0);

console.log(Math.trunc(totalDepositsUSD)); //5522