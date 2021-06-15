// Wait for the Dom to finish loading before running the game
// get button elements and add event listeners to them

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false; //used to check if card has already been clicked 
let firstCard, secondCard; //Used to check for cards match
/*
onclick function for cards, toggles flip class for css effects
code taken form https://marina-ferreira.github.io/tutorials/js/memory-game/ and adapted
*/
function flipCard() {
    this.classList.add('flip'); //if valid, flips card using css class

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this; //stores this as first card

        return;
    } 
        //second card
        secondCard = this;
        checkForMatch();
    }


function checkForMatch() {
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
      
        isMatch ? disableCards() : unflipCards();
      }
        
     
function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
          
        resetBoard();
        }
          
function unflipCards() {
        lockBoard = true;
          
        setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
          
        resetBoard();
        }, 500);
          }
          
function resetBoard() {
            [hasFlippedCard, lockBoard] = [false, false];
            [firstCard, secondCard] = [null, null];
          }
          
          (function shuffle() {
            cards.forEach(card => {
              let randomPos = Math.floor(Math.random() * 16);
              card.style.order = randomPos;
            });
          })();
          
          cards.forEach(card => card.addEventListener('click', flipCard));


function timer() {
    let secs = 0
    let mins = 0
    let SS
    let MM
    setInterval(()=>{
        secs++
        if(secs==60){secs=0; mins++}

        secs<10?SS=`0${secs}`:SS=`${secs}`
        mins<10?MM=`0${mins}`:SS=`${mins}`
        
        document.querySelector('#time-remaining').innerHTML = `${MM}:${SS}`
    }, 1000)

}
// shuffle the cards and loop through to make the cards appear in different places on each play
// cards can be shuffled on load and restart
function shuffle() {
  
}


function reset() {

}

