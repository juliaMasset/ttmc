import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm} from '@angular/forms';
import {CarteService} from '../../services/carte.service';
import { defaultsDeep } from 'lodash';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-carte',
  templateUrl: './add-carte.component.html',
  styleUrls: ['./add-carte.component.css']
})
export class AddCarteComponent implements OnInit {

  constructor(private carteService: CarteService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    const carte = defaultsDeep({
      id: null,
      categorie: ngForm.form.value.categorie,
      titre: ngForm.form.value.titre,
      questionUne: ngForm.form.value.questionUne,
      questionDeux: ngForm.form.value.questionDeux,
      questionTrois: ngForm.form.value.questionTrois,
      questionQuatre: ngForm.form.value.questionQuatre,
      questionCinq: ngForm.form.value.questionCinq,
      reponseUne: ngForm.form.value.reponseUne,
      reponseDeux: ngForm.form.value.reponseDeux,
      reponseTrois: ngForm.form.value.reponseTrois,
      reponseQuatre: ngForm.form.value.reponseQuatre,
      reponseCinq: ngForm.form.value.reponseCinq,
    });

    this.carteService.addCarte(carte).subscribe(() => this.router.navigateByUrl('list-cartes'));

  }
}

