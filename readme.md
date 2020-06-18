# _Pig Dice_

#### _A simple dice game of chance and strategy, 6/17/20_

#### By **Evgeniya Chernaya and James Henager**

## Description

Two players take turns rolling dice. For every number rolled other than one, that number is added to the player's score. They will have the option to hold, or roll again. If a player rolls a 1, their turn is over and their accumulated score for that turn is lost. If a player chooses to hold, they will keep the score they have accumulated. The first player to reach 100 points is the winner!

## Setup/Installation Requirements

* https://janecher.github.io/pig-dice/index.html
* Clone/download repository (click green button "clone or download" and click downlown ZIP or use "git clone https://github.com/janecher/pig-dice.git" command in your terminal)
* Open index.html file in the browser

## Specifications

* _The program should 
    - Input Example: Two players information is on the screen and Player 1 have option to start the game.
    - Output Example: Player1, Score: 0, _Button_: Roll dice; Player2, Score: 0

* _The program should allow a player to roll the dice
    - Input Example: Player rolls the dice by clicking "Roll dice" button
    - Output Example: The number from 1-6 appears between two players in the middle middle of the screen

* _The program should add the number on the dice to the score (number 2-6).
    - Input Example: 5
    - Output Example: Score = Score + 5

* _The program should switch players if the number on the dice is 1 and lose temporary score (the score player get during his turn)
    - Input Example: number 1 on dice, player1 score: 23 (total) + 5 (temporary)
    - Output Example: player1 -> player2, player1 score: 23

* _The program should switch players if the player push hold button and add temporary score to the total score
    - Input Example: player1, score: 25 + 10
    - Output Example: player2 turn to play; player1 score: 35

* _The program should stop if any player got 100 score
    - Input Example: player1 score: 102
    - Output Example: player1 wins the game

## Known Bugs

_No known bugs_

## Technologies Used

HTML, CSS, JavaScript, Bootstrap, jQuery

### License

*This is licensed under the MIT license*

Copyright (c) 2020 **Evgeniya Chernaya** & **James Henager**