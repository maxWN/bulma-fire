import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterSectionComponent } from './bulma-fire/primary-components/landing-page/footer-section/footer-section.component';
import { MainContentComponent } from './bulma-fire/primary-components/landing-page/main-content/main-content.component';
import { SlidingDoorsComponent } from './bulma-fire/primary-components/sliding-doors/sliding-doors.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepLadderComponent } from './bulma-fire/primary-components/step-ladder/step-ladder.component';
import { AnimatedPopupComponent } from './bulma-fire/primary-components/animated-popup/animated-popup.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: MainContentComponent },
  { path: "slidingDoors", component: SlidingDoorsComponent },
  { path: 'animatedPopup', component: AnimatedPopupComponent }
]

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
