import { Component, OnInit } from '@angular/core';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public spinner: boolean = false;

  private timer: Subscription = new Subscription();

  constructor() {
    console.log('MainComponent.constructor()');
    this.spinner = true;
  }

  ngOnInit(): void {
    console.log('MainComponent.ngOnInit()');

    const source = timer(2000);
    this.timer = source.subscribe(val => this.spinner = false);
  }


  ngOnDestroy(): void {
    console.log('MainComponent.ngOnDestroy()');
    this.timer.unsubscribe();
  }

}
