class Game {
    constructor(player1, player2){
        this.player1 = new Player('Artan');
        this.player2 = new Player('bot');
        this.player1Choice = this.player1.takeTurn();
        this.player2Choice = this.player2.takeTurn();
        this.winner = this.checkWinner();
    }

    checkWinner(){
        if (this.player1Choice === this.player2Choice) {
            console.log(`draw`);
            return this.winner = `draw`;
        }
        if (this.player1Choice === `rock` && this.player2Choice === `scissors`) {
            console.log(`rock beats scissors, player 1 wins`);
            this.player1.wins++;
            return this.winner = `player1`;
        }
        if (this.player1Choice === `paper` && this.player2Choice === `rock`) {
            console.log(`paper beats rock, player 1 wins`);
            this.player1.wins++;
            return this.winner = `player1`;
        }
        if (this.player1Choice === `scissors` && this.player2Choice === `paper`) {
            console.log(`scissors beats paper, player 1 wins`);
            this.player1.wins++;
            return this.winner = `player1`;
        }
        console.log(`player 2 wins`);
        this.player2.wins++;
        return this.winner = `player2`;
    }

}