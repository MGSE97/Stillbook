import { BaseModel } from '../../Database/Core/BaseModel';
import { FirebaseDatabase } from '../../Database/Engine/FirebaseDatabase';
import { Reference } from '@firebase/database-types';
import { IBaseEntity } from '../../Database/Core/IBaseEntity';
import { CommentModel } from '../Comment/Comment';

export class ArticleModel extends BaseModel {
  public Text: string;
  public CreatedOnUtc: string;
  public Comments: CommentModel[];

  public static find(path: string, db: FirebaseDatabase, params: (ref: Reference) => any): ArticleModel[] {
    const found = super.find(path, db, params);
    if (found != null) {
      return found.map((value: ArticleModel, index: number) => {
          return value;
      });
    } else {
      return null;
    }
  }

  constructor(data: any, parent: IBaseEntity, db: FirebaseDatabase) {
    super(data, '/Article', parent, db);
    if (data.Text != null) {
      this.Text = data.Text;
    }
    if ( data.Comments != null) {
      this.Comments = data.Comments;
    }
    if (data.CreatedOnUtc != null) {
      this.CreatedOnUtc = data.CreatedOnUtc;
    }
  }

  private getData() {
    return {
      Text: this.Text,
      CreatedOnUtc: this.CreatedOnUtc,
      Comments: this.Comments
    };
  }
  insert() {
    return super.insert(this.getData());
  }
  save() {
    return super.save(this.getData());
  }
  update() {
    return super.update(this.getData());
  }
  delete() {
    return super.delete();
  }
}
