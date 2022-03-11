const country = "Colombia";
const continent = "America";
let population = 51755223;
const isIsland = false;
const language = "Spanish";

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

populationColombia = population / 4;
console.log(populationColombia); //12938805.75
populationColombia++;
console.log(populationColombia); //12938806.75

let populationFinland = 6000000;
console.log(population > populationFinland); //true

let averagePopulation = 3000000;
console.log(population < populationFinland); //false

let description = country + " is in " + continent + ", and its " + population + " million people speak " + language + ".";
console.log(description);

let descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(descriptionNew);

let averageOperation = averagePopulation - population;

if(population > averagePopulation){
    console.log(`${country}'s population is above average.`);
}else{
    console.log(`${country}'s population is ${averageOperation} million below average.`);
}

console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //"617"
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143


/* let numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if(numNeighbours === 1){
    console.log("Only 1 border!");
}else if(numNeighbours > 1){
    console.log("More than 1 border");
}else{
    console.log("No borders");
}
 */

if(language === "English" && population === 50000000 && isIsland === false){
    console.log(`You should live in ${country}`);
}else{
    console.log(`${country} does not meet your criteria :(`);
}

switch(language){
    case "Chinese":
    case "Mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "English":
        console.log("3rd place");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "Arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}


let ternaryOperator = (population > averagePopulation) ? console.log(`${country}'s population is above average.`) : console.log(`${country}'s population is below average.`);

let ternaryBetterOption = console.log(`${country}'s population is ${population > averagePopulation ? 'above' : 'below'} average`);