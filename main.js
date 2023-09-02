

const buttons = document.querySelectorAll('button');
const para = document.querySelector('.para');



function getComputerChoice(){
    let choices = ['rock' , 'paper' , 'scissors'];
    const index = Math.floor(Math.random() * choices.length);
    const compChoice = choices[index];
    return compChoice;
}


function playRound(playerSelection, computerSelection){
    

    console.log("Computer :" +computerSelection)
    
    playerSelection = playerSelection.toLowerCase();
    console.log(`Player: ${playerSelection}`)

    let winMessage = `You won, ${playerSelection} beats ${computerSelection}`;

    if(playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'scissors' && computerSelection === 'paper' ){

        return (winMessage);
    }
    else if(playerSelection === computerSelection){
        return ("Draw");
    }
    else{
        return (`You lost, ${computerSelection} beats ${playerSelection}`);
    }
}
buttons.forEach(button => {
    button.addEventListener('click', () => {

        para.textContent = playRound(button.id,getComputerChoice() )
    })
});
