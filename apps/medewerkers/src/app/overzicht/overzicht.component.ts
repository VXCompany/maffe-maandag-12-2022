import { Component } from '@angular/core';
import { Medewerker } from './medewerker';

@Component({
  selector: 'maffe-maandag-overzicht',
  templateUrl: './overzicht.component.html',
  styleUrls: ['./overzicht.component.scss'],
})
export class OverzichtComponent {
  medewerkers: Medewerker[] = [new Medewerker("Eelco", "Angular Developer")];

}
