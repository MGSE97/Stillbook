interface IDatabase {
  getReference(): any;
  find(params, min, max): any;
  findFirst(params): any;
}


