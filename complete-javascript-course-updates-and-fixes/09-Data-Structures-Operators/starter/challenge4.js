'use strict';

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea --> All of it!!)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉

Afterwards, test with your own test data!

*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
  const text = document.querySelector('textarea').value; //Get the value out of the text area
  const rows = text.split('\n'); //Array of words

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_'); //Split the two words of each line
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`; //Join both variables 
    console.log(`${output.padEnd(20)}${'✔'.repeat(i + 1)}`); //Add the same spaces after the end of the words, and include a check mark that increases (in one) in each line [that's why we need .entries() and [i, row]]
  }
})