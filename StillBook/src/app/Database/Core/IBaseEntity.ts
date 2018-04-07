import { Observable } from 'rxjs/Observable';
import { FirebaseDatabase } from '../Engine/FirebaseDatabase';
import { Reference } from '@firebase/database-types';
import { AngularFireObject } from 'angularfire2/database';

// tslint:disable-next-line:no-empty-interface
export interface IBaseModel extends IBaseEntity {
  // find(path: string, db: FirebaseDatabase, params: (ref: Reference) => any): Observable<{}[]>;
}

export interface IBaseEntity {
  Id: string;
  Path: string;
  Parent: IBaseEntity;
  Reference: AngularFireObject<{}>;

  getParent(): IBaseEntity;
  getPath(): string;
  save(data: any);
  update(data: any);
  delete(data: any);
}
