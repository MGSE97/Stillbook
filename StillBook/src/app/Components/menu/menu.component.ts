import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

   MenuItems: Observable<MenuItem[]>;
   @Input() MenuItemsData: MenuItem[];
   @Input() Class: string;
   MenuItemSelected: Observable<MenuItem>;

  constructor() { }

  ngOnInit() {
    this.MenuItems = Observable.of(this.MenuItemsData);
  }

  addItem(item: MenuItem) {
    this.MenuItemsData.push(item);
  }

  clearItems() {
    this.MenuItemsData = [];
  }

}
