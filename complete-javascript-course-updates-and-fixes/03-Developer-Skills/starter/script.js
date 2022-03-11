"use strict";

//Jonas code

/* 
Problem 1:
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures on one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
*/

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

/*
Understanding the problem:
- What is the temperature amplitude? Answer: difference between highest and lowest temp
- How to compute max and min temperatures?
- What's a sensor error? And what to do?
*/

/* 
Breaking up into sub-problems: 
- How to ignore errors?
- Find max value in the temp array
- Find min value in the temp array
- Substract min from max and return it
*/
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

/* 
Problem 2:
- Function should now receive 2 arrays of temps
*/

/* 
Understading the problem: 
- With 2 arrays, should we implement functionality twice? No! Just merge two arrays
*/

/* 
Breaking up into sub-problems:
- Merge 2 arrays
*/

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};


/* 
Challenge:

Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

/* 
Understading the problem: 
- Array transformed to string, separated by ...
*/

/* 
Breaking up into sub-problems:
- Transform array into string
- Transform each element to string with °C
- String needs to contain day (index + 1)
- Add ... between elements and start and end of string
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

let printForecast = function(arr){
    let string = '';
    for(let i = 0; i < arr.length; i++){
        string += ` ${arr[i]}°C in ${i + 1} days ...`;
    }
    console.log('...' + string);
}

printForecast(data1);
printForecast(data2);
