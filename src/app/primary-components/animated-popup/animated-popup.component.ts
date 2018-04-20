import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animated-popup',
  templateUrl: './animated-popup.component.html',
  styleUrls: ['./animated-popup.component.scss'],
  animations: [
    trigger('popupState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})

export class AnimatedPopupComponent implements OnInit {

  // region class variables 

    isModalDisplayed:boolean = false;
    modalDisplay:string;

  // endregion class variables

  constructor() { }

  // region public functions

  public ngOnInit(): void {
  }

  get stateName() {
    return this.isModalDisplayed ? 'show' : 'hide';
    //this returns a STRING value, which will correspond with our animation states!
  }

  public displayModal(): void {
    if(this.isModalDisplayed == false) {
      this.isModalDisplayed = true;
      this.modalDisplay = "inline-block";
    }
    else {
      this.isModalDisplayed = false;
      this.modalDisplay = "none";
    }
  }

  // endregion public functions

}