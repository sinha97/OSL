const game = () => {
    let p1Score = 0;
    let p2Score = 0;

    //Start the Game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };


    //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const player1Hand = document.querySelector(".player1-hand");
    const player2Hand = document.querySelector(".player2-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Palyer2 Options
    const player2Options = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const player2Number = Math.floor(Math.random() * 3);
        const player2Choice = player2Options[player2Number];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, player2Choice);
          //Update Images
          player1Hand.src = `./assets/${this.textContent}.png`;
          player2Hand.src = `./assets/${player2Choice}.png`;
        }, 2000);
        //Animation
        player1Hand.style.animation = "shakePlayer 2s ease";
        player2Hand.style.animation = "shakeComputer 2s ease";
      });
    });
  };
    
  const updateScore = () => {
    const player1Score = document.querySelector(".player1-score p");
    const player2Score = document.querySelector(".player2-score p");
    player1Score.textContent = p1Score;
    player2Score.textContent = p2Score;
  };

  const compareHands = (player1Choice, player2Choice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (player1Choice === player2Choice) {
      winner.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (player1Choice === "rock") {
      if (player2Choice === "scissors") {
        winner.textContent = "Player1 Wins";
        p1Score++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player2 Wins";
        p2Score++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (player1Choice === "paper") {
      if (player2Choice === "scissors") {
        winner.textContent = "Player2 Wins";
        p2Score++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player1 Wins";
        p1Score++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (player1Choice === "scissors") {
      if (player2Choice === "rock") {
        winner.textContent = "Player2 Wins";
        p2Score++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player1 Wins";
        p1Score++;
        updateScore();
        return;
      }
    }
  };


    //Is call all the inner function
    startGame();
    playMatch();
};

//start the game function
game();