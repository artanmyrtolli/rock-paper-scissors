//_____________________________QUERY SELECTORS________________________________________
var body = document.querySelector('body');
//---------sidebar-left-------------
var playerName = document.querySelector('.sidebar__left-header');
var playerWinsCounter = document.querySelector('.sidebar__left-counter-number');
var playerImage = document.querySelector('.sidebar__left-image');
//---------sidebar-right-------------
var computerWinsCounter = document.querySelector('.sidebar__right-counter-number');
//---------main (middle, top to bottom)-------------
var mainHeader = document.querySelector('.main__header');
var gameModeText = document.querySelector('.main__current-game-mode-text');
var winnerBox = document.querySelector('.main__action-winner-box');
var detailedWinnerMessage = document.querySelector('.main__action-winner-detailed')
var winnerMessage = document.querySelector('.main__action-winner-message');
var inputNameBox = document.querySelector('.main__action-input-name-box');
var inputName = document.querySelector('.main__action-input-name');
var rulesImage = document.querySelector('.main__action-rules-image');
//---------buttons-------------
var pickFighterBtn = document.querySelector('.main__pick-fighter-button');
var gameModeBtn = document.querySelector('.main__game-mode-button');
var changeBkgdBtn = document.querySelector('.main__chng-bknd-button');
var attackBtn = document.querySelector('.main__attack-button');
var rockBtn = document.querySelector('.main__rock-throw-button');
var paperBtn = document.querySelector('.main__paper-throw-button');
var scissorsBtn = document.querySelector('.main__scissors-throw-button');
var alienBtn = document.querySelector('.main__alien-throw-button');
var lizardBtn = document.querySelector('.main__lizard-throw-button');
var changeNameBtn = document.querySelector('.main__change-name-button');
var submitNameBtn = document.querySelector('.main__action-input-name-button');
var rulesBtn = document.querySelector('.main__rules-button');
var resetBtn = document.querySelector('.main__reset-score-button');
//---------fighters-------------
var fighterBox = document.querySelector('.main__action-fighters-box'); 
var fighterHeader = document.querySelector('.main__action-header');
var fighterPaladin = document.querySelector('.fighter__paladin');
var fighterSkirt = document.querySelector('.fighter__skirt');
var fighterViking = document.querySelector('.fighter__viking');

//_____________________________GLOBAL VARIABLES_______________________________________
var currentPlayer = new Player (`Player1`);
var CPU = new Player (`CPU`);
var currentBackground = 0;
var currentGame;
var currentMode = `classic`;

//_____________________________EVENT LISTENERS_______________________________________
resetBtn.addEventListener('click', resetScores);
rulesBtn.addEventListener('click', toggleRules);
changeNameBtn.addEventListener('click', showUserNameForm);
submitNameBtn.addEventListener('click', setPlayerName);
pickFighterBtn.addEventListener('click', showFighters);
fighterPaladin.addEventListener('click', changeFighterPaladin);
fighterSkirt.addEventListener('click', changeFighterSkirt);
fighterViking.addEventListener('click', changeFighterViking);
changeBkgdBtn.addEventListener('click', ranomizeBackground);
gameModeBtn.addEventListener('click', changeGameMode);
 //---------Player Throws-------------
rockBtn.addEventListener('click', function(){
    userChoice(rock);
});
paperBtn.addEventListener('click', function(){
    userChoice(paper);
});
scissorsBtn.addEventListener('click', function(){
    userChoice(scissors);
});
alienBtn.addEventListener('click', function(){
    userChoice(alien);
});
lizardBtn.addEventListener('click', function(){
    userChoice(lizard)
});

attackBtn.addEventListener('click', function(){
    if (currentMode === `classic`) {
        showAttackButtonsClassic();
    } 
    if (currentMode === `modern`){
        showAttackButtonsModern();
    }
})

//_____________________________FUNCTIONS_______________________________________
function setPlayerName(){
    if (inputName.value) {
        playerName.innerText = inputName.value;
        currentPlayer.name = inputName.value
        inputNameBox.classList.add('hidden');
        return;
    } 
    playerName.innerText = `Player 1`;
    inputNameBox.classList.add('hidden');
}

function changeFighterPaladin(){
    playerImage.src = `./assets/fighters/Paladin.png`;
    currentPlayer.token = `./assets/fighters/Paladin.png`;
    hideFighters();
}

function changeFighterSkirt(){
    playerImage.src = `./assets/fighters/Skirt.png`;
    currentPlayer.token = `./assets/fighters/Skirt.png`;
    hideFighters();
}

function changeFighterViking(){
    playerImage.src = `./assets/fighters/Viking.png`;
    currentPlayer.token = `./assets/fighters/Viking.png`;
    hideFighters();
}

function changeGameMode(){
    hideAttackButtons();
    hideDetailedWinMessage();
    if (currentMode === `classic`) {
        currentMode = `modern`;
        gameModeText.innerText = `Modern`
        changeHeaderModern();
    } else {
        currentMode = `classic`;
        gameModeText.innerText = `Classic`
        changeHeaderClassic();
    }
}

function changeHeaderModern(){
    mainHeader.innerText = `ROCK, PAPER, SCISSORS, ALIEN, LIZARD`
}

function changeHeaderClassic(){
    mainHeader.innerText = `ROCK, PAPER, SCISSORS`
}

function userChoice(choice){
    hideAttackButtons();
    currentGame = new Game(currentPlayer, CPU, choice, currentMode);
    declareWinner();
}

function declareWinner(){
    if (currentGame.winner === `player`) {
        declarePlayerWins();
        flashMessage();
        return;
    }
    if (currentGame.winner === `cpu`) {
        declareComputerWins();
        flashMessage();
        return;
    }
    declareDraw();
    flashMessage();
}

function declarePlayerWins() {
    showWinnerMessage();
    winnerMessage.innerText = `<<< ${playerName.innerText.toUpperCase()} WINS!!`
    adjustWinCounters();
    showDetailedWinMessage();
    showPlayerWinDetails();
}

function declareComputerWins() {
    showWinnerMessage();
    winnerMessage.innerText = 'CPU WINS!! >>>'
    adjustWinCounters();
    showDetailedWinMessage();
    showCpuWinDetails();
}

function declareDraw() {
    showWinnerMessage();
    winnerMessage.innerText = 'THIS MATCH IS A DRAW!'
}

function showCpuWinDetails(){
    detailedWinnerMessage.innerText = `${currentGame.player2Choice.name.toUpperCase()} BEATS ${currentGame.player1Choice.name.toUpperCase()}`
}

function showPlayerWinDetails(){
    detailedWinnerMessage.innerText = `${currentGame.player1Choice.name.toUpperCase()} BEATS ${currentGame.player2Choice.name.toUpperCase()}`
}

function adjustWinCounters(){
    playerWinsCounter.innerText = currentGame.player1.wins;
    computerWinsCounter.innerText = currentGame.player2.wins;
}

function resetScores(){
    currentGame.player1.wins = 0;
    currentGame.player2.wins = 0;
    adjustWinCounters();
}

function ranomizeBackground(){
    currentBackground++;
    if (currentBackground > 6) {
        currentBackground = 0;
    }
    body.style.backgroundImage = `url(${backgroundArray[currentBackground]})`;
}

function flashMessage(){
    setTimeout(hideWinnerMessage, 500);
    setTimeout(showWinnerMessage, 1000);
    setTimeout(hideWinnerMessage, 1500);
    setTimeout(showWinnerMessage, 2000);
    setTimeout(hideWinnerMessage, 2500);
    setTimeout(showWinnerMessage, 3000);
    setTimeout(hideWinnerMessage, 5000);
}
 //---------Hide/Show Functions-------------
function showAttackButtonsModern(){
    hideDetailedWinMessage();
    hideWinnerMessage();
    hideFighters();
    rockBtn.classList.remove('hidden');
    paperBtn.classList.remove('hidden');
    scissorsBtn.classList.remove('hidden');
    alienBtn.classList.remove('hidden');
    lizardBtn.classList.remove('hidden');
}

function showAttackButtonsClassic(){
    hideDetailedWinMessage();
    hideWinnerMessage();
    hideFighters();
    rockBtn.classList.remove('hidden');
    paperBtn.classList.remove('hidden');
    scissorsBtn.classList.remove('hidden');
}

function hideAttackButtons(){
    rockBtn.classList.add('hidden');
    paperBtn.classList.add('hidden');
    scissorsBtn.classList.add('hidden');
    alienBtn.classList.add('hidden');   
    lizardBtn.classList.add('hidden');
}

function showFighters(){
    hideWinnerMessage()
    fighterHeader.classList.remove('hidden');
    fighterBox.classList.remove('hidden');
}
function hideFighters(){
    fighterHeader.classList.add('hidden');
    fighterBox.classList.add('hidden');
}

function showWinnerMessage(){
    winnerBox.classList.remove('hidden');
    winnerMessage.classList.remove('hidden');
}

function hideWinnerMessage(){
    winnerBox.classList.add('hidden');
    winnerMessage.classList.add('hidden');
}

function showDetailedWinMessage(){
    detailedWinnerMessage.classList.remove('hidden');
}

function hideDetailedWinMessage(){
    detailedWinnerMessage.classList.add('hidden');
}

function showUserNameForm(){
    if (inputNameBox.classList[1] === 'hidden') {
        inputNameBox.classList.remove('hidden');
    } else {
        inputNameBox.classList.add('hidden');
    }
}

function toggleRules(){
    if (rulesImage.classList[1] === 'hidden') {
        rulesImage.classList.remove('hidden');
    } else {
        rulesImage.classList.add('hidden');
    }
}