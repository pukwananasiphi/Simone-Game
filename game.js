var bottonColors = ["red", "blue", "green" , "yellow"];
var gamePattern = [];

function nextSequence(){
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColor = bottonColors[randomNumber];
    gamePattern.push(randomChosenColor);

}