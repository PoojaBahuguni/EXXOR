import { Injectable } from '@angular/core';
import { ScrollPosition } from './scroll-position.model'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetScrollPositionService {
  constructor() { 

  }
  private scrollYObject = new BehaviorSubject([]);
  public currentscrollYObject = this.scrollYObject.asObservable();
  
  public pushScrollY(scrollY){
    // console.log(scrollY);
    this.scrollYObject.next(scrollY);
    
  }
}
