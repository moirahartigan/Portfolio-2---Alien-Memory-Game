// define variables
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false; //used to check if card has already been clicked 
let lockBoard = false; // used to lock the board until each set of cards are finished are finished before selecting the next two
let firstCard, secondCard; //Used to check for cards match

/*
onclick function for cards, add flip class for css effects
code taken form https://marina-ferreira.github.io/tutorials/js/memory-game/ and adapted
*/
function flipCard() {
this.classList.add('flip'); //if valid, flips card using css class

if (!hasFlippedCard){
    // first click
    hasFlippedCard = true;
    firstCard = this; //stores this as first card
   } else {
       //second card
       hasFlippedCard = false;
       secondCard = this; 
       
       checkforMatch();
   }
}

function checkforMatch(){
  //  do they match? - if not thay will be flipped back
  if (firstCard.dataset.image ===
    secondCard.dataset.image) {
    disableCards(); 
    } else {
    unflipCards();  
    } 
}

function disableCards(){
// if its a match the eventlistener is disabled
firstCard.removeEventListener('click', flipCard);  
secondCard.removeEventListener('click', flipCard); 
}

function unflipCards(){
 // then if its not a match the flipclass is removed
 setTimeout(() => {
    firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');  
  }, 900);      
}

cards.forEach(card => card.addEventListener('click', flipCard));        





          
 // let shuffleCard = [monster-1, monster-1, monster-2, monster-2, monster-3, monster-3, monster-4, monster-4, 
   // monster-5, monster-5, monster-6, monster-6, monster-7, monster-7, monster-8, monster-8];

    //function shuffleImages() {
    //for (let i = 0; i < arr.length; i++)
    //shuffleCard.push(arr[i], arr[i]);
 // }       
          




 