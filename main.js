const beatenBy = {
    "Scissor": "Paper",
    "Rock": "Scissor",
    "Paper": "Rock"
}

function getRandomInt(min, max){
    return Math.floor(Math.random()*(max - min)) + min;
}

function getComputerChoice(){   
    var n = getRandomInt(1, 4);
    var computerChoice ;
    if(n === 1) computerChoice = "Rock";
    if(n === 2) computerChoice = "Paper";
    if(n === 3) computerChoice = "Scissor";
    
    return computerChoice
}
function getPlayerChoice(){
    return prompt("Choose Rock, Paper or Scissor ");
}

function checkResult(playerChoice, computerChoice){
    if(playerChoice === computerChoice) return "Draw";    
    else if (beatenBy[playerChoice] === computerChoice) return "Win";
    else return "Loss";

}
function runRound(){
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const result = checkResult(playerChoice, computerChoice);

    console.log(`Player: ${playerChoice}!`);
    console.log(`Computer: ${computerChoice}!`);

    if (result === "Draw") console.log(`It's a draw! Both players choose ${computerChoice}`);
    if (result === "Win") console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
    if (result === "Loss") console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
    return result;
}
function game(){
    const maxWins = 3;
    var playerPoints = 0;
    var pcPoints = 0;

    for (let i = 0; i < 5; i++) {
        var result = runRound();
        if (result === "Win") {
            playerPoints++;
        }
        if (result === "Loss") {
            pcPoints++;
        }
        if (result === "Draw") { 
            pcPoints++;
            playerPoints++;
        }

        console.log(`Placar : Player = ${playerPoints} PC = ${pcPoints}`);
    }
}

