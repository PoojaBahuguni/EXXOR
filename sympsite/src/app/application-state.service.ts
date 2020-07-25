import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  private isMobileResolution: boolean;
  constructor() {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
      console.log("Mobile");
      
    } else {
      this.isMobileResolution = false;
      console.log("Desktop");
      
    }
   }

   public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }
}
