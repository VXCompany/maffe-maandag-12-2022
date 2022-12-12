import { Injectable } from '@angular/core';
import { Medewerker } from './overzicht/medewerker';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MedewerkerService {

  private medewerkersUrl = 'https://api1.maffe-maandag.nl/medewerker'; 

  constructor(private http: HttpClient) { }

  public getMedewerkers(): Observable<Medewerker[]>{
    return  this.http.get<Medewerker[]>(this.medewerkersUrl);
  }
}
