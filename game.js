class Game {
    constructor(player1, input, mode){
        this.player1 = new Player(player1);
        this.player2 = new Player('CPU');
        this.mode = mode || `classic`;
        if (this.mode === `classic`) {
            this.player1Choice = this.player1.takeTurnClassic(input);
            this.player2Choice = this.player2.takeTurnClassic();
        }
        if (this.mode === `modern`) {
            this.player1Choice = this.player1.takeTurnModern(input);
            this.player2Choice = this.player2.takeTurnModern();
        }
        this.winner = this.checkWinner();
    }

    checkWinner(){
        if (this.player1Choice.compare(this.player2Choice) < 0) {
            this.player2.wins++;
            return `${this.player2.name} wins.`
        }
        if (this.player1Choice.compare(this.player2Choice) === 0) {
            return `This match is a draw!`
        }
        if (this.player1Choice.compare(this.player2Choice) > 0) {
            this.player1.wins++;
            return `${this.player1.name} wins.`
        }
    }
}
