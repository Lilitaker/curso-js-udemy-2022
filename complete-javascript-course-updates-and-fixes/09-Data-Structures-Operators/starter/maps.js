'use strict';

console.log('======= MAPS =======');

const rest = new Map();

//Add an element 
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze Italy');
rest.set(2, 'Lisbon, Portugal');

console.log(rest); //Map(3) {'name' => 'Classico Italiano', 1 => 'Firenze Italy', 2 => 'Lisbon, Portugal'}

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest); 
/* Map(8) {'name' => 'Classico Italiano', 1 => 'Firenze Italy', 2 => 'Lisbon, Portugal', 'categories' => Array(4), 'open' => 11, 'close' => 23, true => 'We are open', false, 'We are closed'} */

//Read data from a Map()
console.log(rest.get('name')); //Classico Italiano
console.log(rest.get(true)); //We are open
console.log(rest.get('true')); //undefined

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //We are open

//Checking if there's an element or not
console.log(rest.has('categories')); //true

//Delete an element
rest.delete(2);
console.log(rest); // 2, 'Lisbon, Portugal' --> Deleted

//Delete all elements
/* rest.clear();
console.log(rest); //Map(0) {size: 0} */

//Getting the size
console.log(rest.size); //7

//Use arrays as keys
rest.set([1, 2], 'Test');
console.log(rest.get([1, 2])); //undefined --> Different place in memory than the array of rest

const arr1 = [1, 2];
rest.set(arr1, 'Test');
console.log(rest.get(arr1)); //Test

//Use objects as keys
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get(document.querySelector('h1'))); //heading
console.log(rest);

//Create a Map() without using the Set() method
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!']
]);

console.log(question);

//Loops - quiz app
console.log(question.get('question'));
for(const [key, value] of question) {
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
/* const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer)); */


//Convert object to map

const weekdays2 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours3 = {
  [weekdays2[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays2[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays2[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(Object.entries(openingHours3)); //(3) [Array(2), Array(2), Array(2)]
const hoursMap = new Map(Object.entries(openingHours3));
console.log(hoursMap); //Map(3) {'thu' => {…}, 'fri' => {…}, 'sat' => {…}}


//Convert map to an array
console.log([...question]); //Same as using entries()
console.log([...question.keys()]); //['question', 1, 2, 3, 'correct', true, false]
console.log([...question.values()]); //['What is the best programming language in the world?', 'C', 'Java', 'Javascript', 3, 'Correct!', 'Try again!']
