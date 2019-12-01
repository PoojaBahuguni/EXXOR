import { Component } from '@angular/core';
import { scrollAnimation, } from './app.animations';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'sympsite';
  constructor(private router: Router) {
    router.events.subscribe((val) => {
         if(this.router.url === "/contact"){
           document.body.style.backgroundColor = "rgba(0,0,0,.8)"
         }
         else{
          document.body.style.backgroundColor = "rgba(0,0,0,.8)"
         }
    });
  }
  getState(outlet){
    return outlet.activatedRouteData.state;
  }
}
