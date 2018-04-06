import { Component } from '@angular/core';
import { ContextService } from './Services/Context/context.service';
import { Observable } from 'rxjs/Observable';
import { User } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'StillBook';
  LoggedUser: User;
  Logged: boolean;
  Context: ContextService;

  constructor(context: ContextService, private router: Router) {
    this.Context = context;
    if (context.Logged === false) {
      this.router.navigate(['login']);
    }
  }
}
