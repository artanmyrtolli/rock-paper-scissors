class Game {
    constructor(player1, player2, mode){
        this.player1 = new Player(player1);
        this.player2 = new Player(player2);
        this.mode = mode || `classic`;
        if (this.mode === `classic`) {
            this.player1Choice = this.player1.takeTurnClassic();
            this.player2Choice = this.player2.takeTurnClassic();
        }
        if (this.mode === `modern`) {
            this.player1Choice = this.player1.takeTurnModern();
            this.player2Choice = this.player2.takeTurnModern();
        }
        this.winner = this.checkWinner();
    }

    checkWinner(){
        if (this.mode === `classic`) {
            return this.checkWinnerClassic();
        }
        if (this.mode === `modern`) {
            return this.checkWinnerModern();
        }
    }


    checkWinnerClassic(){
            if (this.player1Choice.compare(this.player2Choice) < 0) {
                return `${this.player2.name} wins.`
            }
            if (this.player1Choice.compare(this.player2Choice) === 0) {
                return `This match is a draw`
            }
            if (this.player1Choice.compare(this.player2Choice) > 0) {
                return `${this.player1.name} wins.`
            }
    }
    checkWinnerModern(){

        if (this.player1Choice.compare(this.player2Choice) < 0) {
            return `${this.player2.name} wins.`
        }
        if (this.player1Choice.compare(this.player2Choice) === 0) {
            return `This match is a draw`
        }
        if (this.player1Choice.compare(this.player2Choice) > 0) {
            return `${this.player1.name} wins.`
        }
    }
}
