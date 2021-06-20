// define variables
const cards = document.querySelectorAll('.memory-card');


let flippedCard = false; //used to check if card has already been clicked 
let lockBoard = false; // used to lock the board until each set of cards are finished are finished before selecting the next two
let firstCard, secondCard; //Used to check for cards match
let moves = 0;

cards.forEach(card => card.addEventListener('click', flipCard));
shuffle();

/*
onclick function for cards, add flip class for css effects
code taken form https://marina-ferreira.github.io/tutorials/js/memory-game/ and adapted
*/
function flipCard() {
if(lockBoard) return; // return is lockBoard is true so the rest of the function wont be executed
if (this === firstCard) return;

this.classList.add('flip'); //if valid, flips card using css class

if (!flippedCard) {
    // The first card clicked
    flippedCard = true;
    firstCard = this; //stores this as first card
   
    return;
    
}

//The second card clicked
secondCard = this; 

checkCardMatch();
}

/*
ternary operator checking if firstCard & secondCard 'data-id' are a match
initial code taken form https://marina-ferreira.github.io/tutorials/js/memory-game/ and adapted
*/
function checkCardMatch() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;

  isMatch ? pairMatch() : noMatch();
 }
       
// matched cards will be disabled for clicks once they are flipped
function pairMatch(){

firstCard.removeEventListener('click', flipCard);  
secondCard.removeEventListener('click', flipCard); 


resetBoard();
}

// if no match, board is locked until cards are flipped back
function noMatch(){
    lockBoard = true; 
 
 setTimeout(() => {
    firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
  
  resetBoard();
  }, 900); 
  
  // Add move
  addMove();
  
}

//Move counter
const moveContainer = document.querySelector(".moves");
moves = 0;
moveContainer.innerHtml = 0;
function addMove() {
  moves++;
  moveContainer.innerHTML = moves;
}

//timer
const timeCounter = document.querySelector(".timer");
let time;
let minute = 0;
let second = 0;
let timeStart = false;

function timer() {
time = setInterval(function() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  timeCounter.innerHTML = "Timer: " + minutes + "Mins" + seconds + "Secs";
}, 1000);
}

function stopTime(){ 
  clearInterval(time);
};

function resetBoard(){
  [flippedCard, lockBoard] = [false, false];
  [firstCard,secondCard] = [null, null];
};


function winGame() {
  if (pairMatch.length === 2) {
   console.log("i wont the game");
  
  }
};

const modal = document.getElementById('modal');
const close = document.getElementById('close');

function showWinMessage(){
modal.style.display = "block";
}
// when the user clicks the (x) To close modal
window.onclick = function (event) {
  if (event.target.id == 'close') {
    document.getElementById('modal').style.display = "none";
  }
}


// Card shuffle
function shuffle() {
  cards.forEach(cards => {
      let randomPosition = Math.floor(Math.random() * 16);
      cards.style.order = randomPosition;
  })

};

// New Game Button
function reset(){
  setTimeout(() => {
    flippedCard = false;
    [firstCard, secondCard] = [null, null];
    stopTime();
    timeStart = false;
    seconds = 0;
    minutes = 0;
    timeCounter.innerHTML = "Timer: 0:00"
    moves = 0;
    cards.forEach(cardReset => cardReset.classList.remove('flip'));
    shuffle();
    cards.forEach(card => card.addEventListener('click', flipCard));
  }, 500);
  
}




  






 