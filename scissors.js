class Scissors {
    constructor() {
        this.name = 'scissors';
    }
    compare (hand) {
        if (this.name === hand.name) {
            return 0;
        }
        if (hand.name === `rock` || hand.name === `alien`) {
            return -1;
        }
        if (hand.name === `lizard` || hand.name === `paper`) {
            return 1;
        }
    }
}