import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
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
   @Input() MenuItemSelectedData: number;
   @Input() Class: string;
   MenuItemSelected: Observable<MenuItem>;

  constructor() { }

  ngOnInit() {
    this.MenuItems = Observable.of(this.MenuItemsData);
    if (this.MenuItemSelectedData != null && this.MenuItemSelectedData > 0) {
      this.MenuItemSelected = this.MenuItems[this.MenuItemSelectedData];
    }
    /*if (this.MenuItemsData != null && this.MenuItemsData.length > 0) {
      this.MenuItemSelected = Observable.of(this.MenuItemsData[0]);
    }*/
  }

  addItem(item: MenuItem) {
    this.MenuItemsData.push(item);
  }

  clearItems() {
    this.MenuItemsData = [];
  }

}
