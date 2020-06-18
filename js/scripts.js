// Business Logic for Game

function Game (player1, player2, dice) {
  this.player1 = player1;
  this.player2 = player2;
  this.dice = dice;
}

// Business Logic for Player

function Player (scoreTotal, scoreTemp) {
  this.scoreTotal = scoreTotal;
  this.scoreTemp = scoreTemp;
}

Player.prototype.play = function(dice) {
  dice.roll();
  if(dice.side === 1) {
    this.scoreTemp = 0;
  } else {
    this.scoreTemp += dice.side;
  }
}

Player.prototype.hold = function () {
  this.scoreTotal += this.scoreTemp;
}

// Business Logic for Dice

function Dice (side) {
  this.side = side;
}

Dice.prototype.roll = function() {
  this.side = Math.floor((Math.random() * 6) + 1);
}

// User Interface
function showInfo(totalScore1, totalScore2, turnScore1, turnScore2, diceSide1, diceSide2) {
  $("div#total-score-1").text(totalScore1);
  $("div#total-score-2").text(totalScore2);
  $("div#turn-score-1").text(turnScore1);
  $("div#turn-score-2").text(turnScore2);
  $("div#dice1").text(diceSide1);
  $("div#dice2").text(diceSide2);
}

function chooseDiceImage (side) {
  switch (side) {
    case (1):
      return "<img src='one.jpeg'>";
    case (2):
      return "<img src='two.jpeg'>";
    case (3):
      return "<img src='three.jpeg'>";
    case (4):
      return "<img src='four.jpeg'>";
    case (5):
      return "<img src='five.jpeg'>";
    case (6):
      return "<img src='six.jpeg'>";   
  }
}

function buttonRollDice (btnPlay1, btnPlay2, btnHold, player, dice1, dice2) {
  player.play(dice1);
  player.play(dice2);
  if (dice1.side === 1 || dice2.side === 1) {
    $(btnPlay1).hide();
    $(btnHold).hide();
    $(btnPlay2).show();
  } else {
    $(btnHold).show();
  }
}

function buttonHold (btnPlay1, btnPlay2, btnHold, player) {
  player.hold();
  player.scoreTemp = 0;
  $(btnPlay1).hide();
  $(btnHold).hide();
  $(btnPlay2).show();
}


function gameStop(total1, total2, player1, player2) {
  if (total1 >= 20) {
    $("div.row").replaceWith("<p class='win'> Player 1 Wins!!! </p>" + "<p>Player1 Score: " + total1 + "</p><p>Player2 Score: " + player2.scoreTotal + "</p>");
  } else if (total2 >= 20) {
    $("div.row").replaceWith("<p class='win'> Player 2 Wins!!! </p>" + "<p>Player1 Score: " + player1.scoreTotal + "</p><p>Player2 Score: " + total2 + "</p>");
  }
}

$(document).ready(function(){
  let dice1 = new Dice();
  let dice2 = new Dice();
  let player1 = new Player(0, 0);
  let player2 = new Player(0, 0);
  let scoreWin1;
  let scoreWin2;

  $("button#play1").click(function(){
    buttonRollDice ("#play1", "#play2", "#hold1", player1, dice1, dice2);
    scoreWin1 = player1.scoreTotal + player1.scoreTemp;
    showInfo(player1.scoreTotal, player2.scoreTotal, player1.scoreTemp, player2.scoreTemp, dice1.side, dice2.side);
    gameStop(scoreWin1, scoreWin2, player1, player2);
  });
  $("button#play2").click(function(){
    buttonRollDice ("#play2", "#play1", "#hold2", player2, dice1, dice2);
    scoreWin2 = player2.scoreTotal + player2.scoreTemp;
    showInfo(player1.scoreTotal, player2.scoreTotal, player1.scoreTemp, player2.scoreTemp, dice1.side, dice2.side);
    gameStop(scoreWin1, scoreWin2, player1, player2);
  });
  $("button#hold1").click(function(){
    buttonHold("#play1", "#play2", "#hold1", player1);
    showInfo(player1.scoreTotal, player2.scoreTotal, player1.scoreTemp, player2.scoreTemp, dice1.side, dice2.side);
  });
  $("button#hold2").click(function(){
    buttonHold("#play2", "#play1", "#hold2", player2);
    showInfo(player1.scoreTotal, player2.scoreTotal, player1.scoreTemp, player2.scoreTemp, dice1.side, dice2.side);
  });
});
