import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GetScrollPositionService } from '../get-scroll-position.service';
import { ScrollPosition } from '../scroll-position.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-mobile-homepage',
  templateUrl: './mobile-homepage.component.html',
  styleUrls: ['./mobile-homepage.component.scss']
})
export class MobileHomepageComponent implements OnInit {
  public planArray
  public scrollY : ScrollPosition = {
    pricingY: 0,
    aboutY: 0,
    contactY:0
  };
  a : any;
  constructor(private getScrollPosService: GetScrollPositionService) { 
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
    console.log(this.planArray);
    
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
}
