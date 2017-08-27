function weapon(newRPS) {
  
  var usrChoice;
  var cpuChoice;
  var score = 0;

  cpuChoice = Math.round(Math.random()*3);
  if(cpuChoice == 1){
    cpuChoice = "bird";
  }
  else if (cpuChoice == 2){
    cpuChoice = "water";
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
    if (cpuChoice === "water" || cpuChoice === "bird"){
      score++;
      alert("You won!" + "Score is " + score);
    }
  }

  if(usrChoice === "bird"){
    if (cpuChoice === "rock"){
      score++;
      alert("You won!" + " Score is " + score);
    }else if(cpuChoice === "water"){
      score--;
      alert("You lost!" + " Score is " + score);
    }
  }

  if (usrChoice === "water"){
    if (cpuChoice === "rock"){
      score--;
      alert("You lost!" + " Score is " + score);
    }else if (cpuChoice === bird){
      score++;
      alert("You won!" + " Score is " + score);
    }
  }
} 