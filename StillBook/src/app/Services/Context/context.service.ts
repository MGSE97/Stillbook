import { Injectable } from '@angular/core';
import { User } from 'firebase/app';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContextService {

  public LoggedUser: User;
  public Logged: boolean;

  constructor() {
    this.Logged = false;
   }

}
