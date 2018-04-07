import { BaseModel } from '../../Database/Core/BaseModel';
import { UserState, UserRole } from './UserEnums';
import { IBaseEntity } from '../../Database/Core/IBaseEntity';
import { FirebaseDatabase } from '../../Database/Engine/FirebaseDatabase';
import { Reference } from '@firebase/database-types';
import { ArticleModel } from '../Article/Article';

export class UserModel extends BaseModel {
  NickName: string;
  Email: string;
  State: UserState;
  Role: UserRole;
  RegistredOnUtc: string;
  DeletedOnUtc: string;
  Articles: ArticleModel[];

  public static find(path: string, db: FirebaseDatabase, params: (ref: Reference) => any): UserModel[] {
    const found = super.find(path, db, params);
    if (found != null) {
      return found.map((value: UserModel, index: number) => {
          return value;
      });
    } else {
      return null;
    }
  }

  constructor(data: any, parent: IBaseEntity, db: FirebaseDatabase) {
    super(data, 'User', parent, db);
    if (data.NickName != null) {
      this.NickName = data.NickName;
    }
    if ( data.Email != null) {
      this.Email = data.Email;
    }
    if (data.State != null) {
      this.State = data.State;
    }
    if (data.Role != null) {
      this.Role = data.Role;
    }
    if (data.RegistredOnUtc != null) {
      this.RegistredOnUtc = data.RegistredOnUtc;
    }
    if (data.DeletedOnUtc != null) {
      this.DeletedOnUtc = data.DeletedOnUtc;
    }
  }

  private getData() {
    return {
      NickName: this.NickName,
      Email: this.Email,
      State: this.State,
      Role: this.Role,
      RegistredOnUtc: this.RegistredOnUtc,
      DeletedOnUtc: this.DeletedOnUtc
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


