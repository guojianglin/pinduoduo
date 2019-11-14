import { Component, OnInit } from '@angular/core';
import { TopMenu } from '../../../shared/components';
import { Router } from '@angular/router';
import { HomeService } from '../../services';
import { Observable, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  username = 'zs';

  // topMenus;
  topMenus$: Observable<TopMenu[]>;
  constructor(
    private router: Router,
    private homeService: HomeService
  ) {
    // this.homeService.getTabs().subscribe((res: any) => {
    //   this.topMenus = res.data;
    //   console.log('this.topMenus', this.topMenus);
    // });

    // this.topMenus = this.homeService.topMenus;

    this.topMenus$ =  this.homeService.getTabs().pipe(
      filter(param => param.data !== undefined),
      map(param => param.data)
    );
  }
  ngOnInit() {}
  handleTapSelected(menu: TopMenu) {
    this.router.navigate(['/home', menu.link]);
  }

}
