import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
  
})
export class AppComponent {
  title = 'sympsite';

  constructor(private route:ActivatedRoute) {
  }
  getState(outlet){
    return outlet.activatedRouteData.state;
  }
}
