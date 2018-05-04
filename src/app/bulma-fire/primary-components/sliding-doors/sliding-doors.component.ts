import { Component, OnInit } from '@angular/core';
import { trigger, keyframes, animate, transition, state, style } from '@angular/animations';

@Component({
  selector: 'app-sliding-doors',
  templateUrl: './sliding-doors.component.html',
  styleUrls: ['./sliding-doors.component.scss'],
  animations: [
    trigger('popupState', [
      state('show', style({
        marginLeft: '40rem'
      })),
      state('hide', style({
        marginLeft: '0rem'
      })),
      transition('show => hide', animate('3s ease-out')),
      transition('hide => show', animate('3s ease-in'))
    ])
  ]
})
export class SlidingDoorsComponent implements OnInit {

  //region class variables

  public areDoorsOpen: boolean = false;

  //endregion class variables

  constructor() { }

  //region public functions

  public ngOnInit() {
  }

  public get stateName(): string {
    return this.areDoorsOpen ? 'show' : 'hide';
    //this returns a STRING value, which will correspond with our animation states!
  }

  public openDoors(): void {
    if(this.areDoorsOpen == false) {
      this.areDoorsOpen = true;
    }
    else {
      this.areDoorsOpen = false;
    }
  }

  //endregion public functions

  
}
