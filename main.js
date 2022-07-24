var playerCounter = 0;
var  pcCounter = 0;

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

function checkResult(playerChoice, computerChoice){
    if(playerChoice === computerChoice) return "Draw";    
    else if (beatenBy[playerChoice] === computerChoice) return "Win";
    else return "Loss";

}
function runRound(playerChoice){
    const computerChoice = getComputerChoice();
    const result = checkResult(playerChoice, computerChoice);
    
    
    const logSpan = document.querySelector ('.log');
    const playerLog = document.querySelector('.playerLog'); 
    const pcLog = document.querySelector ('.pcLog');
    const playerCnt = document.querySelector('.playerCounter');
    const pcCnt = document.querySelector('.pcCounter');


    playerLog.textContent = `Player: ${playerChoice}!`;
    pcLog.textContent = `Computer: ${computerChoice}!`;

    if (result === "Draw") {
        logSpan.textContent = `It's a draw! Both players choose ${computerChoice}`;
        playerCnt.textContent = playerCounter;
        pcCnt.textContent = pcCounter;
    }
    if (result === "Win") {
        logSpan.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
        playerCounter++;
        playerCnt.textContent = playerCounter;
    }
    if (result === "Loss") {    
        logSpan.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
        pcCounter++;
        pcCnt.textContent = pcCounter;
    }
    if(playerCounter >= 5){
        playerCounter = 0;
        pcCounter = 0;
        playerCnt.textContent = playerCounter;
        pcCnt.textContent = pcCounter;

        logSpan.textContent = 'Player reached 5 points and wins the Match!';
    }
    else if(pcCounter >= 5){
        playerCounter = 0;
        pcCounter = 0;
        playerCnt.textContent = playerCounter;
        pcCnt.textContent = pcCounter;

        logSpan.textContent = 'Computer reached 5 points and wins the Match!'
    }

    return result;
}


