import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GetScrollPositionService } from '../get-scroll-position.service';
import { ScrollPosition } from '../scroll-position.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mobile-homepage',
  templateUrl: './mobile-homepage.component.html',
  styleUrls: ['./mobile-homepage.component.scss']
})
export class MobileHomepageComponent implements OnInit {
  form: FormGroup;
  description = new FormControl("", Validators.required);
  public planArray
  public scrollY : ScrollPosition = {
    pricingY: 0,
    aboutY: 0,
    contactY:0
  };
  a : any;
  dataset: Details = {
    description:''
  };

  constructor(private getScrollPosService: GetScrollPositionService,
              private router: Router,
              private https: HttpClient, 
              fb: FormBuilder) 
  { 
    this.form = fb.group({
      "description": this.description,    
    });
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
    // console.log(this.planArray);
    
  }

  ngOnInit() {
  
    const aboutY = document.getElementById('about').offsetTop;
    const pricingY = document.getElementById('pricing').offsetTop;
    const contactY = document.getElementById('contact').offsetTop;
    this.scrollY['aboutY'] = aboutY;
    this.scrollY['pricingY'] = pricingY;
    this.scrollY['contactY'] = contactY;
    // console.log(this.scrollY);
    this.getScrollPosService.pushScrollY(this.scrollY);
  }


  config: SwiperConfigInterface = {
    slidesPerView: 2,
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    width: 440
  };

  detailsClicked(plan: string){
    this.router.navigate(["/pricing", plan]);
  }

  onSubmit(){
    console.log(this.form.value);
    this.dataset.description = this.form.value.description
    console.log(this.dataset.description);
    
    this.https.post<Details>('http://localhost:8080/testapp/getdetails', this.dataset).subscribe(
      res => {
        this.dataset = res;
        console.log(this.dataset);
        alert('Email Sent successfully');
        this.dataset.description = null;
        
      });
  }
}

interface Details
{
  description:string;
}
