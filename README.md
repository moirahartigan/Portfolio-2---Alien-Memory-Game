# Alien Memory


## Portfolio Project 2: _Interactive Front-End Development_
This is an outer space themed, flip card memory game. The game has been designed for users of any age to play and enjoy.


## Demo

[View the Live Website Here](https://moirahartigan.github.io/Portfolio-2---Alien-Memory-Game/)
<p align ="center"> 
<img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/am-i-responsive.png">
</p>


# Table of Contents
+ [User Experience](#user-experience)
  + [User Stories](#user-stories)
  + [Design](#design)
    + [Colour Scheme](#colour-scheme)
    + [Typography](#typography)   
  + [Wireframes](#wireframes)
+ [Features](#features)
  + [Existing Features](#existing-features)
  + [Future Features](#future-features)
+ [Technologies Used](#technologies-used)
  + [Languages Used](#languages-used)
  + [Frameworks Libraries and Programmes Used](#frameworks-libraries-and-programmes-used)
+ [Testing](#testing)
  + [Validator Testing](#validator-testing)
  + [Lighthouse Testing](#lighthouse-testing)
  + [Responsiveness](#responsiveness)
  + [Testing User Stories](#testing-user-stories)
  + [Problems Encountered](#problems-encountered)
+ [Deployment](#deployment)
  + [Deployment through GitHub Pages](#deployment-through-gitHub-pages)
+ [Credits](#credits)
  + [Code](#code)
  + [Media](#media)
  + [Acknowledgements](#acknowledgements)
  
***
***
# User Experience

## User Stories
* The user should see a grid style game with cards on display - these cards will have a front and back image.
* The user should only be able to click on two cards at a time, to try to find a matched pair.
* The user should activate the timer once the first card has been flipped and when the second card has been flipped a move is logged.
* The user should expect that once the game has been completed, the timer will stop.
* The user should be receiving a message to confirm their win and score at the end of the game when all matched pairs have been found.  
* The user should be able to close the pop up message at the end of the game with a click on the "x" button.
* The user should have the option to reset the game at any time during play.
* By playing this game the user should be able to test their memory skill in a fun environment.


## Design

The goal of this project is to build a fun interactive memory game where the user can replay as many times as they wish. The game has been designed to target a user of any age; from younger children, who may just want to find the matching pair regardless of time and moves taken, right up to adults, who may wish to challenge themselves and attempt to beat their own time and moves taken on each game. For this reason a stopwatch timer was used. The timer counts up the time but there is no time limit applied. This will allow any player to track their time, without the added pressure of the game ending too quickly for perhaps a younger player, who may run out of time.

#### Colour Scheme
The colour scheme was chosen to tie in with the outer space theme, bright vibrant colours were selected to stand out in contract to the background but not to distract the play from the game itself.  
<br>
<br>
<p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/color-scheme.png">
 </p>
 
 #### Typography

The font-families chosen are Permanent Marker and Roboto. The Permanent Marker font gave a relaxed playful feel to the game and as it was the only text on the game page other than the buttons, I wanted the look to be soft. Roboto was used on the instructions page text and the win message modal, as I felt this font complimented the perminant marker font and suited its purpose, on the informational messages.

<br>

## Wireframes

All Wireframes were designed for laptop/computer, iPad/tablet and phone display. 

[Wireframe for Tablet & Mobile- Game Grid](https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/wireframes/wireframe-game-mobile%26tablet.png)    
[Wireframe for Tablet & Mobile- Win Game message](https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/wireframes/wireframe-mobile%26tablet-win-game.png)  
[Wireframe for Desktop - Game Grid](https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/wireframes/wireframe-game-desktop.png)
[Wireframe for Desktop - Win Game Message](https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/wireframes/wireframe-win-game-desktop.png)

***
***

# Features

## Current Features

### <em>Game Grid</em>
The game layout has been kept simple, using a 4x4 style grid, with a total of 16 cards. I felt that this number of cards was the most suitable in order to keep the game responsive for smaller devices. 

<br>

<p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/game-grid.png">
 </p>
 
<br>
<br>

The outer space theme has been used to allow the game to appeal to any age group and it is gender neutral and therefore suitable for anyone to enjoy playing. As the theme is "outer space" - A background of stars in the sky was chosen to give the feeling of being in space and the colour scheme was chosen to mirror this feeling.

<br>
<br>

 <p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/background-screenshot.png">
 </p>
 
 <br>
 
Alien spaceships are used as the card back image, and each spaceship houses an alien character, which is viewed when the card is flipped. The user gets to view the flipped card for just less than a second, if its a match the cards stay turned and if not they are flipped back. Each card was given a light blue border to add color and enhance the appearance of the cards against the nights sky background.

<br>
<br>

<p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/card-front-screenshot.png">
 </p>
 
 <br>
 <br>
 
 The Alien characters were selected to add additional fun and colour to the game once the cards had been flipped. The images were croped to size for consistancy and ease of styling.
 <p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/game-charactors.jpg">
 </p>

<br>
<br>

### <em>Game Information</em>

The game timer is activated once the user flips the first card. The moves tracker counts each match attempt made, the counter starts the count when the second card had been flipped. The timer and move counter were created using lighter colour so as not to distract the user too much from the game itself. 
 
 <br>
 <br>
 
 <p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/game-info.png">
 </p>

### <em>Navigation buttons</em>

A bright orange colour was chosen to highlight the buttons and this colour was matched to the game title for consistancy. The addition of a "How to play" button was not originally planned for this game. However, once I had completed the game, I felt an additional button beside the game reset button, would allow for a more positive user experience, if the user had the option to see the game instructions.

<br>
<br>

<p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/nav%20buttons.png">
 </p>
 
### <em>How To Play Modal </em> 

As mentioned above this feature, of game instructions, was not originally factored into the design, however I felt it had a benefit and a "How To Play" modal was created to simply outline the the play instructions for the user should they wish to view them. This modal was styled in the same way as the win modal with a white background and a dark overlay to hide the game in the background. A call to action button was added here to direct the user to click it, in order to play the game.

 <p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/how-to-play-modal.png">
 </p>
 
 <br>

### <em>Win Modal</em>

Similar in style to the "How To Play" modal, the win message was created again with a bright white background in contrast with the game board. A dark overlay was again applied to hide the game in the background and here the score is displayed for the user to see how many moves were made, and how much time was taken to complete the game. A thumbs up image was included to consider younger users who may not be able to read the message.
 
 <br>
 <br>
 
 <p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/win-modal.png">
 </p>
 
 <br>

A blue "x" was added as a close button on the win message, to allow users to exit the screen and replay the game if they wished. When the "x" is clicked the message dissapears and the game is reset to its starting position and ready for the next play.
 
<br>
 
 <p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/close-button-screenshot.png">
 </p>
 
<br>
 

### <em>Responsive Design</em>

As this is a game, and most likely to be played on mobile devices, the game has been made responsive to allow it to maintain the same grid structure layout in either desktop, tablet, tablet landscape view or mobile view without changing the look of the game. Consideration was given to as many devices as possible.

#### <em>mobile</em>
 <p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/mobile%20responsive.png">
 </p>


#### <em>tablet</em>
<p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/tablet-responsiveness.png">
 </p>
 
 #### <em>tablet - landscape view </em>
<p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/tablet-landscape.png">
 </p>


## Future Features
+ I would like to add sound animation to the game to allow for sound effects to play on click correct flip of card and on completion of game. 
+ I would like to add a mute button to allow the user to control the sound effects.
+ I would like to add a high score leader board to the game to allow the user to add their name and record the moves and time.

***
***

# Technologies Used

## Languages Used
1. [HTML](https://en.wikipedia.org/wiki/HTML5) - To create a basic site.
2. [CSS](https://en.wikipedia.org/wiki/CSS) - To create the look for the game.
3. [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - For the logic of the game. To manipulate the HTML and CSS on the screen..

## Frameworks Libraries and Programmes Used
* [Google Fonts](https://fonts.google.com/) - to import the font-family used in the website: Playfair Display and Courgette.
* [Balsamiq Wireframes](https://balsamiq.com/wireframes/) - for creating Wireframes for initial visual development.
* [Coolors](https://coolors.co/) - to create the colour scheme.
* [picresize](https://picresize.com/) - for editing images used for the game.
* [GitHub](https://github.com/) - used to host repository.
* [GitPod](https://gitpod.io/workspaces) - used to develop project and organise version control.
* [GitHub Pages](https://github.com/moirahartigan/Ms1-Schools-Out-Childcare/settings/pages) - used to deploy the site.
* [Google Chrome Development Tools](https://developers.google.com/web/tools/chrome-devtools) - for testing code on various device sizes during development and debugging.
* [Beautify Tools](https://beautifytools.com/javascript-validator.php) - used to beautify JavaScript code.
* [Lighthouse](https://developers.google.com/web/tools/lighthouse) - for testing code health, accessibility, speed and search engine optimisation..

***
***
# Testing
## Validator Testing
At the completion or heavy editing of sections, I used the following to check my code for syntax errors:


### <em>HTML Validator</em>

  <p align="center">  
 <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/html-validator.png"> 
 </p>
  
### <em>CSS Validator</em>

  <p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/css-validator.png">
 </p>
 
 The JavaScript code was run through Beautify Tools to not only beaufify the code but also to check for any syntax errors.
    
* All pages came back with no errors.
 
## Lighthouse Testing
I used Chromes Lighthouse tools to test the site's performance. I made sure to check both desktop and mobile performances. Below are the screenshots from both tests:
### <em>lighthouse Mobile</em>
![Mobile](https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/lighthouse-mobile.png)
### <em>lighthouse Desktop</em>
![Desktop](https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/readme/lighthouse-desktop.png)

## Responsiveness
Chrome DevTools was used to test the games responsivesness.

The following devices were tested:
- Moto 4
- Galaxy S5
- Pixel 2
- Pixel 2 XL
- iPhone 5/SE
- iPhone 6/7/8
- iPhone 6/7/8 Plus
- iPhone X
- iPad
- iPad Pro
- Surface Duo

## Testing User Stories
* The user should see a grid style game with cards on display - these cards will have a front and back image.
    * Users are automatically greeted with a 4x4 grid style game with a game title and clear navigation buttons.
* The user should only be able to click on two cards at a time, to try to find a matched pair.
    * The user begins the game by flipping the first two cards. The user is not allowed to flip another card until the first two cards have been checked for a match. 
* The user should activate the timer once the first card has been flipped and when the second card has been flipped a move is logged.
    * Once the clicks on the first card the timer is activated.
* The user should expect that once the game has been completed, the timer will stop.
    * Once all matched cards have been flipped the timer stops.
* The user should be receiving a message to confirm their win and score at the end of the game when all matched pairs have been found. 
    * Once the game has been won the user receives their win confirmation via a pop up message and they can see their time and total number of moves taken. 
* The user should be able to close the pop up message at the end of the game with a click on the "x" button.
    * On completion of the game the pop up message can be closed and the game is reset for another game.
* The user should have the option to reset the game at any time during play.
    * At any time during the game the user can click the "Reset Game" button to return all the cards to face down and the timer and move counter are returned to zero. 
* By playing this game the user should be able to test their memory skill in a fun environment.
    * Through the use of colour and animation along no time constraints for possible younger users, the game allows for an enjoyable experience. 

All user stories have been fullfilled from the original targets. The game functions are all working with no issues found.

Furthermore the game has been tested by my younger children whom are aged 5 and 6. They were able to play the game without instruction from an adult which was one of the core goals of the design in terms of accessability for younger players. Other adult friends and family also tried the game on their personal devices to comfirm responsiveness and all reported to have enjoyed playing the game.

## Problems Encountered
* Initially I considered using bootstrap to create my win message modal, however I decided against this, as I have yet to cover this topic on my course work so instead I built the modal in the html file using a simple content division element. Once I had completed this and added the display: none attribute to the css class, the modal failed to appear on the screen.
  * I fixed this issue by removing the bootstrap link from the head section of my html page and the modal appeared as expected.

* The first function written, was the flip card function which is the main play function for the game. As this function interacts with many other functions, I ran into some issues when trying to add additional features, such as the timer and moves counter, which required the flipping of one card for the timer to begin and the flipping of a second card to have the move counter begin. Each time I added this function my flipcard function broke and the game and the cards would not flip when clicked.
   * I fixed this issue by creating a test repo under my github account which allowed me to add and remove a number of options and test various functions together without breaking my existing main play function - it soon became clear that i was placing my call functions in the wrong place which inturn was breaking my game. A link to my test repository can be found [here](https://github.com/moirahartigan/Test-Repo) 

* When the game loaded the timer was starting on page load and not on the first click of a card.
  *  I fixed this by using the .onclick() event in the div for the timer. 

***
***
# Deployment
## Deployment through GitHub Pages
This site was deployed through GitHub Pages using the following steps:

* Log into GitHub.
* Locate the repository.
* Click the "settings" option along the options bar.
* Then go to "Pages" tab in the left hand side sidebar.
* Then under "Source" click the "None" dropdown and select the "Master" branch
* Click the save button.
* The page will update and at the top it will say: "Your site is ready to be published at https://moirahartigan.github.io/Portfolio-2---Alien-Memory-Game/ "

***
***
# Credits
## Code
* [free Code Camp](https://marina-ferreira.github.io/tutorials/js/memory-game/) this tutorial was followed and some JavaScript code was taken and adapted to my game.
* [scotch](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript) inspiration was also taken from this tutorial for the timer function.
* [youtube](https://www.youtube.com/watch?v=28VfzEiJgy4) inspiration was taken from this tutorial.
* [w3schools](https://www.w3schools.com/) was used as a general source of knowledge 
* [MND Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) was used as a general source of knowledge.
* [Stack Overflow](https://stackoverflow.com/) was used to assist during debugging.
* [github docs](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site) was used to create the 404 page.

## Media
* Animated Alien images were cropped from this image from freepik.com.
    * [freepik](https://www.freepik.com/free-vector/monsters-set-cartoon-cute-character-isolated-white-background_13031453.htm#page=1&query=alien&position=10)
  
## Acknowledgements
* I would like to thank the Slack Community for their endless support.
* I would like to thank Kasia Bogucka our class cohort facilitator for her constant assistance and encouragement.
* I would like to thank my children for testing the game and my husband for his support and allowing me some child free time to work on this project.
* Finally, I would like to thank my mentor Oluwafemi Medale for his guidence and feedback throughout this portfolio project.
 

