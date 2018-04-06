import { Injectable} from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule } from 'angularfire2/database';
import { Reference } from '@firebase/database-types';
import { IDatabase } from './IDatabase';

@Injectable()
export class FirebaseDatabase implements IDatabase {

  private db: AngularFireDatabase;

  constructor(database: AngularFireDatabase) {
    this.db = database;
  }

  getReference(path: string) {
    return this.db.object(path);
  }

  find(path: string, params: (ref: Reference) => any): AngularFireList<{}> {
    return this.db.list(path, ref => params(ref));
  }

  save(path: string, data: any) {
    this.db.object(path).set(data);
  }

  update(path: string, data: any) {
    this.db.object(path).update(data);
  }

  delete(path: string) {
    this.db.object(path).remove();
  }
}
