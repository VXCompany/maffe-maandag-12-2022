import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Professional} from "../../../klantbeeld/entities/Professional";
import {Observable} from "rxjs";
import {storeOutputsWatcherSubscription} from "nx/src/daemon/server/shutdown-utils";

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor(private httpClient: HttpClient) {

  }

  getAllProfessionals() : Observable<Professional[]> {
    return this.httpClient.get<Professional[]>("https://api2.maffe-maandag.nl/profs")
  }

  deleteAProfessional(id: number) : void {
    this.httpClient.delete("https://api2.maffe-maandag.nl/profs/" + id)
      .subscribe({
        next: data => {
          // this.status = 'Delete successful';
        },
        error: error => {
          // this.errorMessage = error.message;
          console.error('There was an error!', error);
        }
      });
  }

  addAProfessional(): Professional {
    const rndInt = this.randomIntFromInterval(1, 3);
    const value : Professional = {
      id: Math.round(Math.random() * 1000000),
      name: "Geen zin om dit te implementeren",
      happinessindex: rndInt
    };
    console.log(JSON.stringify(value))
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'});
    // const options = { headers: headers };
    this.httpClient.post<Professional>("https://api2.maffe-maandag.nl/profs", JSON.stringify(value)).subscribe((res) => {
      console.log(res);
    })
    return value;
  }

  randomIntFromInterval(min: number, max: number) : number{ // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
