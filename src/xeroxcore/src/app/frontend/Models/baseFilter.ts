import { IBaseFilter } from './Interface/IBaseFilter';
import { ArrayHelper } from 'src/app/models/arrayHelper';

export class BaseFilter implements IBaseFilter {
  public list: any[];

  public filter = {
    version: 'all',
    date: '',
    app: 'all',
    badge: 'all'
  };

  constructor(originaList: any[]) {
    this.list = originaList;
  }

  public ApplyFilter(propertyIndex: number, filter): any[] {
    return ArrayHelper.filterArray(this.list, propertyIndex, filter);
  }

  public filterByAppAndProperty(propertyIndex: number, filter): any[] {
    let newList = this.ApplyFilter(0, this.filter.app);
    newList = ArrayHelper.filterArray(newList, propertyIndex, filter);
    return newList;
  }

  public resetFilter(): any[] {
    return this.list;
  }

  public noMatch(): {} {
    return {
      date: '0',
      title: 'Your Search gave 0 matches.',
      badge: '',
      content: '',
      appname: ''
    };
  }
}
