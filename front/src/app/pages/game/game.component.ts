import { Component } from '@angular/core';
import {CarteService} from '../../services/carte.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {

    etape = 1
    lastEtape =4
    nombreDeJoueur = 3
    joueurQuiJoue = 1
    numCaseJoueurs = [1,1,1]
    carte = null
    constructor(private carteService : CarteService) {
    }

    nextJoueur(){
        this.joueurQuiJoue ++
        if (this.joueurQuiJoue>this.nombreDeJoueur) {
            this.joueurQuiJoue=1
        }
    }

    tirerCarte(){
        this.carteService.tirerCarte(this.numCaseJoueurs[this.joueurQuiJoue-1]).subscribe(carte => this.carte = carte)
        this.nextEtape()
    }

    nextEtape(){
        this.etape ++
        if (this.etape>this.lastEtape) {
            this.nextJoueur()
            this.etape=1
        }
    }

}