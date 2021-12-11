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
    
}

const btns = document.querySelector(".btns");
const outcomeEl = document.querySelector(".outcome");
btns.addEventListener('click', onButtonClick);

