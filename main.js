function getUserInput(){
  return prompt("PLease choose between rock, paper or scissors");
}

//Random play
function randomPlay(){
  var randomNum = Math.floor(Math.random() * 3);
  if(randomNum === 0){
    return "rock";
  }else if(randomNum === 1){
    return "paper";
  }else{
    return "scissors";
  }
}
//Get the players move
function getPlayerMove(playerMove){
  return playerMove || getUserInput();
}

//Get the computers move
function getComputerMove(computerMove){
  return computerMove || randomPlay();
}

// Start game
function startgame(){
  alert("Let's play a game of Rock, Paper, Scissors!");

  //score variables
  var playerScore = 0;
  var compScore = 0;

  //Play a game of 3 first to 3 points wins !
  while(playerScore < 3 && compScore < 3){
    var playerMove = getPlayerMove();
    var compMove = getComputerMove();
    var winner = checkForWinner(playerMove, compMove);

    if (winner === "player"){
      playerScore ++;
      alert("The player won that round with - " + playerMove + " against " + compMove + "-------" + "The score is Player- " + playerScore + " Computer-" + compScore);
    } else if (winner === "computer"){
      compScore ++;
      alert("The computer won that round with - " + compMove + " against " + playerMove + "-------" + "The score is Player- " + playerScore + " Computer-" + compScore);
    } else {
      alert("That was a tie with - " + playerMove +"vs" + compMove)
    }
  }
}

//check for winner
function checkForWinner(playerMove, compMove){
  var winner;
  if(playerMove === compMove){
    winner = "tie";
  }else if((playerMove === "rock" && compMove === "scissors")||(playerMove === "paper" && compMove === "rock")||(playerMove === "scissors" && compMove === "paper")){
    winner = "player";
  }else{
    winner = "computer";
  }
  return winner;
}

startgame();