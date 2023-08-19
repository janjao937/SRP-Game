let botSelected = document.querySelector(".bot-Selected");
let playerSelected = document.querySelector(".player-Selected");
const result = document.querySelector(".result");

let btnRock = document.getElementById("Rock");
let btnPaper = document.getElementById("Paper");
let btnScissor = document.getElementById("Scissor");


const choice = ["Rock", "Scissors", "Paper"];

const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const botSelect = () => {
    let index = getRndInteger(0, choice.length - 1);
    return index;
    
}
const checkWinChoice = (i) => {
    /*
        0R,1S,2P
        Draw
        Win
        Lose
        0 W1 L2 D0
        1 W2 L0 D1
        2 W0 L1 D2    
    */
    let loser = new Number();
    switch (i) {
        case 0:
            loser = 1;
            break;
        case 1:
            loser = 2;
            break;
        case 2:
            loser = 0;
    }
    return loser;
}

const checkWinner = (botSelectionIndex, playerSelectionIndex) => {

    if (playerSelectionIndex === botSelectionIndex) 
    {
        //Draw
        //unchange
        playerSelected.classList = ("Draw");
        botSelected.classList = ("Draw");
    }
    else if(checkWinChoice(playerSelectionIndex)=== botSelectionIndex)
    {
        //Win
        //p green
        //b red
        playerSelected.classList = ("Win");
        botSelected.classList = ("Lose");
    }
    else
    {
        //Lose
        //p red
        //b green
        playerSelected.classList = ("Lose");
        botSelected.classList =("Win");
    }



}
const onSelect = (i) => {
    playerSelected.innerHTML = "Player :" + choice[i];
    let botIndex = botSelect();
    botSelected.innerHTML = "Bot :" + choice[botIndex];
    checkWinner(botIndex,i);
}
btnRock.onclick = ("click", (e) => onSelect(0));
btnPaper.onclick = ("click", (e) => onSelect(2));
btnScissor.onclick = ("click", (e) => onSelect(1));
