import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSub: Subscription;

  constructor() {}

  ngOnInit() {
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        //Handle data, besides next()
        //there is complete() and error()
        //we let the observer know, that we have some new data
        observer.next(count);
        if (count == 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    //Operatos
    customIntervalObservable.pipe(
      map((data: number) => {
        return 'Round: ' + data;
      })
    );

    //Subscribing to the observable
    this.firstObsSub = customIntervalObservable
      .pipe(
        filter((data:number) => {
          return data > 0
        }),
        map((data: number) => {
          return 'Round: ' + data;
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.error(error.message);
        },
        () => {
          console.log('Observable completed!');
        }
      );
  }

  ngOnDestroy(): void {
    this.firstObsSub.unsubscribe();
  }
}
