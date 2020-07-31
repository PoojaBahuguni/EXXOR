import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanArrayService } from '../plan-array.service';

@Component({
  selector: 'app-mobile-pricing',
  templateUrl: './mobile-pricing.component.html',
  styleUrls: ['./mobile-pricing.component.scss']
})
export class MobilePricingComponent implements OnInit {
  public planName : string;
  public planArray = []
  public planDetails = []
  constructor(private route: ActivatedRoute,
              private planArrayService: PlanArrayService) { 
    this.planName = this.route.snapshot.paramMap.get('plan');
    this.planArray = this.planArrayService.getPlanDetails();
    this.planDetails = this.getPlanDictionary();
    console.log(this.planDetails);
    
  }

  ngOnInit(): void {
  }

  getPlanDictionary(){
    for( let plan of this.planArray){
      if(plan.plan === this.planName){
        return plan.details;
      }
    }
  }
}
