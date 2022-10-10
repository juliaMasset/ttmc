import {Component, OnInit} from '@angular/core';
import {CarteService} from '../../services/carte.service';
import {NgForm} from '@angular/forms';
import { defaultsDeep } from 'lodash';
import {Router} from '@angular/router';
import {GameService} from '../../services/game.service';


@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    niveauQuestion = null
    etape = 1
    lastEtape = 4
    nombreDeJoueur = 3
    joueurQuiJoue = 1
    joueur = `joueur${this.joueurQuiJoue}`
    numCaseJoueurs = [1, 1, 1]
    carte = null

    constructor(private carteService: CarteService, private router: Router) {
    }

    nextJoueur() {
        this.joueurQuiJoue++
        this.joueur = `joueur${this.joueurQuiJoue}`
        if (this.joueurQuiJoue > this.nombreDeJoueur) {
            this.joueurQuiJoue = 1
            this.joueur = `joueur${this.joueurQuiJoue}`
        }
    }

    tirerCarte() {
        this.carteService.tirerCarte(this.numCaseJoueurs[this.joueurQuiJoue - 1]).subscribe(carte => this.carte = carte)
        this.nextEtape()
    }

    nextEtape() {
        this.etape++
        if(this.numCaseJoueurs[this.joueurQuiJoue - 1] >= 35){
            this.router.navigateByUrl('winner')
        }
        if(this.etape > this.lastEtape) {
            this.nextJoueur()
            this.etape = 1
        }
    }

    modifScore(){
        this.numCaseJoueurs[this.joueurQuiJoue - 1] += this.niveauQuestion
        this.nextEtape()
    }

    ngOnInit() {
    }

    onSubmit(ngForm: NgForm) {
        console.log(ngForm);
        this.niveauQuestion = parseInt(ngForm.form.value.niveau, 10)
        console.log(this.niveauQuestion)
        this.nextEtape()
    }
}