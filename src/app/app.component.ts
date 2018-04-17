import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Bulma-Fire';
  displayDropDown: boolean = false;

  constructor(private router: Router) {

  }

  //region public functions 

  public showDropdown():void {
    this.displayDropDown = !this.displayDropDown;
  }

  public showCarousel(): void {
    this.router.navigate(['/dashboard']);
  }

  public showSlidingDoors(): void {
    this.router.navigate(['/slidingDoors']);
  }

  public showAnimatedPopup(): void {
    this.router.navigate(['/animatedPopup']);
  }

  //endregion public functions

}
