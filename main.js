

const buttons = document.querySelectorAll('button');
const para = document.querySelector('.para');
const declare = document.querySelector('.declare');
const counter = document.querySelector('.counter');
const reloadDiv = document.querySelector('.reloadDiv')



function getComputerChoice(){
    let choices = ['rock' , 'paper' , 'scissors'];
    const index = Math.floor(Math.random() * choices.length);
    const compChoice = choices[index];
    return compChoice;
}

let playerWins = 0;
let compWins = 0;

function playRound(playerSelection, computerSelection){

    console.log("Computer :" +computerSelection)
    
    playerSelection = playerSelection.toLowerCase();
    console.log(`Player: ${playerSelection}`)

    let winMessage = `You won, ${playerSelection} beats ${computerSelection}`;

    if(playerSelection === 'rock' && computerSelection === 'scissors'
    || playerSelection === 'paper' && computerSelection === 'rock'
    || playerSelection === 'scissors' && computerSelection === 'paper' ){

        playerWins++;
        return (winMessage);
    }
    else if(playerSelection === computerSelection){
        return ("Draw");
    }
    else{
        compWins++;
        return (`You lost, ${computerSelection} beats ${playerSelection}`);
    }
}

function checkWinner(playerWins, compWins){
    if(playerWins === 5){
        const h2 = document.createElement('h2');
        h2.textContent = `You won ${playerWins} games and Computer won ${compWins} games`;
        declare.append(h2);
    }
    else if(compWins === 5){
        const h2 = document.createElement('h2');
        h2.textContent = `Computer won ${compWins} games and you won ${playerWins} games`
        declare.append(h2)
    }
}

function updateScore(playerWins, compWins){
    const pw = document.querySelector('.pw');
    pw.textContent = `Player Wins: ${playerWins}`;
    counter.append(pw);
    const cw = document.querySelector('.cw');
    cw.textContent = `Computer Wins: ${compWins}`;
    counter.append(cw)

}

function reload(playerWins, compWins){
    if(playerWins === 5 || compWins === 5){
        const reloadBtn = document.createElement('button');
        reloadBtn.textContent = `Play again?`

        reloadBtn.addEventListener('click', () => {
            window.location.reload(true);
        })

        reloadDiv.append(reloadBtn);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {

        para.textContent = playRound(button.id,getComputerChoice())

        
        checkWinner(playerWins, compWins);
        updateScore(playerWins, compWins);
        reload(playerWins, compWins);
        
        
    })
});

