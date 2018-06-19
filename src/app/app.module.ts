import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterSectionComponent } from './bulma-fire/primary-components/landing-page/footer-section/footer-section.component';
import { MainContentComponent } from './bulma-fire/primary-components/landing-page/main-content/main-content.component';
import { SlidingDoorsComponent } from './bulma-fire/primary-components/sliding-doors/sliding-doors.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepLadderComponent } from './bulma-fire/primary-components/step-ladder/step-ladder.component';
import { AnimatedPopupComponent } from './bulma-fire/primary-components/animated-popup/animated-popup.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterSectionComponent,
    MainContentComponent,
    SlidingDoorsComponent,
    StepLadderComponent,
    AnimatedPopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
