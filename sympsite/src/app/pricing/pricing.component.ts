import { Component, OnInit, AfterViewInit,ViewChild, ElementRef } from '@angular/core';
import { pricingAnimation, slideButton ,slideLeftAnimation} from '../app.animations';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  animations : [pricingAnimation, slideButton,slideLeftAnimation]
})

export class PricingComponent implements AfterViewInit {
  planArray 
  clicked = false
  state = "stay"
  card
  @ViewChild('card', {static:false}) divView: ElementRef;

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

  ngAfterViewInit(){

    console.log(this.divView);
    

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
  detailsClicked(plan){
    this.state = "move"
    this.planArray = this.planArray.filter(function(obj) {
      return obj.plan == plan;
      });
  
      (async () => { 
        // Do something before delay
        console.log(this.state)
        
        await this.delay(2000);
        this.state = "inview"
        // Do something after
        console.log(this.state)
    })();
  
  this.clicked = true
  // this.state = "inview"
  }
}
