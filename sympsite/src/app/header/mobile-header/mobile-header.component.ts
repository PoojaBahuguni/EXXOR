import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent implements OnInit {
  @Output() menuClicked: EventEmitter<boolean> = new EventEmitter();
  public menuFlag: boolean;
  constructor() { }

  ngOnInit() {
  }

  menuSelected(){
    this.menuFlag = true;
    this.menuClicked.emit(this.menuFlag)
  }

}
