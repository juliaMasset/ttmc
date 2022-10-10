import {Injectable} from '@angular/core';
import {GameModel} from '../models/game.model';

@Injectable({
    providedIn: 'root'
})
export class GameService {

 game : GameModel

    constructor() {
    }

    saveGame(game : GameModel){
     this.game = game
    }
}