import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './bulma-fire/primary-components/landing-page/main-content/main-content.component';
import { SlidingDoorsComponent } from './bulma-fire/primary-components/sliding-doors/sliding-doors.component';
import { AnimatedPopupComponent } from './bulma-fire/primary-components/animated-popup/animated-popup.component';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "dashboard", component: MainContentComponent },
    { path: "slidingDoors", component: SlidingDoorsComponent },
    { path: 'animatedPopup', component: AnimatedPopupComponent }
];

  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ],
    providers: [],
    bootstrap: []
  })
  export class AppRoutingModule { }