<div align ="center">
<h1>Alien Memory</h1>
</div>


<h2 align="center">Portfolio Project 2: _Interactive Front-End Development_</h2>
This is an outer space themed, flip card memory game for users of any age to play and enjoy.
## Demo

[View the Live Website Here](https://moirahartigan.github.io/Portfolio-2---Alien-Memory-Game/)
<p align ="center"> 
<img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/readme/am-i-responsive.png">
</p>


# Table of Contents
+ [User Experience](#user-experience)
  + [User Stories](#user-stories)
  + [Design](#design)
    + [Overall Feel](#overall-feel)
    + [Colour Scheme](#colour-scheme)
    + [Typography](#typography)   
  + [Wireframes](#wireframes)
+ [Features](#features)
  + [Current Features](#current-features)
  + [Future Features](#future-features)
+ [Technologies Used](#technologies-used)
  + [Languages Used](#languages-used)
  + [Frameworks Libraries and Programmes Used](#frameworks-libraries-and-programmes-used)
+ [Testing](#testing)
  + [Validator Testing](#validator-testing)
  + [Lighthouse Testing](#lighthouse-testing)
  + [Problems encountered](#problems-encountered)
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
* The user should be receiving a message to confirm their win at the end of the game when all matched pairs have been found.  
* The user should be able to close the pop up message at the end of the game with a click on the "x" button.
* The user should have the option to reset the game at any time during play.
* By playing this game the user should be able to test their memory skill in a fun environment.


## Design

The goal of this project is to build a fun interactive memory game where the user can replay as many times as they wish. The game has been designed to target a user of any age from younger children, who may just want to find the matching pair regardless of time and moves taken, right up to adults, who may wish to challenge themselves and attempt to beat their own time and moves taken on each game. For this reason a stopwatch timer was used. The timer counts up the time but there is no time limit applied. This can allow any player to tract their time, without adding pressure of the game ending too quickly for perhaps a younger player, who may run out of time.

<p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/readme/game-grid.png">
 </p>
 
<br>
<br>

The game layout has been kept simple, using a 4x4 style grid, with a total of 16 cards. The game has been made responsive to allow it to maintain the same grid structure layout in either desktop, tablet or mobile view without changing the look of the game. 

<br>
<br>

 <p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/readme/mobile%20responsive.png">
 </p>

<br>
<br>

### Overall Feel 

This memory game has been designed to challenge the user within a fun environment. The outer space theme has been used to allow the game to appeal to any age group and it is gender neutral and therefore suitable for anyone to enjoy playing. As the theme is "outer space" - A background of stars in the sky was chosen to give the feeling of being in space and the colour scheme was chosen mirror this feeling.

<br>
<br>

 <p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/readme/background-screenshot.png">
 </p>
 
 <br>
 
Alien spaceships were used as the card back image and each spaceship housed an alien character which was viewed when the card was flipped. Each card was given a light blue border to enhance the appearance of the cards and make them stand out from the dark background.

<br>
<br>

<p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/readme/card-front-screenshot.png">
 </p>
 
 <br>
 <br>
 
 The Alien characters were selected to add additional colour to the game once the cards had been flipped.
 <p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/readme/game-charactors.jpg">
 </p>

<br>
<br>

 The win message was created to be in with a brigtht white background in contrast with the dark background from the game screen. A dark overlay was applied to hide the game in the background and a thumbs up image was included to consider younger users who may not be able to read the message.
 
 <br>
 <br>
 
 <p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/readme/win-modal.png">
 </p>
 
 <br>
 
 Finally a blue "x" was added as a close button on the win message, to allow users to exit the screen and replay the game if they wished. When the "x" is clicked the message dissapears and the game is reset to its starting position and ready for the next play.
 
 <br>
 
 <p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/readme/close-button-screenshot.png">
 </p>
 
<br>

### Colour Scheme
The colour scheme was chosen to tie in with the outer space theme, as the background image is a dark sky, bright vibrant colours were selected to stand out in contract to the background.  
<br>
<br>
<p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/readme/color-scheme.png">
 </p>
 
 <br>
 
A bright orange colour was chosen to highlight the "New Game" button and this colour was matched to the game title for consistancy.

<br>
<br>

<p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/readme/new-game-button.png">
 </p>
 
 <br>
 <br>
 
 The timer and move counter were created using lighter colour so as not to distract the user too much from the game itself.
 
 <br>
 <br>
 
 <p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/readme/timer.png">           <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/readme/moves-counter.png">
 </p>
 
### Typography

The font-families chosen are Permanent Marker and Roboto. I used Roboto on the instructions page text and the win message modal, as I felt this font complimented the perminant marker font and suited its purpose, on the informational messages.

<br>
<br>

## Wireframes

All Wireframes were designed for laptop/computer, iPad/tablet and phone display. 

[Wireframe for Tablet & Mobile- Game View](https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/wireframes/wireframe-game-mobile%26tablet.png)    
[Wireframe for Tablet & Mobile- Win Game message](https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/wireframes/wireframe-mobile%26tablet-win-game.png)  
[Wireframe for Desktop - Game View](https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/wireframes/wireframe-game-desktop.png)
[Wireframe for Desktop - Win Game Message](https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/assets/wireframes/wireframe-win-game-desktop.png) 
***
***
# Features

## Current Features
+ Game instructions are available to the user by clicking the "How to Play" button.
+ When a player starts a game, a displayed stopwatch timer starts and once the player wins the game, the timer stops.
+ A moves tracker, counts each pair match attempt made, and starts the count when the second card had been flipped. 
+ A New Game button allows the user to reset the game board at any time during the game; the timer and the moves counter will return to 0.
+ A win message appears when the user wins the game and matches all 8 pairs.


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
* [jQuery](https://en.wikipedia.org/wiki/JQuery)- to manipulate the HTML and CSS on the screen.
* [Balsamiq Wireframes](https://balsamiq.com/wireframes/)- for creating Wireframes for initial visual development
* [GitHub](https://github.com/) - used to host repository.
* [GitPod](https://gitpod.io/workspaces) - used to develop project and organise version control.
* [GitHub Pages](https://github.com/moirahartigan/Ms1-Schools-Out-Childcare/settings/pages) - used to deploy the site.
* [Google Chrome Development Tools](https://developers.google.com/web/tools/chrome-devtools) - for testing code on various device sizes during development and debugging.
* [Lighthouse](https://developers.google.com/web/tools/lighthouse) - for testing code health, accessibility, speed and search engine optimisation..

***
***
# Testing
## Validator Testing
At the completion or heavy editing of sections, I used the following to check my code for syntax errors:


### <em>HTML Validator</em>

  <p align="center">  
 <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/readme/html-validator.png"> 
 </p>
  
### <em>CSS Validator</em>

  <p align="center">  
  <img src="https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/readme/css-validator.png">
 </p>
    
    
* All pages came back with no errors.
 
## Lighthouse Testing
I used Chromes Lighthouse tools to test the site's performance. I made sure to check both desktop and mobile performances. Below are the screenshots from both tests:
### <em>lighthouse Mobile</em>
![Mobile](https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/readme/lighthouse-mobile.png)
### <em>lighthouse Desktop</em>
![Desktop](https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/blob/master/readme/lighthouse-desktop.png)

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
- Galaxy Fold

## User stories Testing
* Has a grid style game been displayed on page load? 
  * Yes - works as expected.
* Can the user only turn two cards at a time?
  * Yes - works as expected.
* Has the timer been activated once the first card has been flipped and when the second card has been flipped a move is logged?
  * Yes - works as expected.
* Does the timer stop when the game ends?
  * Yes - works as expected.
* Does the user receiving a message to confirm their win at the end of the game when all matched pairs have been found.?
  * Yes - works as expected.
* Does the user receiving a message to confirm their win at the end of the game when all matched pairs have been found.?
  * Yes - works as expected.
* Is the user able to close the pop up message at the end of the game with a click on the "x" button?
  * Yes - works as expected.
* Does the New Game button reset the game at any time during play.
  * Yes - works as expected.
* Is the users memory skill tested with this game?
  * Yes - works as expected.

All user stories have been fullfilled from the original targets. The game functions are all working with no issues found.

## Problems Encountered
* Initially I considered using bootstrap to create my win message modal, however I decided against this and built the modal in the html file using a simple content division element. Once I had completed this and added the display: none attribute to the css class, the modal failed to appear on the screen.
  * I fixed this issue by removing the bootstrap link from the head section of my html page and the modal appeared as expected.

* The first function written, was the flip card function which is the main play function for the game. As this function interacts with many other functions, I ran into some issues when trying to add additional features, such as the timer and moves counter, which required the flipping of one card for the timer to begin and the flipping of a second card to have the move counter begin. Each time I added this function my flipcard function broke and the game and the cards would not flip when clicked.
   * I fixed this issue by creating a test repo under my github account which allowed me to add and remove a number of options and test various functions together without breaking my existing main play function - it soon became clear that i was placing my call functions in the wrong place which inturn was breaking my game.

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
* The Code Institute material was the main source of information used to create this project.
* [w3schools](https://www.w3schools.com/) was used as a general source of knowledge 
* [MND Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) was used as a general source of knowledge.
* [youtube](https://www.youtube.com/watch?v=44axq8Absis) This tutorial was used to learn how to achieve a transparent navigation bar.
* [Stack Overflow](https://stackoverflow.com/) was used to assist during debugging.
* [github docs](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site) was used to create the 404 page.

## Media
* Animated Alien images were cropped from this image from freepik.com
    * [freepik](https://www.freepik.com/free-vector/monsters-set-cartoon-cute-character-isolated-white-background_13031453.htm#page=1&query=alien&position=10)
  
## Acknowledgements
* I would like to thank the Slack Community for their endless support.
* I would like to thank Kasia Bogucka our class cohort facilitator for her constant assistance and encouragement.
* I would like to thank my children for testing the game and my husband for his support and allowing me some child free time to work on this project.
* Finally, I would like to thank my mentor Oluwafemi Medale for his guidence and feedback throughout this portfolio project.
 

