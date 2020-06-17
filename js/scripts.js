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
    this.hold();
  } else {
    this.scoreTemp += dice.side;
  }
}

Player.prototype.hold = function () {
  this.scoreTotal += this.scoreTemp;
  return true;
}

// Business Logic for Dice

function Dice (side) {
  this.side = side;
}

Dice.prototype.roll = function() {
  this.side = Math.floor((Math.random() * 6) + 1);
}

// User Interface

$(document).ready(function(){
  
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

