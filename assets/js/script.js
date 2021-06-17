// Wait for the Dom to finish loading before running the game
// get button elements and add event listeners to them

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false; //used to check if card has already been clicked 
let lockBoard = false; // used to lock the board until each set of cards are finished are finished before selecting the next two
let [firstCard, ], secondCard; //Used to check for cards match
/*
onclick function for cards, add flip class for css effects
code taken form https://marina-ferreira.github.io/tutorials/js/memory-game/ and adapted
*/
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

    this.classList.add('flip'); //if valid, flips card using css class

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this; //stores this as first card
        return;
    } 
        //second card
        secondCard = this;
    lockBoard = true;

    checkForMatch();
  }

/*
ternary operator checks if firstCard & secondCard 'data-image' are a match
code taken form https://marina-ferreira.github.io/tutorials/js/memory-game/ and adapted
*/
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}
        
     
      function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    
        resetBoard();
      }
          
        function unflipCards() {
          setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
      
            resetBoard();
          }, 1500);
        }
 /*
resetBoardStatus clears values used in flipcard & checkformatch functions
code taken form https://marina-ferreira.github.io/tutorials/js/memory-game/ and adapted
*/         
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}
          
          (function shuffle() {
            cards.forEach(card => {
              let ramdomPos = Math.floor(Math.random() * 16);
              card.style.order = ramdomPos;
            });
          })();
         


          cards.forEach(card => card.addEventListener('click', flipCard));
 // let shuffleCard = [monster-1, monster-1, monster-2, monster-2, monster-3, monster-3, monster-4, monster-4, 
   // monster-5, monster-5, monster-6, monster-6, monster-7, monster-7, monster-8, monster-8];

    //function shuffleImages() {
    //for (let i = 0; i < arr.length; i++)
    //shuffleCard.push(arr[i], arr[i]);
 // }       
          


// game info -timer 


let moveCounter = 0;
let timer = {
  seconds: 0,
  minutes: 0,
  clearTime: -1
};


//Start time first card is clicked

//Start timer
let startTimer = function() {
    if (timer.seconds === 59) {
      timer.minutes++;
      timer.seconds = 0;
    } else {
      timer.seconds++;
    }

//  reset Clock back to 0 and restart

function resetTimer() {
    clearInterval(timer.clearTime);
    timer.seconds = 0;
    timer.minutes = 0;
    $(".timer").text("0:00");
  
    timer.clearTime = setInterval(startTimer, 1000);
  }

 