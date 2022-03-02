class Player {
    constructor(name, token, wins){
        this.name = name;
        this.token = token;
        this.wins = wins || 0;
        this.options = [`rock`, `paper`, `scissors`];
    }
    takeTurn(){
         return this.options[this.randomNumberGenerator(3)]
    }

    randomNumberGenerator(max){
        return Math.floor(Math.random() * max)
    }
}