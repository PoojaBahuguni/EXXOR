import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, every } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  routeData = null;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(
      filter(e => {
        return e instanceof NavigationEnd;
      }),
    ).forEach(e => {
      this.routeData = route.root.firstChild.snapshot.data.state;
      console.log(this.routeData);
    });
  }

  ngOnInit() {
    
  }
}
