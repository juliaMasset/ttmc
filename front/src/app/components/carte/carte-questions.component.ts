import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte-questions.component.html',
  styleUrls: ['./carte-questions.component.css']
})
export class CarteQuestionsComponent implements OnInit {
@Input()
titre: string;
  @Input()
  categorie: string;
  @Input()
questionUne: string;
  @Input()
questionDeux: string;
  @Input()
questionTrois: string;
  @Input()
questionQuatre: string;
  @Input()
questionCinq: string;

  constructor() { }

  ngOnInit(): void {
  }

}
