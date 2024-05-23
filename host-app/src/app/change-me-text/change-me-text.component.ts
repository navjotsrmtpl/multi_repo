import { Component } from '@angular/core';

@Component({
  selector: 'app-change-me-text',
  templateUrl: './change-me-text.component.html',
  styleUrls: ['./change-me-text.component.scss']
})
export class ChangeMeTextComponent {
  changemetext = "this is host application"

  constructor() {
    window.addEventListener("controlHosttext", (e: any) => {
      this.changemetext = e?.detail;
    })
  }

}
