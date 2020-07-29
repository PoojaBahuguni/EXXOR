import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs/operators';
import { GetScrollPositionService } from './get-scroll-position.service';
import { ScrollPosition } from './scroll-position.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
  
})
export class AppComponent implements OnInit{

  public menuFlag : boolean;
  title = 'sympsite';
  loaded = true;
  routeData 
  
  constructor(private router: Router, 
              private route:ActivatedRoute) {
    this.router.events.pipe(
      filter(e => {
        return e instanceof NavigationEnd;
      }),
    ).forEach(e => {
      this.routeData = route.root.firstChild.snapshot.data.state;
      if(this.routeData === "contact")
    {
      document.body.style.background = "linear-gradient(90deg, rgba(0,0,0,.8) 50%, white  50%)"
      
    }
    else{
      document.body.style.background = "rgba(0,0,0,.8)"
    }
    
    });
    
  }

  ngOnInit(){
    
    this.menuFlag = false;
    this.loaded = true;
    (async () => { 
      // Do something before delay
      // console.log('before delay')

      await this.delay(2000);

      // Do something after
      // console.log('after delay')
  })();
    this.loaded = false;
    
  }
  
  delay(ms: number) {
    // console.log("inside delay");
    
    return new Promise( resolve => setTimeout(resolve, ms) );
}
  getState(outlet){
    return outlet.activatedRouteData.state;
  }

  menuClickedHandlerApp(menuFlag: boolean){
    this.menuFlag = menuFlag
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    
  }

  menuCloseClicked(){
    this.menuFlag = false;
    this.unsetBodyStylePosition();
  }

  aboutClicked(){
    this.menuFlag = false;
    this.unsetBodyStylePosition();
    this.scrollToElement('about');
  }

  contactClicked(){
    this.menuFlag = false;
    this.unsetBodyStylePosition();
    this.scrollToElement('contact');
  }

  pricingClicked(){
    this.menuFlag = false;
    this.unsetBodyStylePosition();
    this.scrollToElement('pricing')
  }

  unsetBodyStylePosition(){
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }

  scrollToElement(element: string){
    const el = document.getElementById(element);
    el.scrollIntoView({behavior: "smooth", inline: "start", block: "start"});
  }
}
