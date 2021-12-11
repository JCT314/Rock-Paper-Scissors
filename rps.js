function computerPlay() {
    const choices = ['Rock','Paper','Scissors'];
    const randIdx = Math.floor(Math.random() * choices.length);
    return choices[randIdx];
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = computerSelection;

    if(playerSelection === computerSelection) {
        return {winner:"",text:"Draw!"};
    } else if((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Rock")) {
        return {winner:'player',text:`You Win! ${playerSelection} beats ${computerSelection}`};
    } else {
        return {winner:'computer',text:`You Lose! ${computerSelection} beats ${playerSelection}`};
    }
}

function getPlayerChoice(btn) {
    return btn.dataset.weapon;
}

function onButtonClick(e) {
    const btn = e.target.closest('.btn');
    if(!btn) return;

    const playerSelection = getPlayerChoice(btn);
    const computerSelection = computerPlay();
    const {text,winner} = playRound(playerSelection,computerSelection);
    outcomeEl.textContent = text;
    round++;
    roundEl.textContent = `Round ${round}`;
    if(winner === "player") {
        playerScore++;
    }
    if(winner === "computer") {
        computerScore++;
    }
    playerScoreEl.textContent = `Player:${playerScore}`;
    computerScoreEl.textContent = `${computerScore}:Computer`;
    if(playerScore === 5) {
        outcomeEl.textContent = "You win!"
        resetTextEl.style.opacity = 1;
        btns.removeEventListener("click",onButtonClick);
    }
    if(computerScore === 5) {
        outcomeEl.textContent = "You lost!"; 
        resetTextEl.style.opacity = 1;
        btns.removeEventListener("click",onButtonClick);
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    resetTextEl.style.opacity = 0;
    outcomeEl.textContent = "Choose Your Weapon to Begin!";
    playerScoreEl.textContent = `Player:${playerScore}`;
    computerScoreEl.textContent = `${computerScore}:Computer`;
    roundEl.textContent = `Round ${round}`;
    btns.addEventListener('click', onButtonClick);
}

const btns = document.querySelector(".btns");
const btnReset = document.querySelector(".btn--reset");
const outcomeEl = document.querySelector(".outcome");
const playerScoreEl = document.querySelector(".score-player");
const computerScoreEl = document.querySelector(".score-computer");
const resetTextEl = document.querySelector(".reset-text");
const roundEl = document.querySelector(".round-display");
let playerScore = 0;
let computerScore = 0;
let round = 1;

btns.addEventListener('click', onButtonClick);
btnReset.addEventListener('click',resetGame);


