import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input()
  receivedCounter = 0;
  evenList = [];
  oddList = [];

  onReceiveCounter = (valueObject) => {
    console.log(valueObject.counter);
    this.receivedCounter = valueObject.counter;
    (this.receivedCounter % 2 === 0) ? this.evenList.push(this.receivedCounter) : this.oddList.push(this.receivedCounter);
  }
}
