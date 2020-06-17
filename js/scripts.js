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
  this.scoreWin = scoreTotal + scoreTemp;
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
function showInfo(totalScore1, totalScore2, turnScore1, turnScore2, diceSide) {
  $("div#total-score-1").text(totalScore1);
  $("div#total-score-2").text(totalScore2);
  $("div#turn-score-1").text(turnScore1);
  $("div#turn-score-2").text(turnScore2);
  $("div#diceResult").text(diceSide);
}

function gameStop(total1, total2) {
  if (total1 >= 20) {
    $("div.row").replaceWith("<p class='win'> Player 1 Wins!!! </p>" + "<p>");
  } else if (total2 >= 20) {
    $("div.row").replaceWith("<p class='win'> Player 2 Wins!!! </p>");
  }
}

$(document).ready(function(){
  let dice = new Dice();
  let player1 = new Player(0, 0);
  let player2 = new Player(0, 0);
  let scoreWin1;
  let scoreWin2;
  $("button#play1").click(function(){
    player1.play(dice);
    if (dice.side === 1) {
      $("button#play1").hide();
      $("button#hold1").hide();
      $("button#play2").show();
    } else {
      $("button#hold1").show();
    }
    showInfo(player1.scoreTotal, player2.scoreTotal, player1.scoreTemp, player2.scoreTemp, dice.side);
    // gameStop(player1.scoreTotal + player1.scoreTemp, player2.scoreTotal + player2.scoreTemp);
    scoreWin1 = player1.scoreTotal + player1.scoreTemp;
    gameStop(scoreWin1, scoreWin2);
  });
  $("button#play2").click(function(){
    player2.play(dice);
    if (dice.side === 1) {
      $("button#play2").hide();
      $("button#hold2").hide();
      $("button#play1").show();
    } else {
      $("button#hold2").show();
    }
    showInfo(player1.scoreTotal, player2.scoreTotal, player1.scoreTemp, player2.scoreTemp, dice.side);
    //gameStop(player1.scoreTotal + player1.scoreTemp, player2.scoreTotal + player2.scoreTemp);
    scoreWin2 = player2.scoreTotal + player2.scoreTemp;
    gameStop(scoreWin1, scoreWin2);
  });
  $("button#hold1").click(function(){
    player1.hold();
    player1.scoreTemp = 0;
    $("button#play1").hide();
    $("button#hold1").hide();
    $("button#play2").show();
    showInfo(player1.scoreTotal, player2.scoreTotal, player1.scoreTemp, player2.scoreTemp, dice.side);
  });
  $("button#hold2").click(function(){
    player2.hold();
    player2.scoreTemp = 0;
    $("button#play2").hide();
    $("button#hold2").hide();
    $("button#play1").show();
    showInfo(player1.scoreTotal, player2.scoreTotal, player1.scoreTemp, player2.scoreTemp, dice.side);
  });
});

















// let diceGame = new Dice();

// let player1Game = new Player(0, 0);
// let player2Game = new Player(0, 0);

// let game = new Game(player1Game, player2Game, diceGame);

// player1Game.play(diceGame);
// console.log("Dice side we get: " + diceGame.side);
// console.log("Total score: " + player1Game.scoreTotal);
// console.log("Temp score: " + player1Game.scoreTemp);

// player1Game.play(diceGame);
// console.log("Dice side we get: " + diceGame.side);
// console.log("Total score: " + player1Game.scoreTotal);
// console.log("Temp score: " + player1Game.scoreTemp);

// player1Game.play(diceGame);
// console.log("Dice side we get: " + diceGame.side);
// console.log("Total score: " + player1Game.scoreTotal);
// console.log("Temp score: " + player1Game.scoreTemp);

// player1Game.hold();
// console.log("Total score: " + player1Game.scoreTotal);

