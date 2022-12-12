import { Component } from '@angular/core';
import { Medewerker } from './medewerker';
import { MedewerkerService } from '../medewerker.service';

@Component({
  selector: 'maffe-maandag-overzicht',
  templateUrl: './overzicht.component.html',
  styleUrls: ['./overzicht.component.scss'],
})
export class OverzichtComponent {
  medewerkers: Medewerker[] = [];

  /**
   *
   */
  constructor(private medewerkerService: MedewerkerService) {
    this.getMedewerkers();
  }

  getMedewerkers(): void {
    this.medewerkerService.getMedewerkers()
        .subscribe(medewerkers => this.medewerkers = medewerkers);
  }

}
