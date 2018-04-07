import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {FirebaseUISignInSuccess} from 'firebaseui-angular';
import { ContextService } from '../../Services/Context/context.service';
import { Router } from '@angular/router';
import { User } from 'firebase/app';
import { UserModel } from '../../Models/User/UserModel';
import { UserState, UserRole } from '../../Models/User/UserEnums';
import { FirebaseDatabase } from '../../Database/Engine/FirebaseDatabase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  title = 'StillBook';

  constructor(private afAuth: AngularFireAuth,
              private context: ContextService,
              private router: Router,
              private db: FirebaseDatabase) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => this.logged(user));
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

  successCallback(data: FirebaseUISignInSuccess) {
    this.logged(data.currentUser);
  }
  private logged(user: User) {
    console.log(user);
    this.context.LoggedUser = user;
    this.context.Logged = user.isAnonymous;
    const found = UserModel.find('User', this.db, (ref) => ref.equalTo('Id', user.uid));
    console.log(found);
    if (found == null) {
      this.context.User = new UserModel({
        NickName: user.displayName,
        Email: user.email,
        Id: user.uid,
        RegistredOnUtc: new Date().toUTCString(),
        DeletedOnUtc: '',
        State: UserState.Online,
        Role: UserRole.User
      }, null, this.db).save();
    }
    this.router.navigate(['home']);
  }

}
