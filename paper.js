class Paper {
    constructor() {
        this.name = 'paper';
    }
    compare (hand) {
        if (this.name === hand.name) {
            return 0;
        }
        if (hand.name === `scissors` || hand.name === `lizard`) {
            return -1;
        }
        if (hand.name === `alien` || hand.name === `rock`) {
            return 1;
        }
    }
}