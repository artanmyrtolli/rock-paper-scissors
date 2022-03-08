class Player {
    constructor(name){
        this.name = name;
        this.token = "./assets/fighters/Paladin.png";
        this.wins = 0;
        this.optionsClassic = [rock, paper, scissors];
        this.optionsModern = [rock, paper, scissors, lizard, alien];
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