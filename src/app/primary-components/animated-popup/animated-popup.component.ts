import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-popup',
  templateUrl: './animated-popup.component.html',
  styleUrls: ['./animated-popup.component.scss']
})
export class AnimatedPopupComponent implements OnInit {

  isModalDisplayed:boolean=false;
  modalDisplay:string;

  constructor() { }

  ngOnInit() {
  }

  displayModal() {
    if(this.isModalDisplayed == false) {
      this.isModalDisplayed = true;
      this.modalDisplay = "inline-block";
    }
    else {
      this.isModalDisplayed = false;
      this.modalDisplay = "none";
    }
  }

}
