import { defaultsDeep } from 'lodash';

export class Carte {
  id: number;
  categorie: string;
  titre: string;
  questionUne: string;
  questionDeux: string;
  questionTrois: string;
  questionQuatre: string;
  questionCinq: string;
  reponseUne: string;
  reponseDeux: string;
  reponseTrois: string;
  reponseQuatre: string;
  reponseCinq: string;

  constructor(carte?: Partial<Carte>) {
    defaultsDeep(this, carte);
  }
}
