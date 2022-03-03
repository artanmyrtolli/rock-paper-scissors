class Alien {
    constructor() {
        this.name = 'alien';
    }
    compare (hand) {
        if (this.name === hand.name) {
            return 0;
        }
        if (hand.name === `paper` || hand.name === `lizard`) {
            return -1;
        }
        if (hand.name === `scissors` || hand.name === `rock`) {
            return 1;
        }
    }
}