import { Component, OnInit } from '@angular/core';
import { treesAnimation, screenAnimation, treesDestroyAnimation } from '../app.animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [treesAnimation, screenAnimation,treesDestroyAnimation],
})
export class HomepageComponent implements OnInit {
  
  constructor() { 
  
  }

  ngOnInit() {
  }
}
