import { Component } from '@angular/core';
import {GameService} from '../../services/game.service';
import {GameModel} from '../../models/game.model';

@Component({
    selector: 'app-winner-page',
    templateUrl: './winner.component.html',
    styleUrls: ['./winner.component.css']
})
export class WinnerComponent {

    game : GameModel
    premier = `joueur${this.gameService.game.winner}`
    scoresJoueurs = new Map()
    classement = new Array()

    constructor(private gameService : GameService) {
        this.game=this.gameService.game
        this.scoresJoueurs.set(1, this.gameService.game.score[0])
        this.scoresJoueurs.set(2, this.gameService.game.score[1])
        this.scoresJoueurs.set(3, this.gameService.game.score[3])
        this.classement = Array.from(new Map([...this.scoresJoueurs].sort((a, b)=>b[1]-a[1])).keys())
    }
}