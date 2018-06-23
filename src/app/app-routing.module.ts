import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './bulma-fire/primary-components/landing-page/main-content/main-content.component';
import { SlidingDoorsComponent } from './bulma-fire/primary-components/sliding-doors/sliding-doors.component';
import { TestPageComponent } from './bulma-fire/primary-components/test-page/test-page.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './bulma-fire/shared/shared.module';

const appRoutes: Routes = [
    { path: "generalTesting", component: TestPageComponent },
    { path: "", redirectTo: "/dashboard", pathMatch: "full" },
    { path: "dashboard", component: MainContentComponent },
    { path: "slidingDoors", component: SlidingDoorsComponent }
];

  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      SharedModule,
      RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ],
    providers: [],
    bootstrap: []
  })
  export class AppRoutingModule { }