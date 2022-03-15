// Rock = 3, Scissor = 2, Paper = 1
// If 3 vs 2, 3 wins
// If 3 vs 1, 1 wins
// if 2 vs 1, 2 wins
// Player selection
// 1 vs 2 --> lose
// If 1 vs 1 / 2 vs 2 / 3 vs 3 draw

// Get How many rounds to play --> need to check if user doesn't input number
// Loop through i from 1 to rounds
// for each i, call play round
    // prompt user to pick  --> need to check if user doesn't input rock / paper / scissor
    // compute computer selection
    // compare
    // return result (0 = draw, 1 = player win, 2 = player lose)
// If draw --> i++
// If player win --> i++ and increase player win count
// if player lose --> i++ and increase computer win count


function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()* (max-min) + min);
}

function computerPlay() {
    let computerSelection = getRandomInt(1,4);
    return computerSelection;
}

function numbertoResult(number) {
    switch(number){
        case 0:
            return "draw";
            break;
        case 1:
            return "player win";
            break;
        case 2:
            return "computer win";
            break;
        default:
            return "something's wrong";
    }
}

function numbertoSelection(number) {
    switch(number){
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
            break;
        case 3:
            return "rock";
            break;
        default:
            return "something's wrong";
    }
}

function selectiontoNumber(selection) {
    selection = selection.toLowerCase();
    switch(selection){
        case "paper":
            return 1;
            break;
        case "scissor":
            return 2;
            break;
        case "rock":
            return 3;
            break;
        default:
            return -1;
    }
}

function playRound() {
    let playerSelection = -1;

    while (playerSelection==-1){
        playerSelection = selectiontoNumber(prompt("Input Rock / Paper / Scissor"));
        if (playerSelection==-1){
            alert("You input wrong value!");
        }
    }
    
    let computerSelection = computerPlay();

    matchevent.innerHTML="computer selection is " + numbertoSelection(computerSelection);

    if (playerSelection == computerSelection) {
        console.log(numbertoResult(0));
        alert("Draw!");
        return 0;
    }
    else if (playerSelection-computerSelection == 1 || playerSelection-computerSelection == -2) {
        console.log(numbertoResult(1));
        alert("You Win!");
        return 1;
    }
    else {
        console.log(numbertoResult(2));
        alert("You Lose!");
        return 2;
    };
}

function playRock() {
    // paper = 1, scissor = 2, rock = 3

    let playerSelection = 3;

    matchevent.innerHTML="You choose " + numbertoSelection(playerSelection);

    let computerSelection = computerPlay();

    matchevent.innerHTML="computer selection is " + numbertoSelection(computerSelection);

    if (playerSelection == computerSelection) {
        console.log(numbertoResult(0));
        setTimeout(roundDraw,250);
    }
    else if (playerSelection-computerSelection == 1 || playerSelection-computerSelection == -2) {
        console.log(numbertoResult(1));
        setTimeout(playerWin,250);
    }
    else {
        console.log(numbertoResult(2));
        setTimeout(computerWin,250);
    };
}

function playScissor() {
    // paper = 1, scissor = 2, rock = 3

    let playerSelection = 2;

    matchevent.innerHTML="You choose " + numbertoSelection(playerSelection);

    let computerSelection = computerPlay();

    matchevent.innerHTML="computer selection is " + numbertoSelection(computerSelection);


    if (playerSelection == computerSelection) {
        console.log(numbertoResult(0));
        setTimeout(roundDraw,250);
    }
    else if (playerSelection-computerSelection == 1 || playerSelection-computerSelection == -2) {
        console.log(numbertoResult(1));
        setTimeout(playerWin,250);
    }
    else {
        console.log(numbertoResult(2));
        setTimeout(computerWin,250);
    };
}

function playPaper() {
    // paper = 1, scissor = 2, rock = 3
    let playerSelection = 1;

    matchevent.innerHTML="You choose " + numbertoSelection(playerSelection);

    let computerSelection = computerPlay();

    matchevent.innerHTML="computer selection is " + numbertoSelection(computerSelection);

    if (playerSelection == computerSelection) {
        console.log(numbertoResult(0));
        setTimeout(roundDraw,250);
    }
    else if (playerSelection-computerSelection == 1 || playerSelection-computerSelection == -2) {
        console.log(numbertoResult(1));
        setTimeout(playerWin,250);
    }
    else {
        console.log(numbertoResult(2));
        setTimeout(computerWin,250);
    };
}

function playerWin(){
    playerWinCount = playerWinCount+1;
    playerscoreboard.innerHTML="You - "+playerWinCount;
    matchevent.innerHTML="you win this round!";
}

function roundDraw(){
    matchevent.innerHTML="Draw";
}

function computerWin(){
    computerWinCount = computerWinCount+1;
    computerscoreboard.innerHTML="Computer - "+computerWinCount;
    matchevent.innerHTML="computer win this round!";
}

function testEvent(){
    console.log("Function Executed")
}

let playerWinCount = 0;
let computerWinCount = 0;
let roundResult = 0;

const playerscoreboard = document.getElementById("player-score");
const computerscoreboard = document.getElementById("computer-score");

const matchevent = document.getElementById("match-event");

const rockbutton = document.getElementById("rock-button");
const paperbutton = document.getElementById("paper-button");
const scissorbutton = document.getElementById("scissor-button");

playerscoreboard.innerHTML="You - "+playerWinCount;
computerscoreboard.innerHTML="Computer - "+computerWinCount;

matchevent.innerHTML="Select Rock / Paper / Scissor";

rockbutton.addEventListener("click",playRock);
paperbutton.addEventListener("click",playPaper);
scissorbutton.addEventListener("click",playScissor);

// When index is initalized, run function game
// Scoreboard to show current function game state
// Player make selection, using UI
// Play game(s), update gamestate + scoreboard
// After game finished, prompt to play

