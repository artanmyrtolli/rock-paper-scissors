var loginName = document.querySelector('.login__input-name')
var loginPage = document.querySelector('.login__full')
var body = document.querySelector('body');
var mainHeader = document.querySelector('.main__header');
var playerName = document.querySelector('.sidebar__left-header')
var gameModeText = document.querySelector('.main__current-game-mode-text');
var pickFighterBtn = document.querySelector('.main__pick-fighter-button');
var gameModeBtn = document.querySelector('.main__game-mode-button');
var changeBkgdBtn = document.querySelector('.main__chng-bknd-button')
var attackBtn = document.querySelector('.main__attack-button');
var rockBtn = document.querySelector('.main__rock-throw-button');
var paperBtn = document.querySelector('.main__paper-throw-button');
var scissorsBtn = document.querySelector('.main__scissors-throw-button');
var alienBtn = document.querySelector('.main__alien-throw-button');
var lizardBtn = document.querySelector('.main__lizard-throw-button');
var fighterBox = document.querySelector('.main__action-fighters-box'); 
var fighterHeader = document.querySelector('.main__action-header')
var fighterPaladin = document.querySelector('.fighter__paladin');
var fighterSkirt = document.querySelector('.fighter__skirt');
var fighterViking = document.querySelector('.fighter__viking');
var playerWinsCounter = document.querySelector('.sidebar__left-counter-number');
var computerWinsCounter = document.querySelector('.sidebar__right-counter-number');
var winnerBox = document.querySelector('.main__action-winner-box');
var winnerMessage = document.querySelector('.main__action-winner-message');
var playerImage = document.querySelector('.sidebar__left-image');


// var currentPlayer = new Player ('Artan');
var currentPlayer;


loginName.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        setPlayerName(e)
        initializePlayer(e); }
});


pickFighterBtn.addEventListener('click', showFighters)
fighterPaladin.addEventListener('click', changeFighterPaladin);
fighterSkirt.addEventListener('click', changeFighterSkirt);
fighterViking.addEventListener('click', changeFighterViking);
changeBkgdBtn.addEventListener('click', ranomizeBackground)
gameModeBtn.addEventListener('click', changeGameMode)
attackBtn.addEventListener('click', function(){
    if (currentMode === `classic`) {
        showAttackButtonsClassic();
    } 
    if (currentMode === `modern`){
        showAttackButtonsModern();
    }
})
rockBtn.addEventListener('click', createRockClass);
paperBtn.addEventListener('click', createPaperClass);
scissorsBtn.addEventListener('click', createScissorsClass);
alienBtn.addEventListener('click', createAlienClass);
lizardBtn.addEventListener('click', createLizardClass);

function initializePlayer(e){
    loginPage.classList.add('hidden');
    currentPlayer = new Player(e.target.value)
}

function setPlayerName(e){
    playerName.innerText = e.target.value;
}

function changeFighterPaladin(){
    playerImage.src = `./assets/fighters/Paladin.png`;
    hideFighters();
}

function changeFighterSkirt(){
    playerImage.src = `./assets/fighters/Skirt.png`;
    hideFighters();
}

function changeFighterViking(){
    playerImage.src = `./assets/fighters/Viking.png`;
    hideFighters();
}


function changeGameMode(){
    hideAttackButtons();
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

function createRockClass() {
    var rock = new Rock()
    userChoice(rock);
}
function createPaperClass() {
    var paper = new Paper()
    userChoice(paper);
}
function createScissorsClass() {
    var scissors = new Scissors()
    userChoice(scissors);
}
function createAlienClass() {
    var alien = new Alien()
    userChoice(alien);
}
function createLizardClass() {
    var lizard = new Lizard()
    userChoice(lizard);
}

function userChoice(choice){
    var CPU = new Player('CPU');
    hideAttackButtons()
    currentGame = new Game(currentPlayer, CPU, choice, currentMode);
    declareWinner();
}

function declareWinner(){
    console.log(currentGame);
    if (currentGame.winner === `player`) {
        declarePlayerWins();
        flashElements();
        return;
    }
    if (currentGame.winner === `cpu`) {
        declareComputerWins();
        flashElements();
        return;
    }
    declareDraw();
    flashElements();
}

function declarePlayerWins() {
    showWinnerMessage();
    winnerMessage.innerText = '<<< PLAYER WINS!!'
    adjustWinCounters();
}

function declareComputerWins() {
    showWinnerMessage();
    winnerMessage.innerText = 'CPU WINS!! >>>'
    adjustWinCounters();
}

function declareDraw() {
    showWinnerMessage();
    winnerMessage.innerText = 'THIS MATCH IS A DRAW!'
}

function adjustWinCounters(){
    playerWinsCounter.innerText = currentGame.player1.wins;
    computerWinsCounter.innerText = currentGame.player2.wins;
}

function showAttackButtonsModern(){
    hideWinnerMessage();
    hideFighters();
    rockBtn.classList.remove('hidden');
    paperBtn.classList.remove('hidden');
    scissorsBtn.classList.remove('hidden');
    alienBtn.classList.remove('hidden');
    lizardBtn.classList.remove('hidden');
}

function showAttackButtonsClassic(){
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


function ranomizeBackground(){
    currentBackground++;
    if (currentBackground > 7) {
        currentBackground = 0;
    }
    body.style.backgroundImage = `url(${backgroundArray[currentBackground]})`;
}

function flashElements(){
    setTimeout(hideWinnerMessage, 500);
    setTimeout(showWinnerMessage, 1000);
    setTimeout(hideWinnerMessage, 1500);
    setTimeout(showWinnerMessage, 2000);
    setTimeout(hideWinnerMessage, 2500);
    setTimeout(showWinnerMessage, 3000);
    setTimeout(hideWinnerMessage, 5000);

}

function randomNumberGenerator(max){
    return Math.floor(Math.random() * max)
}

