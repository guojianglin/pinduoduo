import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  @Input() start;
  @Input() future;

  countDown$: Observable<string>;
  _MS_PER_SECOND = 1000;
  constructor() { }

  ngOnInit() {
    this.countDown$ = this.getCountDownObservable(this.start, this.future);
  }

  getCountDownObservable(start: Date, future: Date) {
    return interval(1000).pipe(
      map(elapse => this.diffInSec(start, future) - elapse),
      takeWhile(gap => gap >= 0),
      map(sec => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor(sec / 3600) % 24,
        minute: Math.floor(sec / 60) % 60,
        second: Math.floor(sec % 60)
      })),
      tap(console.log),
      map(({hour, minute, second}) => {
          return `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:${second < 10 ? '0' : ''}${second}`
      })
    );
  }

  diffInSec(start: Date, future: Date): number {
    const diff =  future.getTime() - start.getTime();
    return diff / this._MS_PER_SECOND;
  }

}
