let choices = ['rock' , 'paper' , 'scissors'];
const index = Math.floor(Math.random() * choices.length);

function getComputerChoice(){
    const compChoice = choices[index];
    console.log(compChoice);
}