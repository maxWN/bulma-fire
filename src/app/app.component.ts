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

  constructor(private router: Router) {}

  showDropdown():void {
    this.displayDropDown = !this.displayDropDown;
  }

  showCarousel(): void {
    this.router.navigate(['/dashboard']);
  }

  showSlidingDoors(): void {
    this.router.navigate(['/slidingDoors']);
  }

}
