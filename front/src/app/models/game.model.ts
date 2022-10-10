export class GameModel {
    winner : number
    score = []

    constructor(winner: number, score: any[]) {
        this.winner = winner;
        this.score = score;
    }
}