import { Component, OnInit } from '@angular/core';
import { appearAnimation, screenAnimation, treesDestroyAnimation, lightSpeedAnimation } from '../app.animations';


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
  
  
  constructor() { 
    
  }

  
}
