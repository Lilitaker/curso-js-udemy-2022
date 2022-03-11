'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

/* ===================== REFACTORIZADO ===================== */
/* ====================== CÓDIGO FINAL ===================== */

/*=================*/
/*====FUNCTIONS====*/
/*=================*/
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
}

const changeBackColor = function (backColor) {
	document.querySelector('body').style.backgroundColor = backColor;
}

const changeWidthNumber = function (width) {
	document.querySelector('.number').style.width = width;
}

/*=================*/
/*====EVENTS====*/
/*=================*/
document.querySelector('.check').addEventListener('click', function () {
  
	const guess = Number(document.querySelector('.guess').value);

	//When there isn't input
	if (!guess) {
		displayMessage('🚩 No number!');
	//When player wins
	} else if (guess === secretNumber) {
		displayMessage('🎉Correct number!');
		displayNumber(secretNumber);
		changeBackColor('#60b347');
		changeWidthNumber('30rem');

		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
	//When guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
			score--;
			displayScore(score);
		} else {
			displayMessage('💔You lost the game!');
			displayScore(0);
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;
	displayNumber('?');
	document.querySelector('.guess').value = '';
	displayMessage('Start guessing...');
	displayScore(score);
	changeBackColor('#222');
	changeWidthNumber('15rem');
});


/* =================== SIN REFACTORIZAR ===================== */
/* ==================== CÓDIGO INICIAL ===================== */

/* let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    //When there isn't input
    if(!guess) {
        document.querySelector('.message').textContent = '🚩 No number!';
    //When player wins
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉Correct number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    //When guess is too high
    }else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = '💔You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    //When guess is too low
    }else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📉Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = '💔You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}) */
