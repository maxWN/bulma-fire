import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { EventEmitter } from '@angular/core';

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

export class AnimatedPopupComponent implements OnInit, OnChanges {

  // region class variables

    @Input() isModalDisplayed:boolean;
    @Output() eventClick: EventEmitter<any> = new EventEmitter();
    public modalDisplay:string;
    // public stateName:string='hide';

  // endregion class variables

  constructor() { }

  // region public functions

    public ngOnInit(): void {
    }

    public ngOnChanges() {
      this.displayModal();
    }

    public get stateName() {
      return this.isModalDisplayed ? 'show' : 'hide';
      // this returns a STRING value, which will correspond with our animation states!
    }

    public displayModal() {
      if (this.isModalDisplayed/* == false && this.isModalDisplayed != undefined*/) {
        // this.isModalDisplayed = false;
        // this.stateName = 'show';
        this.modalDisplay = "inline-block";
      }
      //  else {
      //   // this.stateName = 'hide';
      //   this.isModalDisplayed = false;
      //   setTimeout(() => {
      //     this.modalDisplay = "none";
      //   }, 1000);
      // }
      // console.log("value "+this.isModalDisplayed);
    };


    public closeModal(): void {
      this.isModalDisplayed = false;
      this.eventClick.emit(this.isModalDisplayed);
      setTimeout(() => {
        this.modalDisplay = "none";
      }, 1000);
      console.log("value "+this.isModalDisplayed);

    }

  // endregion public functions

}
