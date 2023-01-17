class Bot {
    makeMove(gamestate) {
        let randomIndex1 = Math.floor(5 * Math.random())
        let randomIndex2 = Math.floor(4 * Math.random())
        let randomIndex3 = Math.floor(3 * Math.random())
        let count1 = 0;
        let count2 = 0;
        for (let round of gamestate.rounds) {
            if (round.p1 === 'D') {
                count1++
            }
            if (round.p2 === 'D') {
                count2++
            }
        }

        if (gamestate.rounds.length >= 1 && gamestate.rounds[gamestate.rounds.length - 1].p1 === gamestate.rounds[gamestate.rounds.length - 1].p2 && count1 < 100) {
            return ['R', 'P', 'S', 'D'][randomIndex2];
        }

        else {
            return ['R', 'P', 'S'][randomIndex3];
        }
    }
}

module.exports = new Bot();
