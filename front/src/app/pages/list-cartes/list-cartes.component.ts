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
    displayStyle = 'none';
    idToDelete : number;

    constructor(private http: HttpClient,private carteService: CarteService) {
        this.cartes=[];
    }

    ngOnInit() {
        this.carteService.getCartes().subscribe(cartes => this.cartes = cartes);
    }

    deleteCarte() {
        this.carteService.deleteCarte(this.idToDelete).subscribe(succes => {
            this.cartes = this.cartes.filter(carte => carte.id !== this.idToDelete)
        });
        console.log('deletecarte:' + this.idToDelete);
        this.closePopup();
    }

    openPopup(id: number){
        this.displayStyle = 'block';
        this.idToDelete = id;
        console.log(id);
    }

    closePopup(){
        this.displayStyle = 'none';
        this.idToDelete = null;
    }

    showReponses(cardId: number) {
        this.reponsesAffichees=!this.reponsesAffichees;
        this.currentCarteId=cardId;
    }

}