import { Component, OnInit } from '@angular/core';
import { treesAnimation, baseAnimation, screenAnimation } from '../app.animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [treesAnimation, baseAnimation, screenAnimation],
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
