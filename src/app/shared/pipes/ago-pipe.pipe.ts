import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agoPipe'
})
export class AgoPipePipe implements PipeTransform {

  transform(value: any, args?: any,  args2?: any): any {
    console.log('args', args);
    console.log('args2', args2);
    if (value) {
      value = new Date(value);
      const intervals = {
        年: 3600 * 24 * 365,
        月: 3600 * 24 * 30,
        周: 3600 * 24 * 7,
        天: 3600 * 24,
        时: 3600,
        分: 60,
        秒: 1
      };
      for (const unit in intervals) {
        if (intervals.hasOwnProperty(unit)) {
          const interval = intervals[unit];
          const calcResult = Math.floor(((+new Date() - +value) / 1000) / interval);
          if (calcResult > 0) {
            return `${calcResult}${unit}前`;
          }
        }
      }
    }
  }

}
