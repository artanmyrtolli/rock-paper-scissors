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
        if (this.player1Choice === this.player2Choice) {
            return this.winner = `draw`;
        }
        if (this.player1Choice === `rock` && this.player2Choice === `scissors`) {
            this.player1.wins++;
            return this.winner = `player1`;
        }
        if (this.player1Choice === `paper` && this.player2Choice === `rock`) {
            this.player1.wins++;
            return this.winner = `player1`;
        }
        if (this.player1Choice === `scissors` && this.player2Choice === `paper`) {
            this.player1.wins++;
            return this.winner = `player1`;
        }
        this.player2.wins++;
        return this.winner = `player2`;
    }
    checkWinnerModern(){
        if (this.player1Choice === this.player2Choice) {
            return this.winner = `draw`;
        }
        if (this.player1Choice === `rock` && (this.player2Choice === `scissors` || this.player2Choice === `lizard`)) {
            this.player1.wins++;
            return this.winner = `player1`;
        }
        if (this.player1Choice === `paper` && (this.player2Choice === `alien` || this.player2Choice === `rock`)) {
            this.player1.wins++;
            return this.winner = `player1`;
        }
        if (this.player1Choice === `scissors` && (this.player2Choice === `lizard` || this.player2Choice === `paper`)) {
            this.player1.wins++;
            return this.winner = `player1`;
        }
        if (this.player1Choice === `lizard` && (this.player2Choice === `paper` || this.player2Choice === `alien`)) {
            this.player1.wins++;
            return this.winner = `player1`;
        }
        if (this.player1Choice === `alien` && (this.player2Choice === `rock` || this.player2Choice === `scissors`)) {
            this.player1.wins++;
            return this.winner = `player1`;
        }
        this.player2.wins++;
        return this.winner = `player2`;
    }
}
