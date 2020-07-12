import { Component, OnInit, AfterViewInit,ViewChild, ElementRef } from '@angular/core';
import { pricingAnimation, slideButton ,slideLeftAnimation} from '../app.animations';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  animations : [pricingAnimation, slideButton,slideLeftAnimation]
})

export class PricingComponent implements OnInit {
  planArray 
  clicked = false

  constructor() { 
    this.planArray = [ { 
                         plan: 'BASIC', 
                         description: 'Perfect for most businesses who want to look their best and convert leads',
                         cost: ' 56,640/-'
                        },
                         {
                           plan: 'PROFESSIONAL', 
                           description: 'Perfect for businesses who have dynamic website content and functionality',
                           cost: ' 1,09,740/-'
                         },
                         {
                          plan: 'PREMIUM', 
                          description: 'Perfect for e-tailers and businesses that have large sites or online catalogues',
                          cost: ' 1,60,480/-'
                        }                        
  ]
  }

ngOnInit(){

}
  delay(ms: number) {
    // console.log("inside delay");
    
    return new Promise( resolve => setTimeout(resolve, ms) );
}
  detailsClicked(plan){
    
    this.planArray = this.planArray.filter(function(obj) {
      return obj.plan == [{}];
      });
      // console.log("started waiting");
      
      (async () => { 
        // Do something before delay
        console.log('before delay')

        await this.delay(2000);

        // Do something after
        console.log('after delay')
    })();
    // console.log("waiting ended");
    
    this.clicked = true
  }
}
