// We will take an input from computer
// We will take an input from the user, create a variable which will prompt a question and then store the answer in a variable  
// We will compare them both and declare the winner 
// we then will create another function to play five games in a row
// for comparing all the five games we will first assign two variables, one as playerWins and another as computerWins (initialize them 0), we will then increase the count of each variable according to the situation , and whichever variable is greater we will declare it as the winner

let options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let computerAnswer =  Math.floor(Math.random() * options.length);
    return options[computerAnswer];
}

let playerSelection;
let computerSelection;



function round(playerSelection, computerSelection){
    

    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return (`You win ${playerSelection} beats ${computerSelection}`);
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return (`You win, ${playerSelection} beats ${computerSelection}`)
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return (`You win, ${playerSelection} beats ${computerSelection}`)
    }
    else if(playerSelection === computerSelection){
        return (`Draw, you both selected the same option`)
    }
    else{
        return (`You lost, ${computerSelection} beats ${playerSelection}`)
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;

    for(let i = 0; i<5; i++){
        computerSelection = getComputerChoice();
        console.log(computerSelection)
        

        let userInput = prompt("What do you choose? Rock, paper or scissors");
        playerSelection = userInput.toLowerCase();
        console.log(playerSelection)
        console.log(round(playerSelection, computerSelection))

        if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock'){
            playerWins = playerWins + 1;
        }
        else if(playerSelection === computerSelection){
            playerWins = playerWins + 1;
            computerWins = computerWins + 1;
        }
        else{
            computerWins = computerWins + 1;
        }
    }
    console.log("Player Won: "+playerWins)
    console.log("Computer Won: "+computerWins)

    if(playerWins > computerWins){
        console.log("Congrats! You won")
    }
    else if(playerWins === computerWins){
        console.log("DRAW")
    }
    else{
        console.log("LoL, You lost to a computer")
    }
}

game();










