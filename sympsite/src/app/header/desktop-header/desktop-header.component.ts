import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.scss']
})
export class DesktopHeaderComponent implements OnInit {
  public routeChanged : boolean;
  public routeData = null;
  constructor(private router: Router, private route: ActivatedRoute) { 
    this.router.events.pipe(
      filter(e => {
        return e instanceof NavigationEnd;
      }),
    ).forEach(e => {
      this.routeData = route.root.firstChild.snapshot.data.state;
      // console.log(this.routeData);
      if(this.routeData === "contact"){
        this.routeChanged = true
        // console.log(this.routeChanged);
        
      }
      else{
        this.routeChanged = false
        // console.log(this.routeChanged);
        
      }
    });
  }

  ngOnInit() {
  }

}
