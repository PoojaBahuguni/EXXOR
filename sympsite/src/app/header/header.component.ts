import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd  } from '@angular/router';
import { filter, every } from 'rxjs/operators';
import { ApplicationStateService } from '../application-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() menuClicked : EventEmitter<boolean> = new EventEmitter();
  routeChanged : boolean;
  public isMobileResolution: boolean;
  routeData = null;

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private applicationStateService: ApplicationStateService) {

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
    this.isMobileResolution = applicationStateService.getIsMobileResolution();
  }
   
  ngOnInit() {
  }

  menuClickedHandler(event){
    this.menuClicked.emit(event)
  }
}
