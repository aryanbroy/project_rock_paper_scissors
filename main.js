let choices = ['rock' , 'paper' , 'scissors'];
const index = Math.floor(Math.random() * choices.length);

function getComputerChoice(){
    const compChoice = choices[index];
    return compChoice;
}

function playRound(playerSelection, computerSelection){
    
    console.log(computerSelection)
    
    playerSelection = playerSelection.toLowerCase();
    console.log(`Player: ${playerSelection}`)

    let winMessage = `You won, ${playerSelection} beats ${computerSelection}`;

    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return ("winMessage");
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return (winMessage);
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return (winMessage);
    }
    else if(playerSelection === computerSelection){
        return ("Draw");
    }
    else{
        return (`You lost, ${computerSelection} beats ${playerSelection}`);
    }
}
console.log(playRound(playerSelection = prompt('rock, paper or scissors?'), computerSelection = getComputerChoice()))