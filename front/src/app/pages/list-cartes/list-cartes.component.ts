import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarteService} from '../../services/carte.service';
import {Carte} from '../../models/carte.model';

@Component({
    selector: 'app-list-cartes',
    templateUrl: './list-cartes.component.html',
    styleUrls: ['./list-cartes.component.css']
})
export class ListCartesComponent implements OnInit {

    reponsesAffichees = false;
    cartes: Carte[];
    currentCarteId: number;

    constructor(private http: HttpClient,private carteService: CarteService) {
        this.cartes=[];
    }

    ngOnInit() {
        this.carteService.getCartes().subscribe(cartes => this.cartes = cartes);
    }

    deleteCarte(id: number) {
        this.carteService.deleteCarte(id).subscribe(succes => {
            this.cartes = this.cartes.filter(carte => carte.id !== id)
        });
    }

    clickMethod(id: number) {
        if(confirm('Es-tu sûr de vouloir supprimer cette carte ?')) {
            this.deleteCarte(id);
        }
    }

    showReponses(cardId: number) {
        this.reponsesAffichees=!this.reponsesAffichees;
        this.currentCarteId=cardId;
    }

}