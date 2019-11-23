import { Component, OnInit } from '@angular/core';
import { pricingAnimation, slideButton } from '../app.animations';
import { PricingPlan } from '../app.planmodel';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  animations : [pricingAnimation, slideButton]
})

export class PricingComponent implements OnInit {
  planArray : PricingPlan
  constructor() { 
    this.planArray = [ { 
                         plan: 'BASIC', 
                         description: 'Perfect for most businesses who want to look their best and convert leads',
                         cost: '45,000/-'
                        },
                         {
                           plan: 'PROFESSIONAL', 
                           description: 'Perfect for businesses who have dynamic website content and functionality',
                           cost: '90,000/-'
                         },
                         {
                          plan: 'PREMIUM', 
                          description: 'Perfect for e-tailers and businesses that have large sites or online catalogues',
                          cost: '1,50,000/-'
                        }                        
  ]
  }

  ngOnInit() {
  }

}
