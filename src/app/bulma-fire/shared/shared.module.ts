import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedPopupComponent } from './components'

@NgModule({
    declarations: [
        AnimatedPopupComponent
    ],
    imports: [
      CommonModule
    ],
    providers: [],
    bootstrap: [],
    exports: [ AnimatedPopupComponent ] 
  })
  export class SharedModule { }