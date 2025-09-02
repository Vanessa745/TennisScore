import TennisScorer from "./scorer"

describe("Scorer", () => {
    it("deberia devolver Love-Love si el marcador es 0-0", () => {
        const scorer = new TennisScorer();
        expect(scorer.showScore()).toEqual("Love-Love")
    })

    it("deberia devolver 15-Love si el marcador es 1-0", () => {
        const scorer = new TennisScorer();
        scorer.player1Scores();
        expect(scorer.showScore()).toEqual("15-Love")
    })

    it("deberia devolver 30-Love si el marcador es 2-0", () => {
        const scorer = new TennisScorer();
        scorer.player1Scores();
        scorer.player1Scores();
        expect(scorer.showScore()).toEqual("30-Love")
    })

    it("deberia devolver 40-Love si el marcador es 3-0", () => {
        const scorer = new TennisScorer();
        scorer.player1Scores();
        scorer.player1Scores();
        scorer.player1Scores();
        expect(scorer.showScore()).toEqual("40-Love")
    })
})