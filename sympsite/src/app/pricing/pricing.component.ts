import { Component, OnInit, HostBinding, AfterViewChecked, OnDestroy, ViewChild } from '@angular/core';
import { pricingAnimation, slideButton ,slideLeftAnimation} from '../app.animations';
import { timer } from 'rxjs';
import { PlanArrayService } from '../plan-array.service';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  animations : [pricingAnimation, slideButton, slideLeftAnimation]
})

export class PricingComponent implements OnInit, OnDestroy{
  public planArray = undefined;
  public arrayState: string = 'full';
  clicked = false
  showDiv = true
  constructor(private planArrayService: PlanArrayService) { 
    this.planArray = planArrayService.getPlanArray();
  }

ngOnInit(){ }

ngOnDestroy(){ }

  

  detailsClicked(plan){
    // console.log(this.arrayState);
    
    if(plan === "BASIC"){
      this.showDiv = false;
    }
    else{
      this.showDiv = true;
    }
    this.arrayState = 'empty';
    timer(1500).subscribe(x => { 
      
      this.planArray = this.planArray.filter(function(obj) {
      return obj.plan == [{}];
      });;
    });
    
    // console.log(this.arrayState);
    
    
    
   
    this.clicked = true
  }

  backClicked(){
      this.clicked = false;
      this.arrayState = "full";
      this.planArray = this.planArrayService.getPlanArray();
        

  }

  
}
