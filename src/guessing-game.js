class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.result = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess()
    {
        this.result = Math.round(this.min + ((this.max - this.min) / 2));
        return this.result;
    }
    lower() {

        this.max = this.result;
        return this.max;
    }

    greater() {
        this.min = this.result;
        return this.min;
    }
}

module.exports = GuessingGame;
