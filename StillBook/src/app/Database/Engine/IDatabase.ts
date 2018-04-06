import { Reference } from '@firebase/database-types';
import { AngularFireList } from 'angularfire2/database';

export interface IDatabase {
  getReference(path: string);
  find(path: string, params: (ref: Reference) => any): AngularFireList<{}>;
  save(path: string, data: any);
  update(path: string, data: any);
  delete(path: string);
}


