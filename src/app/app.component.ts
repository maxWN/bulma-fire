import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Maxico';
  displayDropDown: boolean = false;

  showDropdown():void {
    this.displayDropDown = !this.displayDropDown;
  }

}
