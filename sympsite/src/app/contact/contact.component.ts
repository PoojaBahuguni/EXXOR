import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  routeChanged : boolean;

  routeData = null;
  constructor() {
   
  }

  ngOnInit() {
  }

}
