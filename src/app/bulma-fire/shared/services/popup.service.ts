import { Injectable } from '@angular/core';
import { AnimatedPopupComponent } from '../../primary-components/animated-popup/animated-popup.component';

@Injectable()
export class PopupService {

  // region class variables 

  // endregion class variables

  constructor(private popupInstance: AnimatedPopupComponent) { }

  // region public functions

    public enablePopup(): void {
      this.popupInstance.displayModal();
    }

  // endregion public functions

}
