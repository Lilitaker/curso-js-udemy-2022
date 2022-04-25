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
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements2[0]);

console.log(max); //3000

console.log('CHAINING METHODS');

const movements3 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd2 = 1.1;

const totalDepositsUSD = movements3
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd2)
  .reduce((acc, mov) => acc + mov, 0);

console.log(Math.trunc(totalDepositsUSD)); //5522

console.log('FIND() METHOD');

const firstWithdrawal = movements3.find(mov => mov < 0);
console.log(firstWithdrawal); //-400

const accountA = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const accountB = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const accountC = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const accountD = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts1 = [accountA, accountB, accountC, accountD];

const account = accounts1.find(acc => acc.owner === 'Jessica Davis');
console.log(account); //{owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222}

//for...of version
for (const account of accounts1) {
  if (account.owner === 'Jessica Davis') console.log(account);
}
//{owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222}

console.log('SOME() METHOD');

const movements4 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const anyDeposits = movements4.some(mov => mov > 0);
console.log(anyDeposits); //true

//Equality
console.log(movements4.includes(-130)); //true

//Condition
console.log(movements4.some(mov => mov === -130)); //true

console.log('EVERY() METHOD');

console.log(movements4.every(mov => mov > 0)); //false

console.log('SEPARATE CALLBACK');

const deposit = mov => mov < 0;
console.log(movements4.some(deposit)); //true
console.log(movements4.every(deposit)); //false
console.log(movements4.filter(deposit)); //[-400, -650, -130]

console.log('FLAT() METHOD');

const arr4 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr4.flat()); //[1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); //[Array(2), 3, 4, Array(2), 7, 8]
console.log(arrDeep.flat(2)); //[1, 2, 3, 4, 5, 6, 7, 8]

//=========================================================

const accountAA = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000],
  interestRate: 1.2,
  pin: 1111,
};

const accountBB = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790],
  interestRate: 1.5,
  pin: 2222,
};

const accounts2 = [accountAA, accountBB];

//Old way
const accountMovements = accounts2.map(acc => acc.movements);
console.log(accountMovements); //[Array(4), Array(4)]

const allMovements = accountMovements.flat();
console.log(allMovements); //[200, 450, -400, 3000, 5000, 3400, -150, -790]

const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance); //10710

//New way - chaining
const overalBalance1 = accounts2
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance1); //10710

console.log('FLATMAP() METHOD');

const overalBalance2 = accounts2
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance2); //10710

console.log('SORT() METHOD');

//Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); //['Adam', 'Jonas', 'Martha', 'Zach']

//Numbers
const movements5 = [200, 450, -400, 3000, -650, -130, 70, 1300];

//This is not what we want
console.log(movements5.sort()); //[-130, -400, -650, 1300, 200, 3000, 450, 70]

/*This is what we actually want
- return < 0, A - B (keep order)
- return > 0, B - A (switch order) 
*/

// Ascending order
/* Option A
 movements5.sort((a, b) => {
  //The numbers of the conditions don't matter as long as they accomplish the conditions (less/greater than zero)
  if (a > b) return 1;
  if (b > a) return -1;
}); */

//Option B
movements5.sort((a, b) => a - b);

console.log(movements5); //[-650, -400, -130, 70, 200, 450, 1300, 3000]

// Descending order
/* Option A
movements5.sort((a, b) => {
  //The numbers of the conditions don't matter as long as they accomplish the conditions (less/greater than zero)
  if (a > b) return -1;
  if (b > a) return 1;
}); */

//Option B
movements5.sort((a, b) => b - a);

console.log(movements5); //[3000, 1300, 450, 200, 70, -130, -400, -650]

console.log('FILL() METHOD & ARRAY.FROM()');

//Known ways to create arrays
const arr5 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//New ways to create arrays

// A: empty array + fill method
const x = new Array(7);
console.log(x); //[empty × 7]
x.fill(1);
console.log(x); //[1, 1, 1, 1, 1, 1, 1]

const y = new Array(5);
y.fill(1, 3);
console.log(y); //[empty × 3, 1, 1]

const z = new Array(6);
z.fill(1, 3, 5);
console.log(z); //[empty × 3, 1, 1, empty]

arr5.fill(23, 2, 6);
console.log(arr5); //[1, 2, 23, 23, 23, 23, 7]

// B: Array.from
const w = Array.from({ length: 5 }, () => 1);
console.log(w); //[1, 1, 1, 1, 1]

//It is like the callback function of the map() method
const t = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(t); //[1, 2, 3, 4, 5, 6, 7]

const dice = Array.from({ length: 100 }, (_, i) =>
  Math.floor(Math.random(i) * 100)
);
console.log(dice);
