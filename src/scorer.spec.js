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

    it("deberia devolver Love-15 si el marcador es 0-1", () => {
        const scorer = new TennisScorer();
        scorer.player2Scores();
        expect(scorer.showScore()).toEqual("Love-15")
    })

    it("deberia devolver Love-30 si el marcador es 0-2", () => {
        const scorer = new TennisScorer();
        scorer.player2Scores();
        scorer.player2Scores();
        expect(scorer.showScore()).toEqual("Love-30")
    })
})