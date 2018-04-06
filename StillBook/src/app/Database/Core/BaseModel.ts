
class BaseModel<T> implements IBaseModel<T> {
  public Id: string;
  public Path: string;
  public Parent: IBaseEntity;
  public Reference: any;

  /**
   *  Create Entity Reference
   */
  constructor(data, parent) {
    if (data.Id != null) {
      this.Id = data.Id;
    }
    this.Parent = parent;
  }

  public find(params: any, min: number, max: number): T[] {
    return null;
  }

  public findFirst(params: any): T {
    return null;
  }

}
