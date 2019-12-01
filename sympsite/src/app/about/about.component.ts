import { Component, OnInit } from '@angular/core';
import { aboutIllustration, aboutParagraph } from '../app.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations:[aboutIllustration,aboutParagraph]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
