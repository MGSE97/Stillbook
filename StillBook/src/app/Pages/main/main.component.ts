import { Component, OnInit } from '@angular/core';
import { ContextService } from '../../Services/Context/context.service';
import { User } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { MenuItem } from '../../Components/menu/menu-item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  public LoggedUser: User;

  public TopMenuSelected = 0;
  public TopMenuItems = [
    new MenuItem({Text: 'Menu'}),
    new MenuItem({Text: 'Chat'}),
    new MenuItem({Text: 'Events'}),
  ];
  public NavMenuSelected = 0;
  public NavMenuItems = [
    new MenuItem({Text: 'A'}),
    new MenuItem({Text: 'B'}),
    new MenuItem({Text: 'C'}),
  ];


  constructor(private context: ContextService,
              private afAuth: AngularFireAuth,
              private router: Router) {
    this.LoggedUser = context.LoggedUser;
  }

  ngOnInit() {
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }
}
