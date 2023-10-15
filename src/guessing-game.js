class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.result = 0;
    }
    

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        // Make assumption based on the range's midpoint
        this.result = Math.round((this.max + this.min) / 2);
        return this.result;
    }

    lower() {
        this.max = this.result - 1;
    }

    greater() {
        this.min = this.result + 1;
    }
}

module.exports = GuessingGame;
