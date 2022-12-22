let PlayerScore = 0
let ComputerScore = 0


let rock = document.querySelector("#Rock");
let paper = document.querySelector("#Paper");
let scissor = document.querySelector("#Scissor");
let Playerpoints = document.querySelector(".player-scores")
let Computerpoints = document.querySelector(".computer-scores")

let OutcomeDiv = document.querySelector(".selection");





function getComputerChoice(randomChoice){
    let getChoice = Math.floor(Math.random() * 3);
    if( getChoice == "0"){
        randomChoice = "Rock"
    }
    else if( getChoice == "1"){
        randomChoice = "Paper"

    }

    else if(getChoice == "2"){
        randomChoice = "Scissor"
    }
    
    return randomChoice;

}




let PofSelection = document.createElement('p');




function playRound(playerSelection, computerSelection) {




    if(playerSelection == "Rock" && computerSelection == "Paper" ){

        PofSelection.innerText = "Player selection is " + playerSelection + " and Computer Selected " + computerSelection;
        
        ComputerScore++;

               
    }

    else if(playerSelection == "Rock" && computerSelection == "Scissor"){

        PofSelection.innerText = "Player selection is " + playerSelection + " and Computer Selected " + computerSelection;
        

        PlayerScore++;
        
    }


    else if(playerSelection == "Paper" && computerSelection == "Rock"){
        PofSelection.innerText = "Player selection is " + playerSelection + " and Computer Selected " + computerSelection;
        

        PlayerScore++;
        
    }

    else if(playerSelection == "Paper" && computerSelection == "Scissor"){
         PofSelection.innerText = "Player selection is " + playerSelection + " and Computer Selected " + computerSelection;
        

        ComputerScore++;
        
    }


    else if(playerSelection == "Scissor" && computerSelection == "Rock"){
        PofSelection.innerText = "Player selection is " + playerSelection + " and Computer Selected " + computerSelection;
        

        ComputerScore++;
        
    }


    else if(playerSelection == "Scissor" && computerSelection == "Paper"){
        PofSelection.innerText = "Player selection is " + playerSelection + " and Computer Selected " + computerSelection;
        

        PlayerScore++;
        
    }
    else if(playerSelection == computerSelection){

        PofSelection.innerText = "Player selection is " + playerSelection + " and Computer Selected " + computerSelection;
        
    }


    Playerpoints.textContent = PlayerScore;
    Computerpoints.textContent = ComputerScore;

    OutcomeDiv.appendChild(PofSelection);


  }
    



let winnerDivConatiner = document.createElement('div');
let winnerDiv = document.createElement('div');
let winnerH2 = document.createElement('h2');
let winnerButton = document.createElement('button');

winnerDivConatiner.setAttribute('style'," display:none;position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 5; background-color: rgba(157, 255, 0, 0.068);")
winnerDiv.setAttribute('style', "display:block; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 200px; height:200px; background-color:pink; transition: 0.3s ease-in;")


winnerButton.addEventListener("click", function(){
    PlayerScore = 0;
    ComputerScore = 0;
    Playerpoints.textContent = PlayerScore;
    Computerpoints.textContent = ComputerScore;
    winnerDivConatiner.style.display = "none";
    PofSelection.innerText = "";


})


winnerButton.innerText = "Play again"


winnerDiv.appendChild(winnerH2);
winnerDiv.appendChild(winnerButton);


winnerDivConatiner.appendChild(winnerDiv);
OutcomeDiv.appendChild(winnerDivConatiner);



window.addEventListener('click', function(e){
    if(e.target === winnerDivConatiner){
        PlayerScore = 0;
        ComputerScore = 0;
        Playerpoints.textContent = PlayerScore;
        Computerpoints.textContent = ComputerScore;
        winnerDivConatiner.style.display = "none";
        PofSelection.innerText = "";

    }
});


const CheckForWinner = (PlayerScore, ComputerScore) =>{

    if(PlayerScore == 10){
        winnerH2.innerText = "Player is za Winner!";
        winnerDivConatiner.style.display = "block";


    }

    else if(ComputerScore == 10){
        winnerH2.innerText = "Computer is za Winner!";
        winnerDivConatiner.style.display = "block";
        
    }

}


rock.addEventListener('click', function(){
    const RockSelection = "Rock";
    playRound(RockSelection, getComputerChoice());
    CheckForWinner(PlayerScore, ComputerScore);
});


paper.addEventListener('click', function(){
     const PaperSelection = "Paper";  
    playRound(PaperSelection, getComputerChoice());
    CheckForWinner(PlayerScore, ComputerScore);
});


scissor.addEventListener('click', function(){
    const ScissorSelection = "Scissor";
    playRound(ScissorSelection, getComputerChoice());
    CheckForWinner(PlayerScore, ComputerScore);

});