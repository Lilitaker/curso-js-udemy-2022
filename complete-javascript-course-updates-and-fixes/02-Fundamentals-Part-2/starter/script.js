'use strict';

function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

let colombiaDescription = describeCountry("Colombia", 57000000, "Bogota");
let peruDescription = describeCountry("Peru", 40000000, "Lima");
let spainDescription = describeCountry("Spain", 35000000, "Madrid");

console.log(colombiaDescription, peruDescription, spainDescription);

//Regular function - Declarated
function percentageOfWorld1(country, population){
    let calc = population / 7900 * 100;
    return `${country} has ${population} million people, so it's about ${calc}% of the world population.`
}

let percentageCol = percentageOfWorld1("Colombia",57000000);

console.log(percentageCol);

//Arrow function
let percentageOfWorld2 = (country, population) => {
    let calc = population / 7900 * 100;
    return `${country} has ${population} million people, so it's about ${calc}% of the world population.`
}

console.log(percentageOfWorld2("Ecuador", 25000000));


//One function calling another
const cutPieces = function(fruit) {
    return fruit * 4;
}

const fruitProcessor = function(apples, oranges){
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

let describePopulation = (country, population) => {
    let percentage = percentageOfWorld1(country, population)
    return percentage;
}

console.log(describePopulation("Bolivia", 21000000));


//Arrays
let populations = [23000000, 30000000, 50000000, 45000000];
console.log(populations.length === 4);

let percentages = [percentageOfWorld1("Colombia", populations[0]), percentageOfWorld1("Ecuador", populations[1]), percentageOfWorld1("Peru", populations[2]), percentageOfWorld1("Bolivia", populations[3])];

console.log(percentages);

let friends = ["juan", "michael", "pedro"];

//Methods
let l23 = friends.pop();

console.log(friends); //[ 'juan', 'michael' ]
console.log(l23); //pedro
console.log(friends); //[ 'juan', 'michael' ]

//Objects

let myCountry = {
    country: "Colombia",
    capital: "Bogotá",
    languaje: "Spanish",
    population: 55000000,
    neighbours: ["Ecuador", "Brasil", "Venezuela", "Peru", "Panama"]
}


//Dot vs. Bracket Notation

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.languaje}-speaking-people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.    `);

myCountry.population += 2000000;
console.log(myCountry.population);

myCountry["population"] -= 2000000;
console.log(myCountry.population);


//Object method (.this)
const jonas = {
	firstName: "Jonas",
	lastName: "Smith",
	birthYear: 1991,
	job: "teacher",
	friend: ["Paul", "Marcus", "Daniel"],
	hasDriverLicense: true,

	calcAge: function(){
        this.age = 2022 - this.birthYear;
		return this.age;
	},

    getSummary: function(){
        this.summary = `${this.firstName} ${this.lastName} was born in ${this.birthYear}. He is a ${this.calcAge()}-year-old ${this.job}. His friends are ${this.friend[0]}, ${this.friend[1]} and ${this.friend[2]}. He has ${this.hasDriverLicense ? "a" : "no"} driver license.`;
        return this.summary;
    }

};

jonas.calcAge();
jonas.getSummary();

console.log(jonas.age); //31
console.log(jonas.summary); //Jonas Smith was born in 1991. He is a 31-year-old teacher. His friends are Paul, Marcus and Daniel. He has a driver license.


//for loop
for(let voter = 1; voter <= 20; voter++){
    console.log(`Voter number ${voter} is currently voting`);
}


//looping arrays
const jonasArray = [
    "Jonas",
    "Smith",
    2022 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true
];

const types = [];

for(let i = 0; i < jonasArray.length ; i++){
    //Reading from jonasArray
    console.log(jonasArray[i], typeof jonasArray[i]);

    //Filling types array
    //option 1
    //types[i] = typeof jonasArray[i];
    //option 2
    types.push(typeof jonasArray[i])
}

console.log(types); //[ 'string', 'string', 'number', 'string', 'object', 'boolean' ]

/* ========================================================== */

let years = [1999, 2007, 1960, 2020];
let ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2022 - years[i]);
}

console.log(ages); //[ 23, 15, 62, 2 ]

/* ========================================================== */

/* 
function percentageOfWorld1(country, population){
    let calc = population / 7900 * 100;
    return `${country} has ${population} million people, so it's about ${calc}% of the world population.`
}
*/

let countries1 = ["Colombia", "Peru", "Bolivia", "Ecuador"];
let populations1 = [1000, 4050, 332, 83];
let percentage2 = [];

for(let i = 0; i < populations1.length; i++){
    const perc = percentageOfWorld1(countries1[i], populations1[i]);
    percentage2.push(perc);
}

console.log(percentage2);



//Continue and break
for(let i = 0; i < jonasArray.length ; i++){
    //Only strings
    if(typeof jonasArray[i] !== "string") continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

for(let i = 0; i < jonasArray.length ; i++){
    //break with number
    if(typeof jonasArray[i] === "number") break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}


//looping backwards

const liliana = [
    "Liliana",
    "Vasquez",
    2022 - 1988,
    "developer",
    ["Jenny", "Claudia", "Catalina"],
];

for(let i = liliana.length - 1; i >= 0; i--){
    console.log(liliana[i]);
}


//Loops in Loops

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`-----Starting exercise ${exercise}`);

    for(let rep = 1; rep < 5; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

/* ========================================================== */

let listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"]
]

for (let i = 0; i < listOfNeighbours.length; i++){
    for (let y = 0; y < listOfNeighbours[i].length; y++){
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}



//WHILE loop

for(let repet = 1; repet <= 10; repet++){
    console.log(`FOR: Lifting weight repetition ${repet}`);
}

let repet = 1;
while(repet <= 10){
    console.log(`WHILE: Lifting weight repetition ${repet}`);
    repet++
}

/* ===================================================== */

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log("Loop is about to end");
}

/* ===================================================== */

/* 
let countries1 = ["Colombia", "Peru", "Bolivia", "Ecuador"];
let populations1 = [1000, 4050, 332, 83];
let percentage2 = [];

for(let i = 0; i < populations1.length; i++){
    const perc = percentageOfWorld1(countries1[i], populations1[i]);
    percentage2.push(perc);
}

console.log(percentage2);
*/

let percentage3 = [];
let i = 0;

while(i < populations1.length){
    const perc = percentageOfWorld1(countries1[i], populations1[i]);
    percentage3.push(perc);
    i++;
}

console.log(percentage3);