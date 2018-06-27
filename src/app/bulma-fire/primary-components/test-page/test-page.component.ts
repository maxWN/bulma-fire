import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})

export class TestPageComponent implements OnInit {

  public isModalActive: boolean = false;

  constructor() { }

  public ngOnInit(): void {
  }

  public openModal(): void {
    this.isModalActive = !this.isModalActive;
  }

  public handleCloseEvent($event): void {
    if(typeof($event) == 'boolean') {
      this.isModalActive = $event;
    }
  }

}
