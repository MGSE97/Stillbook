import { Observable } from 'rxjs/Observable';

export class MenuItem {
  Text: Observable<string>;
  Icon: Observable<string>;
  Link: Observable<string>;
  Class: Observable<string>;

  constructor(data?: any) {
    if (data.Text != null) {
      this.Text = Observable.of(data.Text);
    }
    if (data.Icon != null) {
      this.Icon = Observable.of(data.Icon);
    }
    if (data.Link != null) {
      this.Link = Observable.of(data.Link);
    }
    if (data.Class != null) {
      this.Class = Observable.of(data.Class);
    }
  }
}
