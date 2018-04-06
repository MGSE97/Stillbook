import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.less']
})
export class MenuItemComponent implements OnInit {

  @Input() Text: Observable<string>;
  @Input() Icon: Observable<string>;
  @Input() Link: Observable<string>;

  constructor() {
    /*if (data.Text != null) {
      this.Text = Observable.of(data.Text);
    }
    if (data.Icon != null) {
      this.Icon = Observable.of(data.Icon);
    }
    if (data.Link != null) {
      this.Link = Observable.of(data.Link);
    }*/
  }

  ngOnInit() {
  }

}
