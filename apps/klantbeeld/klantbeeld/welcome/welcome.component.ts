import {Component, OnInit} from '@angular/core';
import {Professional} from "../entities/Professional";
import {ProfessionalService} from "../../src/app/services/professional.service";

@Component({
  selector: 'maffe-maandag-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  professionals : Professional[] = [];

  constructor(private professionalService : ProfessionalService){

  }

  voegProfessionalToe() {
    return "";
  }

  ngOnInit(): void {
    this.professionalService.getAllProfessionals().subscribe((res) => {
      this.professionals = res;
    })
  }
}
