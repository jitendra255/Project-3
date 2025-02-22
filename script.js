let userscore = 0
let compscore = 0
const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice")

const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");

const generatecompchoice = () => {
    const options = ["rock", "paper", "scissors"]
    const index = Math.floor(Math.random() * 3);
    return options[index];

}

const drawGame = () => {
    msg.innerText = "Game Drawn";
    msg.style.backgroundColor = "#081b31";
}

const userwin = (userchoice, compchoice) => {
    userscore++;

    userScorePara.innerText = userscore
    msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;

}

const compwin = (userchoice, compchoice) => {
    compscore++;

    compScorePara.innerText = compscore
    msg.innerText = `You lost! ${compchoice} beats your ${userchoice}`;
}

const playGame = (userchoice) => {
    console.log("userchoice is ", userchoice);
    //computer choice
    const compchoice = generatecompchoice()
    console.log("computerchoice is ", compchoice);

    if (userchoice === compchoice) {
        drawGame()
    }

    else if (userchoice == "rock" && compchoice == "scissors") {
        userwin(userchoice, compchoice)
    }

    else if (userchoice == "scissors" && compchoice == "paper") {
        userwin(userchoice, compchoice)
    }

    else if (userchoice == "paper" && compchoice == "rock") {
        userwin(userchoice, compchoice)
    }

    else {
        compwin(userchoice, compchoice)
    }

}

choices.forEach((choice) => {
    console.log(choice);

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");

        playGame(userchoice)
    });
});

