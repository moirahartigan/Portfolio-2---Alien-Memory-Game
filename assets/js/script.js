// define variables
const cards = document.querySelectorAll('.memory-card');


let flippedCard = false; //used to check if card has already been clicked 
let lockBoard = false; // used to lock the board until each set of cards are finished are finished before selecting the next two
let firstCard, secondCard; //Used to check for cards match

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

if (!flippedCard){
    // The first card clicked
    flippedCard = true;
    firstCard = this; //stores this as first card
   
    return;
}

//The second card clicked
flippedCard = false;
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
       
  

function pairMatch(){
// if its a match the eventlistener is disabled
firstCard.removeEventListener('click', flipCard);  
secondCard.removeEventListener('click', flipCard); 

resetBoard();
}

function noMatch(){
    lockBoard = true; // if no match, board is locked until cards are flipped back
 // then if its not a match the flipclass is removed
 setTimeout(() => {
    firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
  
  resetBoard();
  }, 900);  
  
}

function resetBoard(){
  [flippedCard, lockBoard] = [false, false];
  [firstCard,secondCard] = [null, null];
}

// Card shuffle
function shuffle() {
  cards.forEach(cards => {
      let randomPosition = Math.floor(Math.random() * 16);
      cards.style.order = randomPosition;
  })

};

function reset(){
  setTimeout(() => {
    flippedCard = false;
    [firstCard, secondCard] = [null, null];
    pairs = 8;
    timer = 0;
    moves = 0;
    cards.forEach(cardReset => cardReset.classList.remove('flip'));
    shuffle();
    cards.forEach(card => card.addEventListener('click', flipCard));
  }, 500);
  console.log("reset button clicked"); // timer reset will go here
}


// move counter & game timer 

function moveCounter() {
  moves++; //counts a move when 2 cards are selected
  Counter.innerHTML = moves;
  console.log('move counter to start');
}




 