import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FooterSectionComponent } from './primary-components/landing-page/footer-section/footer-section.component';
import { MainContentComponent } from './primary-components/landing-page/main-content/main-content.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterSectionComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
