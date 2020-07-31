import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent implements OnInit {
  @Output() menuClicked: EventEmitter<boolean> = new EventEmitter();
  public menuFlag: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  menuSelected(){
    this.menuFlag = true;
    this.router.navigateByUrl('');
    this.menuClicked.emit(this.menuFlag)
  }

}
