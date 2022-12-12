import { Component, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'maffe-maandag-nx-welcome',
  templateUrl: './chat-boksbal.component.html',
  styleUrls: ['./chat-boksbal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChatBoksbalComponent {

  public test: string = "neutral";
  happy() {
    this.test = "happy";

  }

  unhappy() {
    this.test = "unhappy";
  }
}
