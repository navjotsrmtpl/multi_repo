import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'host-app';

  handleCounter() {
    const coustomEvent = new Event("controlMFEevent");
    window.dispatchEvent(coustomEvent)
  }
}
