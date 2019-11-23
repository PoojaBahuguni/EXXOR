import { Component, OnInit } from '@angular/core';
import { rowsAnimation } from '../app.animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [rowsAnimation],
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
