import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component {
  pw = true;
  clickNr = 0;
  logItems = [];

  showPW = () => {
    this.clickNr = this.clickNr + 1;
    this.logItems.push("Click nr: " + this.clickNr);
    this.pw = !this.pw;
  };

  getBgColor = (i:number) => {
    return i >= 4 ? 'blue' : 'transparent';
  }

  getClass = (i:number) => {
    return i >= 4 ? 'white' : '';
  }
}
