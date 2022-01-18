const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
let winNum;

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
       return winNum;
    }

    else if((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")){
            
                winNum = 1;
                return winNum;
    }

   else {
       winNum = 0;
       return winNum;
   }

}


function game(){
    let roundNum;
    let win;
    for(let i = 0; i<5; i++){
        computerSelection= computerPlay();
        playerInput = prompt("Input rock, paper, or scissors")
        playerSelection = playerInput.toLowerCase();
        win = playRound(playerSelection, computerSelection);
        roundNum = i+1;

        if(win == 2){
            console.log("ROUND: " + (roundNum) + " TIE")
        }

        else if(win == 0){
            console.log("ROUND: " + (roundNum) + " LOSE")
        }

        else{
            console.log("ROUND: " + (roundNum) + " WIN")
        }
    }
}

let computerSelection;
let playerInput;
let playerSelection;
game();
