'use strict';

const restaurant4 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  
    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
  
    orderPizza: function (mainIngredient, ...otherIngredient) {
      console.log(mainIngredient);
      console.log(otherIngredient);
    }
  };

console.log('====== NULLISH COALESCING OPERATOR ======');

restaurant4.numGuest = 0;

const guestCorrect = restaurant4.numGuest ?? 50;
console.log(guestCorrect); //0

console.log('====== LOGICAL ASSIGNMENT OPERATORS ======');

console.log('OR ASSIGNMENT OPERATOR');

const rest1 = {
    name: 'Capri',
    //numGuests: 20 //OR assignment operator
    numGuests: 0 //NULLISH assignment operator
}

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi'
}

//With OR operator
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//With OR assignment operator
/* rest1.numGuests ||= 10; 
rest2.numGuests ||= 10; 
console.log(rest1); //{name: 'Capri', numGuests: 20}
console.log(rest2); //{name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10} */

console.log('NULLISH ASSIGNMENT OPERATOR');

//With NULLISH assignment operator

rest1.numGuests ??= 10; 
rest2.numGuests ??= 10;

console.log(rest1); //{name: 'Capri', numGuests: 0}
console.log(rest2); //{name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}

console.log('AND ASSIGNMENT OPERATOR');

//With AND operator
/* rest1.owner = rest1.owner && 'Anonymous';
rest2.owner = rest2.owner && 'Anonymous';
console.log(rest1); //{name: 'Capri', numGuests: 0, owner: undefined}
console.log(rest2); //{name: 'La Piazza', owner: 'Anonymous', numGuests: 10} */

//With AND assignment operator
rest1.owner &&= 'Anonymous';
rest2.owner &&= 'Anonymous';

console.log(rest1); //{name: 'Capri', numGuests: 0}
console.log(rest2); //{name: 'La Piazza', owner: 'Anonymous', numGuests: 10}
