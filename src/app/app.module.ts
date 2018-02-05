import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterSectionComponent } from './primary-components/landing-page/footer-section/footer-section.component';
import { MainContentComponent } from './primary-components/landing-page/main-content/main-content.component';
import { SlidingDoorsComponent } from './primary-components/sliding-doors/sliding-doors.component';


const appRoutes: Routes = [
  { path: "", redirectTo: "/slidingDoors", pathMatch: "full" },
  { path: "dashboard", component: MainContentComponent },
  { path: "slidingDoors", component: SlidingDoorsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FooterSectionComponent,
    MainContentComponent,
    SlidingDoorsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
