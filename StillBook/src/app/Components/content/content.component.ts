import { Component, OnInit } from '@angular/core';
import { FirebaseDatabase } from '../../Database/Engine/FirebaseDatabase';
import { ContextService } from '../../Services/Context/context.service';
import { ArticleModel } from '../../Models/Article/Article';
import { Reference } from '@firebase/database-types';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {

  Articles: ArticleModel[];
  private db: FirebaseDatabase;
  private c: ContextService;

  constructor(database: FirebaseDatabase,
              context: ContextService) {
    this.db = database;
    this.c = context;
  }

  ngOnInit() {
    this.Articles = ArticleModel.find('/User/' + this.c.LoggedUser.uid + '/Articles', this.db, (ref: Reference) => ref);
  }

}
