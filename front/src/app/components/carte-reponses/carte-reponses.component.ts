import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carte-reponses',
  templateUrl: './carte-reponses.component.html',
  styleUrls: ['./carte-reponses.component.css']
})
export class CarteReponsesComponent implements OnInit {
  @Input()
  reponseUne: string;
  @Input()
  reponseDeux: string;
  @Input()
  reponseTrois: string;
  @Input()
  reponseQuatre: string;
  @Input()
  reponseCinq: string;
  constructor() { }
  @Input()
  categorie: string;

  ngOnInit(): void {
  }

}
