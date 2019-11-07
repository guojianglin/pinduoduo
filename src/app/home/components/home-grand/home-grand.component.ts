import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  date: Date;
  price = 123.123456;
  data = [1, 2, 3, 4, 5, 6, 7];
  constructor() {

  }

  ngOnInit() {
    this.date = this.minusDate(new Date(), 30);
  }

  minusDate(date: Date, days: number) {
    const result = new Date(date);
    console.log('getDate', result.getDate());
    result.setDate(result.getDate() - days);
    return result;
  }

}
