class Player {
    constructor(name, token){
        this.name = name;
        this.token = token;
        this.wins = 0;
        this.optionsClassic = [new Rock(), new Paper(), new Scissors()];
        this.optionsModern = [new Rock(), new Paper(), new Scissors(), new Alien(), new Lizard()];
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