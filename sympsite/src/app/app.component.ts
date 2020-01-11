import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
  
})
export class AppComponent {
  title = 'sympsite';
  routeData 
  constructor(private router: Router, private route:ActivatedRoute) {
    this.router.events.pipe(
      filter(e => {
        return e instanceof NavigationEnd;
      }),
    ).forEach(e => {
      this.routeData = route.root.firstChild.snapshot.data.state;
      console.log(this.routeData);
      if(this.routeData === "contact")
    {
      document.body.style.background = "linear-gradient(90deg, rgba(0,0,0,.8) 50%, white  50%)"
      
    }
    else{
      document.body.style.background = "rgba(0,0,0,.8)"
    }
    
    });
    
  }

  

  getState(outlet){
    return outlet.activatedRouteData.state;
  }
}
