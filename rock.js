class Rock {
    constructor() {
        this.name = 'rock';
    }
    compare (hand) {
        if (this.name === hand.name) {
            return 0;
        }
        if (hand.name === `paper` || hand.name === `alien`) {
            return -1;
        }
        if (hand.name === `scissors` || hand.name === `lizard`) {
            return 1;
        }
    }
}