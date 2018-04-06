import { FirebaseDatabase } from '../Engine/FirebaseDatabase';
import { IBaseModel, IBaseEntity } from './IBaseEntity';
import { Reference } from '@firebase/database-types';
import { Observable } from 'rxjs/Observable';
import { AngularFireObject } from 'angularfire2/database';

export class BaseModel implements IBaseModel {
  public Id: string;
  public Table: string;
  public Path: string;
  public Parent: IBaseEntity;
  public Reference: AngularFireObject<{}>;
  private db: FirebaseDatabase;

  public static find(path: string, db: FirebaseDatabase, params: (ref: Reference) => any): any {
    db.find(path, params).valueChanges();
  }

  constructor(data: any, table: string, parent: IBaseEntity, database: FirebaseDatabase) {
    if (data.Id != null && table != null) {
      this.Id = data.Id;
      this.Table = table;
      this.Path = this.getPath();
      this.Reference = database.getReference(this.Path + '/' + this.Id);
      this.db = database;
      console.log(this.Reference);
    }
    this.Parent = parent;
  }

  public getPath(): string {
    if (this.Parent != null) {
      return this.Parent.getPath() + '/' + this.Table;
    } else {
      return this.Table;
    }
  }

  public save(data: any) {
    this.Reference.set(data);
    return this;
  }

  public update(data: any) {
    this.Reference.update(data);
    return this;
  }
  public delete() {
    this.Reference.remove();
    return this;
  }

}
