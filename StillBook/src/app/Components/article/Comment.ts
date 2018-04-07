import { UserModel } from '../../Models/User/UserModel';
import { Reference } from '@firebase/database-types';
import { CommentModel } from '../../Models/Comment/Comment';
import { FirebaseDatabase } from '../../Database/Engine/FirebaseDatabase';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';

export class Comment {
  public Comment: CommentModel;
  public CreatedOnUtc: Observable<string>;
  public NickName: Observable<string>;
  public Text: Observable<string>;
  private db: FirebaseDatabase;


  constructor(comment_Id: string, database: FirebaseDatabase) {
    this.db = database;
    this.Comment = CommentModel.find('/Comment/' + comment_Id, this.db, (ref: Reference) => ref)[0];
    this.CreatedOnUtc = Observable.of(this.Comment.CreatedOnUtc);
    this.NickName = Observable.of(this.getUser().NickName);
    this.Text = Observable.of(this.Comment.Text);
  }

  getUser(): UserModel {
    return UserModel.find('/User/' + this.Comment.User_Id, this.db, (ref: Reference) => ref)[0];
  }
}
