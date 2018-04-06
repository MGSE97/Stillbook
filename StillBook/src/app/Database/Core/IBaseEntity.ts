interface IBaseModel<T> extends IBaseEntity {
  find(params, min, max): T[];
  findFirst(params): T;
}

interface IBaseEntity {
  Id: string;
  Path: string;
  Parent: IBaseEntity;
  Reference: any;
}
