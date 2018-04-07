import { FirebaseDatabase } from '../Engine/FirebaseDatabase';
import { IBaseModel, IBaseEntity } from './IBaseEntity';
import { Reference } from '@firebase/database-types';
import { Observable } from 'rxjs/Observable';
import { AngularFireObject } from 'angularfire2/database';
import { RElement } from '@angular/core/src/render3/renderer';

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
    if (data.Id != null) {
      this.Id = data.Id;
      this.Path = this.getPath();
      this.Reference = database.getReference(this.Path + '/' + this.Id);
      console.log(this.Reference);
    }
    this.Table = table;
    this.db = database;
    this.Parent = parent;
  }

  public getPath(): string {
    if (this.Parent != null) {
      return this.Parent.getPath() + '/' + this.Parent.Id + '/' + this.Table;
    } else {
      return this.Table;
    }
  }

  public getParent<T>(): T {
    if (this.Path != null) {
      const parts = this.Path.split('/');
      parts.pop();
      const found = BaseModel.find(parts.join('/'), this.db, (ref: Reference) => ref);
      if (found != null) {
        return found.map((value: T, index: number) => {
            return value;
          })
      } else {
        return null;
      }
    }
  }

  public insert(data: any) {
    this.db.insert(this.getPath(), data);
    return this;
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
