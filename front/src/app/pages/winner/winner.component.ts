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
    scoresJoueurs = new Map()
    classement = new Array()
    premier = null
    fond1=null
    fond2=null
    fond3=null

    constructor(private gameService : GameService) {
        this.game=this.gameService.game
        this.premier = `joueur${this.gameService.game.winner}`
        this.scoresJoueurs.set(1, this.gameService.game.score[0])
        this.scoresJoueurs.set(2, this.gameService.game.score[1])
        this.scoresJoueurs.set(3, this.gameService.game.score[2])
        this.classement = Array.from(new Map([...this.scoresJoueurs].sort((a, b)=>b[1]-a[1])).keys())
        this.fond1=`fond${this.gameService.game.winner}`
        this.fond2 = `fond${this.classement[1]}`
        this.fond3 = `fond${this.classement[2]}`
    }
}