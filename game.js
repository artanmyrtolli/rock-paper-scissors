class Game {
    constructor(player1, player2, input, mode){
        this.player1 = player1;
        this.player2 = player2;
        this.mode = mode || `classic`;
        this.player1Choice = input;
        if (this.mode === `classic`) {
            this.player2Choice = this.player2.takeTurnClassic();
        }
        if (this.mode === `modern`) {
            this.player2Choice = this.player2.takeTurnModern();
        }
        this.winner = this.checkWinner();
    }
    checkWinner(){
        if (this.player1Choice.compare(this.player2Choice) > 0) {
            this.player1.wins++;
            return `player`
        }
        if (this.player1Choice.compare(this.player2Choice) === 0) {
            return `draw`
        }
        if (this.player1Choice.compare(this.player2Choice) < 0) {
            this.player2.wins++;
            return `cpu`
        }
    }
}
