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

showWinMessage();
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
  console.log('add move');
}

//game timer -https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
let sec = 0;
function timer(val) {
  return  val > 9 ? val : "0" + val;
}
setInterval(function(){
  document.getElementById("seconds").innerHTML=timer(++sec%60);
  document.getElementById("minutes").innerHTML=timer(parseInt(sec/60,10));
}, 1000);

function stopTimer(){ //finish this
  clearInterval();
}

function resetBoard(){
  [flippedCard, lockBoard] = [false, false];
  [firstCard,secondCard] = [null, null];
}

function showWinMessage(){

}

function gameOver(){
  
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
    
    timer = 0;
    moves = 0;
    cards.forEach(cardReset => cardReset.classList.remove('flip'));
    shuffle();
    cards.forEach(card => card.addEventListener('click', flipCard));
  }, 500);
  console.log("reset button clicked"); // timer reset will go here
}




  






 