class Player {
    constructor(name, token, wins){
        this.name = name;
        this.token = token;
        this.wins = wins || 0;
        this.optionsClassic = [`rock`, `paper`, `scissors`];
        this.optionsModern = [`rock`, `paper`, `scissors`, `lizard`, `alien`];
    }
    takeTurnClassic(){
         return this.optionsClassic[this.randomNumberGenerator(3)]
    }
    takeTurnModern(){
        return this.optionsModern[this.randomNumberGenerator(5)]
   }

    randomNumberGenerator(max){
        return Math.floor(Math.random() * max)
    }
}