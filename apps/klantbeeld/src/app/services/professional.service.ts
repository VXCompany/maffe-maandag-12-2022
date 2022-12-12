import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Professional} from "../../../klantbeeld/entities/Professional";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor(private httpClient: HttpClient) {

  }

  getAllProfessionals() : Observable<Professional[]> {
    return this.httpClient.get<Professional[]>("https://api2.maffe-maandag.nl/profs")
  }
}
