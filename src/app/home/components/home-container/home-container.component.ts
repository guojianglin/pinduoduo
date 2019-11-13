import { Component, OnInit } from '@angular/core';
import { TopMenu } from '../../../shared/components';
import { Router } from '@angular/router';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  username = 'zs';

  topMenus;
  constructor(
    private router: Router,
    private homeService: HomeService
  ) {
    this.homeService.getTabs().subscribe((res: any) => {
      this.topMenus = res.data;
      console.log('this.topMenus', this.topMenus);
    });
    // this.topMenus = this.homeService.topMenus;
  }
  ngOnInit() {}
  handleTapSelected(menu: TopMenu) {
    this.router.navigate(['/home', menu.link]);
  }

}
