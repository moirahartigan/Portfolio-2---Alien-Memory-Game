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
   } else {
       //The second card clicked
       flippedCard = false;
       secondCard = this; 
       
    //  Check if cards match? - if not thay will be flipped back
  if (firstCard.dataset.image === secondCard.dataset.image) {
    disableCards(); 
    } else {
    unflipCards();  
    }     
   }
}

function disableCards(){
// if its a match the eventlistener is disabled
firstCard.removeEventListener('click', flipCard);  
secondCard.removeEventListener('click', flipCard); 

resetBoard();
}

function unflipCards(){
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
   




 