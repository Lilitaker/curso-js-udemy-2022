'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Liliana Vasquez',
  movements: [500, -1000, 1250, -50, 900, 450],
  interestRate: 0.5,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

console.log('============== BANKIST APP ===============');

// Display accounts movements (step 1)
// Add sort feature (step 10)
const displayMovements = function (movements, sort = false) {
  // Hide fixed movements of html file
  containerMovements.innerHTML = '';

  //Create a copy of the array (step 10)
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  //Change movements for movs (step 10)
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Calculate balance of the account (step 3)
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// Calculate incomes, outgoings and interests (step 4)
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, dep) => acc + dep, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outgoing = Math.abs(
    acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0)
  );
  labelSumOut.textContent = `${outgoing}€`;

  // The bank pays out an interest each time that there's a deposit. It only pays an interest if it is at least one euro
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// Create usernames for login (step 2)
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner //creating a new property for each account
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

// Update UI (step 7...refactored)
const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);

  //Display balance
  calcDisplayBalance(acc);

  //Display summary
  calcDisplaySummary(acc);
};

// ================ Event handlers =====================

// Event handler for the login button (step 5)
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  //Input user
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  //Input PIN
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display message and UI
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }!`;
    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Call the function to update UI
    updateUI(currentAccount);
  }
});

// Event handler for transfering (step 6)
btnTransfer.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  //Get the value of transfer inputs
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  //Clear input fields
  inputTransferTo.value = inputTransferAmount.value = '';

  //Conditions to send the money
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    //Doing the transfer: Add to the giver the outgoing and to receiver the income
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Call the function to update UI
    updateUI(currentAccount);
  }
});

// Event handler ask for a loan (step 9)
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }

  //Clear input field
  inputLoanAmount.value = '';
});

// Event handler to close account (step 8)
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    //Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }

  //Clear input fields
  inputCloseUsername.value = inputClosePin.value = '';

  //Setting start login message
  labelWelcome.textContent = 'Log in to get started';
});

//Event handler to sort the values (step 11)
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault;
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/* ======================= EXTRA EXCERCISES =========================== */
/* =================== NOT NECESSARY FOR THE APP =========================== */

//Example of Array.from() --> Create an array using values from the UI
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
  /* const movementsUI2 = [...document.querySelectorAll('.movements__value')]; */
});

/* === Array methods practice === */

//Sum of all accounts
const bankDepositSum = accounts
  .flatMap(acc => acc.movements) //Get an array of all accounts movements
  .filter(mov => mov > 0) //Filter just the positive movements
  .reduce((sum, cur) => sum + cur, 0); //Sum of all movements
console.log(bankDepositSum); //28280

//How many deposits have been in the bank with at least 1000
// --> Option 1
/* const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log(numDeposits1000); //7 */

// --> Option 2
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000); //7

//Create an object to see the deposits and withdrawals
const { deposits1, withdrawals1 } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      /* Ask if the current value is a deposit or a withdrawal */

      //Option 1
      /* cur > 0 ? (sums.deposits1 += cur) : (sums.withdrawals1 += cur); */

      //Option 2
      sums[cur > 0 ? 'deposits1' : 'withdrawals1'] += cur;
      return sums;
    },
    { deposits1: 0, withdrawals1: 0 }
  );

console.log(deposits1, withdrawals1); //28280 - 8390;

//Convert any string to a title case --> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice and great title')); //This Is a Nice and Great Title
console.log(convertTitleCase('this is a LONG title but not too long')); //This Is a Long Title but Not Too Long
console.log(convertTitleCase('and here is another title with an EXAMPLE')); //And Here Is Another Title with an Example
