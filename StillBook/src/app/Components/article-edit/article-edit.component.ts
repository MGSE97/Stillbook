import { Component, OnInit } from '@angular/core';
import { FirebaseDatabase } from '../../Database/Engine/FirebaseDatabase';
import { ContextService } from '../../Services/Context/context.service';
import { ArticleModel } from '../../Models/Article/Article';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.less']
})
export class ArticleEditComponent implements OnInit {

  db: FirebaseDatabase;
  c: ContextService;

  constructor(database: FirebaseDatabase,
              context: ContextService) {
    this.db = database;
    this.c = context;
  }

  ngOnInit() {
  }

  postArticle(text: string) {
    console.log(this.c.User);
    console.log(text);
    new ArticleModel({
      Text: text,
      CreatedOnUtc: new Date().toUTCString(),
      Comments: [{}]
    }, this.c.User, this.db).insert();
  }
}
