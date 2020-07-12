import { Component, OnInit } from '@angular/core';
import { aboutIllustration, aboutParagraph } from '../app.animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations:[aboutIllustration,aboutParagraph]
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  mouseWheelDownFunc(event){
    console.log("mouse wheel down");
    
    this.router.navigateByUrl('pricing');
  }

  mouseWheelUpFunc(event){
    console.log("up");
    
    this.router.navigateByUrl('home')
  }
}
