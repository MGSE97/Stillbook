import { Component, OnInit } from '@angular/core';
import { ContextService } from '../../Services/Context/context.service';
import { User } from 'firebase/app';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  public LoggedUser: User;

  constructor(private context: ContextService) {
    this.LoggedUser = context.LoggedUser;
  }

  ngOnInit() {
  }

}
