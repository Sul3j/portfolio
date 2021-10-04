import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  activeProperty: string = '';
  active: boolean = false;
  menuIsActive: string = 'menu';

  options: string[][] = [
    ['about', '#about'],
    ['skills', '#skills'],
    ['projects', '#projects'],
  ];

  menuToggle() {
    if (this.active) {
      this.activeProperty = '';
      this.active = !this.active;
      this.menuIsActive = 'menu';
    } else {
      this.activeProperty = 'hamburger--active';
      this.active = !this.active;
      this.menuIsActive = 'menu--active';
    }
  }

  

}
