import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-homepage',
  templateUrl: './mobile-homepage.component.html',
  styleUrls: ['./mobile-homepage.component.scss']
})
export class MobileHomepageComponent implements OnInit {

  public planArray = []
  constructor() { 
    this.planArray = [ { 
      plan: 'BASIC', 
      description: 'Perfect for most businesses who want to look their best and convert leads',
      cost: ' 50,000/-'
     },
      {
        plan: 'PROFESSIONAL', 
        description: 'Perfect for businesses who have dynamic website content and functionality',
        cost: ' 95,000/-'
      },
      {
       plan: 'PREMIUM', 
       description: 'Perfect for e-tailers and businesses that have large sites or online catalogues',
       cost: ' 1,40,000/-'
     }                        
]
  }

  ngOnInit() {
  }

}
