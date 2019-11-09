import { Component } from '@angular/core';
import { scrollAnimation } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [scrollAnimation]
})
export class AppComponent {
  title = 'sympsite';

  getState(outlet){
    return outlet.activatedRouteData.state;
  }
}
