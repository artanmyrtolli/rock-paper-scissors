var backgroundArray = [
    `./assets/backgrounds/matrix.gif`,
    `./assets/backgrounds/rainbow.gif`,
    `./assets/backgrounds/moon.gif`,
    `./assets/backgrounds/bubbles.gif`,
    `./assets/backgrounds/city.gif`,
    `./assets/backgrounds/retro.gif`,
    `./assets/backgrounds/space.gif`,
]

var paper = new Hand(`paper`, [`alien`, `rock`], [`scissors`, `lizard`]);
var scissors = new Hand(`scissors`, [`lizard`, `paper`], [`alien`, `rock`]);
var rock = new Hand(`rock`, [`lizard`, `scissors`], [`alien`, `paper`]);
var lizard = new Hand(`lizard`, [`paper`, `alien`], [`scissors`, `rock`]);
var alien = new Hand(`alien`, [`rock`, `scissors`], [`paper`, `lizard`]);
