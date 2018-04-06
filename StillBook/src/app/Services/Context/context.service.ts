import { Injectable } from '@angular/core';
import { User } from 'firebase/app';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../Models/User/UserModel';

@Injectable()
export class ContextService {

  public LoggedUser: User;
  public Logged: boolean;
  public User: UserModel;

  constructor() {
    this.Logged = false;
   }

}
