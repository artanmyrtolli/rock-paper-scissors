class Player {
    constructor(name){
        this.name = name;
        this.token = "./assets/fighters/Paladin.png";
        this.wins = 0;
        this.optionsClassic = [new Rock(), new Paper(), new Scissors()];
        this.optionsModern = [new Rock(), new Paper(), new Scissors(), new Alien(), new Lizard()];
    }
    takeTurnClassic(input){
         return input || this.optionsClassic[this.randomNumberGenerator(3)]
    }
    takeTurnModern(input){
        return input || this.optionsModern[this.randomNumberGenerator(5)]
   }

    randomNumberGenerator(max){
        return Math.floor(Math.random() * max)
    }
}