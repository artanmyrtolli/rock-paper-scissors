var attackBtn = document.querySelector('.main__attack-button')
var rockBtn = document.querySelector('.main__rock-throw-button')
var paperBtn = document.querySelector('.main__paper-throw-button')
var scissorsBtn = document.querySelector('.main__scissors-throw-button')



attackBtn.addEventListener('click', toggleAttackButtons)
rockBtn.addEventListener('click', function(event){
    userChoice(event)
})
paperBtn.addEventListener('click', function(event){
    userChoice(event)
})
scissorsBtn.addEventListener('click', function(event){
    userChoice(event)
})

function toggleAttackButtons(){
    rockBtn.classList.remove('hidden');
    paperBtn.classList.remove('hidden');
    scissorsBtn.classList.remove('hidden');
}

function userChoice(event){
    console.log(event.target.innerText.toLowerCase())
}