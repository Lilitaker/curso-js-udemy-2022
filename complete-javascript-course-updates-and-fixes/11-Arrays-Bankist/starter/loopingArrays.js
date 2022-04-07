'use strict';

console.log('============== FOR EACH ===============');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function(mov, i, arr) {
  if(mov > 0){
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
})

/* 
  Movement 1: You deposited 200   --> 0: function(200)
  Movement 2: You deposited 450   --> 1: function(450)
  Movement 3: You withdrew 400    --> 2: function(-400)...
  Movement 4: You deposited 3000
  Movement 5: You withdrew 650
  Movement 6: You withdrew 130
  Movement 7: You deposited 70
  Movement 8: You deposited 1300
*/

console.log('== MAP ==');

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(val, key, map) {
  console.log(`${key}: ${val}`);
})

console.log('== SET ==');

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(val, key, map) {
  console.log();
})