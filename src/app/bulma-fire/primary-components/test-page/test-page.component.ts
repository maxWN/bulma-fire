import { Component, OnInit, ViewChild } from '@angular/core';
// import { PopupService } from '../../shared/services/popup.service';
// import { AnimatedPopupComponent } from '../../shared/components';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  // @ViewChild(AnimatedPopupComponent) modal: AnimatedPopupComponent;
  public isModalActive: boolean = false;

  constructor(/*private popupService: AnimatedPopupComponent*/) { }

  public ngOnInit(): void {
  }

  public openModal(): void {
    if (!this.isModalActive) {
      this.isModalActive = true;
    } else {
      this.isModalActive = false;
    }
    // this.modal.displayModal();
  }

}
