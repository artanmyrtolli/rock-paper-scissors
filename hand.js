class Hand {
    constructor(name, wins, loses){
        this.name = name;
        this.wins = wins;
        this.loses = loses;
    }
    compare(hand){
        if (this.loses.includes(hand.name)) return -1;
        if (this.wins.includes(hand.name)) return 1;
        return 0;
    }
}