import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // region class variables

    public title = 'Bulma-Fire';
    public displayDropDown: boolean = false;
    public displayCarousel: boolean  = true;
    public displaySlidingDoors: boolean = false;
    public displayPopup: boolean = false;

  // endregion class variables

  constructor(private router: Router) {

  }

  // region public functions 

  public showDropdown(): void {
    this.displayDropDown = !this.displayDropDown;
  }

  public showCarousel(): void {
    this.router.navigate(['/dashboard']);
    this.displayCarousel  = true;
    this.displaySlidingDoors = false;
    this.displayPopup = false;
  }

  public showSlidingDoors(): void {
    this.router.navigate(['/slidingDoors']);
    this.displayCarousel = false;
    this.displaySlidingDoors = true;
    this.displayPopup = false;
  }

  public showGeneralTestPopup(): void {
    this.router.navigate(['/generalTesting']);
    this.displayCarousel = false;
    this.displaySlidingDoors = false;
    this.displayPopup = true;
  }

  // endregion public functions

}
