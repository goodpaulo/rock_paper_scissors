const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
let playerWinCount = 0;
let comWinCount = 0;

function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}

function computerPlay(){
    let maxNum = 3;

    if(getRandomNumber(maxNum) == 0)
    {
        console.log("Computer play function: rock");
        return ROCK;
    }

    else if(getRandomNumber(maxNum) == 1){
        console.log("Computer play function: paper");
        return PAPER;
    }

    else{
        console.log("Computer play function: scissors");
        return SCISSORS;
    }
}

function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
       winNum = 2;
       tieGameChild.textContent = 'Tie';
       parentDiv.appendChild(tieGameChild);
    }

    else if((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")){
            
                if(tieGameChild.innerHTML === 'Tie'){
                    tieGameChild.textContent = "";
                }

                playerWinCount++;

                if(playerWinCount >= 5){
                    playerChild.textContent = "You win!";
                    rockSelect.disabled = true;
                    paperSelect.disabled = true;
                    scissorsSelect.disabled = true;
                }
                else{
                playerChild.textContent = `${playerWinCount}`;
                playerScore.appendChild(playerChild);
                }
    }

   else {
    if(tieGameChild.innerHTML === 'Tie'){
        tieGameChild.textContent = "";
    }

    comWinCount++;

    if(comWinCount >= 5){
        computerChild.textContent = "You lose!";
        rockSelect.disabled = true;
        paperSelect.disabled = true;
        scissorsSelect.disabled = true;
    }
    else{
    computerChild.textContent = `${comWinCount}`;
    computerScore.appendChild(computerChild);
    }
   }

}


let computerSelection;
let playerSelection;

const parentDiv = document.querySelector('#results');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const playerChild = document.createElement('div');
const computerChild = document.createElement('div');
const tieGameChild = document.createElement('div');

const rockSelect = document.querySelector("#rock");
const paperSelect = document.querySelector("#paper");
const scissorsSelect = document.querySelector("#scissors");

rockSelect.addEventListener('click', rSelect);
paperSelect.addEventListener('click', pSelect);
scissorsSelect.addEventListener('click', sSelect);

function sSelect(){
    playerSelection = "scissors";
    computerSelection= computerPlay();
    console.log(playerSelection);
    playRound(playerSelection, computerSelection);
}
function pSelect(){
    playerSelection = "paper";
    computerSelection= computerPlay();
    console.log(playerSelection);
    playRound(playerSelection, computerSelection);
}
function rSelect(){
    playerSelection = "rock";
    computerSelection= computerPlay();
    console.log(playerSelection);
    playRound(playerSelection, computerSelection);
}