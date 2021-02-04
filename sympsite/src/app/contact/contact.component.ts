import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  form: FormGroup;
    
  description = new FormControl("", Validators.required);

  routeChanged : boolean;

  dataset: Details = {
    description:''
  };

  routeData = null;
  constructor(private https: HttpClient, fb: FormBuilder) {
    this.form = fb.group({
      "description": this.description,    
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form.value);
    this.dataset.description = this.form.value.description
    console.log(this.dataset.description);
    
    this.https.post<Details>('http://localhost:8080/testapp/getdetails', this.dataset).subscribe(
      res => {
        this.dataset = res;
        console.log(this.dataset);
        alert('Email Sent successfully');
        this.dataset.description = null;
        
      });
  }

}

interface Details
{
  description:string;
}