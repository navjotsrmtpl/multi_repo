import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter = 0;

  constructor() {
    window.addEventListener("controlMFEevent", () => {
      this.handleCounter();
    })
  }

  handleCounter() {
    this.counter = this.counter + 1;
  }

  handlehostText(e: any) {
    const customEvent = new CustomEvent("controlHosttext", { detail: e?.target?.value });
    window.dispatchEvent(customEvent);
  }

}
