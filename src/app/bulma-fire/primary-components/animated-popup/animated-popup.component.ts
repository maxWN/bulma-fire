import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animated-popup',
  templateUrl: './animated-popup.component.html',
  styleUrls: ['./animated-popup.component.scss'],
  animations: [
    trigger('popupState', [
      state('show', style({
        transform: 'scale(1)'
      })),
      state('hide', style({
        transform: 'scale(0)'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})

export class AnimatedPopupComponent implements OnInit {

  // region class variables

    public isModalDisplayed:boolean = false;
    public modalDisplay:string;

  // endregion class variables

  constructor() { }

  // region public functions

    public ngOnInit(): void {
    }

    public get stateName() {
      return this.isModalDisplayed ? 'show' : 'hide';
      // this returns a STRING value, which will correspond with our animation states!
    }

    public displayModal(): void {
      if(this.isModalDisplayed == false) {
        this.isModalDisplayed = true;
        this.modalDisplay = "inline-block";
      } else {
        this.isModalDisplayed = false;
        setTimeout(()=> {
          this.modalDisplay = "none";
        }, 1000)
      }
    }

  // endregion public functions

}
