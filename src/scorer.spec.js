import showScore from "./scorer"

describe("Scorer", () => {
    it("deberia devolver Love-Love si el marcador es 0-0", () => {
        expect(showScore(0, 0)).toEqual("Love-Love")
    })

    it("deberia devolver 15-Love si el marcador es 1-0", () => {
        expect(showScore(1, 0)).toEqual("15-Love")
    })
})