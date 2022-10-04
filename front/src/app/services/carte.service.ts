import { Injectable } from '@angular/core';
import {Carte} from '../models/carte.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {timeout} from 'rxjs/operators';
import { defaultsDeep } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getCartes(): Observable<Carte[]> {
    return this.http.get<Carte[]>(`${this.url}/cartes`).pipe(timeout(10000));

  }

  addCarte(carte: Carte): Observable<Carte> {
    return this.http.post<any>(`${this.url}/cartes`, carte).pipe(timeout(10000));
  }

  deleteCarte(id: number): Observable<any> {
    return this.http.delete(`${this.url}/cartes/${id}`).pipe(timeout(10000));
  }

  tirerCarte(numCase: number ):Observable<Carte> {
    return this.http.get<Carte>(`${this.url}/cartes/tirerCarte/${numCase}`).pipe(timeout(10000));
  }

}
