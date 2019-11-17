import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { TabItem } from './shared/domain';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectedIndex$: Observable<number>;

  constructor(private route: Router) {}

  ngOnInit() {
    this.selectedIndex$ = this.route.events.pipe(
      filter(evt => evt instanceof NavigationEnd),
      map((evt: NavigationEnd) => {
        const arr = evt.url.split('/');
        // console.log('arr============', arr);
        return arr.length > 0 ? arr[1] : 'home';
      }),
      map(path => this.getSelectedIndex(path))
    );
  }

  tabSelected(tab: TabItem) {
    this.route.navigate([tab.link]);
  }

  getSelectedIndex(tab: string) {
    return tab === 'recommend'
    ? 1 : tab === 'category'
    ? 2 : tab === 'chat'
    ? 3 : tab === 'my'
    ? 4 : 0;
  }

}
