
let h_choice = getHumanChoice()


function getHumanChoice() {
    // Get the user's choice using the prompt method
    let choice = prompt("Enter your choice (Rock, Paper, Scissors):");
    // Convert the input to lowercase for easier comparison
    return choice = choice.toLowerCase();

    
}


function getComputerChoice() {
    //generate a number
    let rpc= Math.floor(Math.random()*3);
    
        if (rpc===2){
            rpc="rock";
        } else if (rpc===1){
            rpc="paper";
        }else if (rpc===0){
            rpc="scissors";
        }

    return  rpc;
}

 let result=getComputerChoice();
 console.log("human: ",h_choice)


 console.log("BOT: ",result)

 