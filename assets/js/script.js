// Memory card game logic
const cards = document.querySelectorAll('.memory-card');
let firstClick = false
let cardPair = []

cards.forEach((card) => {
     card.state = 'unclicked'
});

// card flip
function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

// card matching logic
for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click',()=>{
        if (!firstClick){time()}
        firstClick=true;

        if(cards[i].state == 'unclicked'){
            cards[i].style.transform = 'rotateY(180deg)';
            cards[i].state = 'clicked'
            cardPair.push(cards[i]);
            check()
        }else if (cards[i].state == 'clicked'){
            cards[i].style.transform = 'rotateY(0deg)'
            cards[i].state = 'unclicked'
            cardPair=[]
        }
    })
}

function check(){
    if(cardPair.length==2){
        if(cardPair[0].querySelector('img').src==cardPair[1].querySelector('img').src){
            matched()
        }
        else{
            unmatched(cardPair[0],cardPair[1])
        }
    }  
}

function matched() {
  
}



function unmatched() {

}

function time() {
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
    let images = document.querySelectorAll('img')
    let srcs = ['monster-1.jpg','monster-2.jpg','monster-3.jpg','monster-4.jpg','monster-5.jpg','monster-6.jpg','doctor.jpgmonster-7.jpg','monster-8.jpg']
    
    for(let i=srcs.length-1; i>0; i--){
        let j = Math.floor(Math.random() * i)
        let temp = srcs[i]
        srcs[i] = srcs[j]
        srcs[j] = temp
      }
      
      for(let i=0; i<images.length; i++){
          images[i].src = srcs[i]
      }
}


function reset() {

}

