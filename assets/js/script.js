/**
 * GENERAL VARIABLES
 */
 const cards = document.querySelectorAll('.memory-card');
 const moveContainer = document.querySelector(".moves");
 const instructions = document.getElementById('instructions');
 const modal = document.getElementById('modal');
 const timeContainer = document.querySelector(".timer");
 const MAX_MATCH = 8;
 const modalBtn = document.getElementById("modalBtn");
 const closeBtn = document.getElementById("closeBtn");
 
 let gameOn = false;
 let perfectMatch = 0;
 let flippedCard = false; //used to check if card has already been clicked 
 let lockBoard = false; // used to lock the board until each set of cards are finished are finished before selecting the next two
 let firstCard, secondCard; //Used to check for cards match
 let moves = 0;
 let finalTime = "";
 
 //events
 cards.forEach(card => card.addEventListener('click', flipCard)); // listen for card flips
 shuffle();
 
 modalBtn.addEventListener('click', showInstructions); // listen for open click of how to play instructions modal
 closeBtn.addEventListener('click', closeInstructions); // listen for close instructions button
 
 
 function showInstructions() {
     instructions.style.display = "block";
 }
 
 function closeInstructions() {
     instructions.style.display = "none";
 }
 
 /*
 onclick function for cards, add flip class for css effects
 code taken form https://marina-ferreira.github.io/tutorials/js/memory-game/ and adapted  
 */
 function flipCard() {
     if (!gameOn) {
         gameOn = true;
         timer();
     }
     if (lockBoard) return; // return is lockBoard is true so the rest of the function wont be executed
     if (this === firstCard) return;
 
     this.classList.add('flip'); //if valid, flips card using css class
 
     if (!flippedCard) { // The first card clicked
 
         flippedCard = true;
         firstCard = this; //stores this as first card
 
         return;
 
     }
 
     secondCard = this; //The second card clicked
 
     checkCardMatch();
 }
 
 /*
 checking if firstCard & secondCard 'data-id' are a match
 initial code taken form https://marina-ferreira.github.io/tutorials/js/memory-game/ and adapted
 */
 function checkCardMatch() {
     let isMatch = firstCard.dataset.image === secondCard.dataset.image;
     if (isMatch) perfectMatch += 1;
 
     if (isMatch) pairMatch();
     else noMatch();
 
     if (perfectMatch === MAX_MATCH) winGame();
 }
 
 // matched cards will be disabled for clicks once they are flipped
 function pairMatch() {
 
     firstCard.removeEventListener('click', flipCard);
     secondCard.removeEventListener('click', flipCard);
     resetBoard();
 }
 
 // if no match, board is locked until cards are flipped back
 function noMatch() {
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
 moves = 0;
 moveContainer.innerHtml = 0;
 
 function addMove() {
     moves++;
     moveContainer.innerHTML = moves;
 }
 
 //timer
 let time;
 let minutes = 0;
 let seconds = 0;
 let timeStart = false;
 timeContainer.innerHTML = "Time " + minutes + " : " + seconds;
 
 function timer() {
     time = setInterval(function() {
         seconds++;
         if (seconds === 59) {
             minutes++;
             seconds = 0;
         }
         timeContainer.innerHTML = "Time " + minutes + " : " + seconds;
     }, 1000);
 }
 
 function stopTime() {
     clearInterval(time);
 }
 
 //cards are reset after each round
 function resetBoard() {
     [flippedCard, lockBoard] = [false, false];
     [firstCard, secondCard] = [null, null];
 }
 
 
 function winGame() {
     stopTime();
     showWinMessage();
 }
 
 
 // Win message pop up 
 function showWinMessage() {
     modal.style.display = "block";
     finalTime = timeContainer.innerHTML;
     // showing moves and time on modal
     document.getElementById("finalMove").innerHTML = moves;
     document.getElementById("totalTime").innerHTML = finalTime;
     reset();
 
 
 }
 // when the user clicks the (x) To close modal
 window.onclick = function(event) {
     if (event.target.id == 'close') {
         document.getElementById('modal').style.display = "none";
     }
 };
 
 
 // Card shuffle
 function shuffle() {
     cards.forEach(cards => {
         let randomPosition = Math.floor(Math.random() * 16);
         cards.style.order = randomPosition;
     });
 
 }
 
 // New Game Button 
 function reset() {
     setTimeout(() => {
         flippedCard = false;
         [firstCard, secondCard] = [null, null];
         stopTime();
         gameOn = false;
         timeStart = false;
         seconds = 0;
         minutes = 0;
         timeContainer.innerHTML = "Timer 0:00";
         moves = 0;
         moveContainer.innerHTML = 0;
         perfectMatch = 0;
         cards.forEach(cardReset => cardReset.classList.remove('flip'));
         shuffle();
         cards.forEach(card => card.addEventListener('click', flipCard));
     }, 500);
 
 }