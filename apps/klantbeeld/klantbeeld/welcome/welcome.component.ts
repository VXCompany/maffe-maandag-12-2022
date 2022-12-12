import {Component, OnInit} from '@angular/core';
import {Professional} from "../entities/Professional";
import {ProfessionalService} from "../../src/app/services/professional.service";
import {HttpClient} from "@angular/common/http";
import {ChuckJoke} from "../entities/ChuckJoke";

@Component({
  selector: 'maffe-maandag-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  professionals : Professional[] = [];

  joke = "";

  constructor(private professionalService : ProfessionalService, private httpClient: HttpClient){

  }

  voegProfessionalToe() {
    const value = this.professionalService.addAProfessional();
    if(value.happinessindex === 3 ){
      this.getJoke();
    }
    this.professionals.push(value);
  }

  ngOnInit(): void {
    this.professionalService.getAllProfessionals().subscribe((res) => {
      this.professionals = res;
    });
  }

  deleteTheRecord(id: number) {
    this.professionalService.deleteAProfessional(id);
    // this.professionals.filter((res) => res.id !== id)
    this.professionals = this.professionals.filter((obj) => {
      return obj.id !== id;
    });
  }

  getJoke() {
    this.httpClient
      .get<ChuckJoke>('https://api.chucknorris.io/jokes/random')
      .subscribe({
        next: (res: ChuckJoke) => {
          this.joke = res.value;
        },
      });
  }
}
