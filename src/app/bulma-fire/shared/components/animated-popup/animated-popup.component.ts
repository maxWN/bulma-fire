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

  // endregion class variables

  constructor() { }

  // region public functions

    public ngOnInit(): void {
    }

    public ngOnChanges(): void {
      this.displayModal();
    }

    public get stateName(): string {
      return this.isModalDisplayed ? 'show' : 'hide';
      // this returns a STRING value, which will correspond with our animation states!
    }

    public displayModal(): void {
      if (this.isModalDisplayed) {
        this.modalDisplay = "inline-block";
      }
    };

    public closeModal(): void {
      this.isModalDisplayed = false;
      this.eventClick.emit(this.isModalDisplayed);
      setTimeout(() => {
        this.modalDisplay = "none";
      }, 1000);
    }

  // endregion public functions

}
