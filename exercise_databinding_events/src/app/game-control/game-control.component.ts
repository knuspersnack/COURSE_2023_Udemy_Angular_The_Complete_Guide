import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() //Telling that the child will communicate to the parent
	counterRunning = new EventEmitter<
		{counter: number}
    >();

  intervalId = null;
  timer = 0;

  onStart = () => {
    this.intervalId = setInterval( () => {
      this.counterRunning.emit(
        {
          counter: this.timer++,
        }
      )
    }, 2000)
  }

  onStop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}
