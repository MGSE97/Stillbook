import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  @Input() MenuItems: Observable<MenuItemComponent[]>;
  MenuItemsData: MenuItemComponent[];

  constructor() { }

  ngOnInit() {
    this.MenuItems = Observable.of(this.MenuItemsData);
  }

  addItem(item: MenuItemComponent) {
    this.MenuItemsData.push(item);
  }

  clearItems() {
    this.MenuItemsData = [];
  }

}
