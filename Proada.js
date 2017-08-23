function weapon(newRPS) {
  
  var usrChoice;
  var cpuChoice;
  
  cpuChoice = Math.round(Math.random()*3);
  if(cpuChoice == 1){
    cpuChoice = "scissors";
  }
  else if (cpuChoice == 2){
    cpuChoice = "paper";
  }
  else if (cpuChoice == 3){
    cpuChoice = "rock";
  }

  console.log(cpuChoice);
  usrChoice = newRPS;
  
  if(usrChoice === cpuChoice){
    alert("The game is tied. Try again?");
  }
  if(usrChoice === "rock"){
    if (cpuChoice === "paper" || cpuChoice === "scissors"){
      alert("You won!");
    }
  }

  if(usrChoice === "scissors"){
    if (cpuChoice === "paper"){
      alert("You won!");
    }else if(cpuChoice === "rock"){
      alert("You lost!");
    }
  }

  if (usrChoice === "paper"){
    if (cpuChoice === "rock"){
      alert("You lost!");
    }
    else if (cpuChoice === scissors){
      alert("You won!");
    }
  }
}