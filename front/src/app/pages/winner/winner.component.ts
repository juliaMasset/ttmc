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
    fondJ1=null
    fondJ2=null
    fondJ3=null

    constructor(private gameService : GameService) {
        this.game=this.gameService.game
        this.premier = `joueur${this.gameService.game.winner}`
        this.scoresJoueurs.set(1, this.gameService.game.score[0])
        this.scoresJoueurs.set(2, this.gameService.game.score[1])
        this.scoresJoueurs.set(3, this.gameService.game.score[3])
        this.classement = Array.from(new Map([...this.scoresJoueurs].sort((a, b)=>b[1]-a[1])).keys())
        this.fondJ1=`fondJ${this.gameService.game.winner}`
        this.fondJ2 = `fondJ${this.classement[1]}`
        this.fondJ3 = `fondJ${this.classement[2]}`
    }
}