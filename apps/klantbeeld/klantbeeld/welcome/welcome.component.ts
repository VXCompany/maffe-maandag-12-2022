import { Component, OnInit } from '@angular/core';
import { Professional } from '../entities/Professional';
import { ProfessionalService } from '../../src/app/services/professional.service';
import { HttpClient } from '@angular/common/http';
import { ChuckJoke } from '../entities/ChuckJoke';

@Component({
  selector: 'maffe-maandag-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  professionals: Professional[] = [];
  joke = '';

  constructor(
    private professionalService: ProfessionalService,
    private client: HttpClient
  ) {}

  voegProfessionalToe() {
    return '';
  }

  ngOnInit(): void {
    this.professionalService.getAllProfessionals().subscribe((res) => {
      this.professionals = res;
    });
    this.getJoke();
  }

  getJoke() {
    this.client
      .get<ChuckJoke>('https://api.chucknorris.io/jokes/random')
      .subscribe({
        next: (res: ChuckJoke) => {
          this.joke = res.value;
        },
      });
  }
}
