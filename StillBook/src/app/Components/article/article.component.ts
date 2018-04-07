import { Component, OnInit, Input } from '@angular/core';
import { ArticleModel } from '../../Models/Article/Article';
import { FirebaseDatabase } from '../../Database/Engine/FirebaseDatabase';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../Models/User/UserModel';
import { ContextService } from '../../Services/Context/context.service';
import { CommentModel } from '../../Models/Comment/Comment';
import { Comment } from './Comment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {

  Comments: Observable<Comment[]>;
  CommentsData: CommentModel[];
  @Input() ArticleModel: ArticleModel;
  Article: Observable<ArticleModel>;
  db: FirebaseDatabase;
  c: ContextService;
  User: UserModel;

  constructor(database: FirebaseDatabase,
              context: ContextService) {
    this.db = database;
    this.c = context;
  }

  ngOnInit() {
    if (ArticleModel != null) {
      this.Article = Observable.of(this.ArticleModel);
      this.Article.subscribe((a: ArticleModel) => this.User = a.getParent());
      this.CommentsData = this.ArticleModel.Comments;
      if (this.CommentsData != null) {
        this.Comments = Observable.of(this.CommentsData.map((value: CommentModel, index: number) => {
          return new Comment(value.Id, this.db);
        }));
      }
    }
  }

  addComment(event: KeyboardEvent, value: string) {
    // tslint:disable-next-line:triple-equals
    if ((<HTMLInputElement>event.target).value.endsWith('\n')) {
      this.ArticleModel.Comments.push(new CommentModel({
        Text: value,
        User_Id: this.c.LoggedUser.uid,
        CreatedOnUtc: new Date().toUTCString()
      }, this.ArticleModel, this.db));
      this.ArticleModel.insert();
    }
  }

}
