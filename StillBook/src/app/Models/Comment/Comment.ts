import { BaseModel } from '../../Database/Core/BaseModel';
import { FirebaseDatabase } from '../../Database/Engine/FirebaseDatabase';
import { Reference } from '@firebase/database-types';
import { IBaseEntity } from '../../Database/Core/IBaseEntity';

export class CommentModel extends BaseModel {
  Text: string;
  User_Id: string;
  CreatedOnUtc: string;

  public static find(path: string, db: FirebaseDatabase, params: (ref: Reference) => any): CommentModel[] {
    const found = super.find(path, db, params);
    if (found != null) {
      return found.map((value: CommentModel, index: number) => {
          return value;
      });
    } else {
      return null;
    }
  }

  constructor(data: any, parent: IBaseEntity, db: FirebaseDatabase) {
    super(data, 'Comment', parent, db);
    if (data.Text != null) {
      this.Text = data.Text;
    }
    if ( data.User_Id != null) {
      this.User_Id = data.User_Id;
    }
    if (data.CreatedOnUtc != null) {
      this.CreatedOnUtc = data.CreatedOnUtc;
    }
  }

  private getData() {
    return {
      Text: this.Text,
      CreatedOnUtc: this.CreatedOnUtc,
      User_Id: this.User_Id
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
