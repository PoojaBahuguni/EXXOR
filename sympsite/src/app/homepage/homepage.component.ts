import { Component, OnInit, HostListener, Directive } from '@angular/core';
import { appearAnimation, screenAnimation, treesDestroyAnimation, lightSpeedAnimation } from '../app.animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [appearAnimation, 
                screenAnimation,
                treesDestroyAnimation,
                lightSpeedAnimation,
              ],
})
export class HomepageComponent {
  
  constructor(private router: Router) { 
    
  }

  mouseWheelDownFunc(event){
    
    this.router.navigateByUrl('about');
  }
}
