import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {FirebaseUISignInSuccess} from 'firebaseui-angular';
import { ContextService } from '../../Services/Context/context.service';
import { Router } from '@angular/router';
import { User } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  title = 'StillBook';

  constructor(private afAuth: AngularFireAuth, private context: ContextService, private router: Router) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => this.logged(user));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  successCallback(data: FirebaseUISignInSuccess) {
    this.logged(data.currentUser);
  }
  private logged(user: User) {
    console.log(user);
    this.context.LoggedUser = user;
    this.context.Logged = user.isAnonymous;
    this.router.navigate(['home']);
  }

}
