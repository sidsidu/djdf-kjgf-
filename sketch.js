var canvas ;
var bacgroundImage;
var gameState = 0;
var player,form,game;
var database;
var playerCount;
var allPlayers;

function setup(){
  canvas = createCanvas(800,800)
  database = firebase.database();
  game = new Game()
  game.getState();
  game.start()
}

function draw(){
  if (playerCount === 4) {
    game.update(1);

  }
  if (gameState === 1){
    clear();
    game.play()
  }
}