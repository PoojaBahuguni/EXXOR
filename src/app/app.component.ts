import { Component } from '@angular/core';
import { scrollAnimation } from './app.animations';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [scrollAnimation]
})
export class AppComponent {
  title = 'sympsite';

  getState(outlet){
    return outlet.activatedRouteData.state;
  }

  routeData = null;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(
      filter(e => {
        return e instanceof NavigationEnd;
      }),
    ).forEach(e => {
      this.routeData = route.root.firstChild.snapshot.data.state;
    });
  }

}
