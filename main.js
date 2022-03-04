var body = document.querySelector('body');
var gameModeBtn = document.querySelector('.main__game-mode-button');
var changeBkgdButton = document.querySelector('.main__chng-bknd-button')
var mainHeader = document.querySelector('.main__header');
var gameModeText = document.querySelector('.main__current-game-mode-text')
var attackBtn = document.querySelector('.main__attack-button');
var rockBtn = document.querySelector('.main__rock-throw-button');
var paperBtn = document.querySelector('.main__paper-throw-button');
var scissorsBtn = document.querySelector('.main__scissors-throw-button');
var alienBtn = document.querySelector('.main__alien-throw-button');
var lizardBtn = document.querySelector('.main__lizard-throw-button');

var currentGame;
var currentMode = `classic`;
var currentPlayer = `Artan`;
var currentBackground = 0;

changeBkgdButton.addEventListener('load', ranomizeBackground)
changeBkgdButton.addEventListener('click', ranomizeBackground)
gameModeBtn.addEventListener('click', changeGameMode)
attackBtn.addEventListener('click', function(){
    if (currentMode === `classic`) {
        console.log(`classic `);
        showAttackButtonsClassic();
    } 
    if (currentMode === `modern`){
        console.log(`modern`);
        showAttackButtonsModern();
    }
})
rockBtn.addEventListener('click', createRockClass);
paperBtn.addEventListener('click', createPaperClass);
scissorsBtn.addEventListener('click', createScissorsClass);
alienBtn.addEventListener('click', createAlienClass);
lizardBtn.addEventListener('click', createLizardClass);

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
    hideAttackButtons()
    currentGame = new Game(currentPlayer, choice, currentMode);
    console.log(currentGame);
}

function showAttackButtonsModern(){
    rockBtn.classList.remove('hidden');
    paperBtn.classList.remove('hidden');
    scissorsBtn.classList.remove('hidden');
    alienBtn.classList.remove('hidden');
    lizardBtn.classList.remove('hidden');
}

function showAttackButtonsClassic(){
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

function ranomizeBackground(){
    currentBackground++;
    if (currentBackground > 2) {
        currentBackground = 0;
    }
    body.style.backgroundImage = `url(${backgroundArray[currentBackground]})`;
}

function randomNumberGenerator(max){
    return Math.floor(Math.random() * max)
}