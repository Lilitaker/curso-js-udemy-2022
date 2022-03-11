'use strict';

/* ========================= 
========= VARIABLES ========
============================ */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

/* ========================= 
========= FUNCTIONS ========
============================ */

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/* ========================= 
=========== EVENTS =========
============================ */

//Al clickear cualquier botón aparece la card
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//Al clickear la 'X' o fuera de la card, se ocultan los elementos correspondientes
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function(event){
	if(event.key === "Escape" && !modal.classList.contains('hidden')){
    closeModal();
  }
});
