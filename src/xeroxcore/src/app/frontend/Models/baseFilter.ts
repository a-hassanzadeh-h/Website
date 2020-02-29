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

  public filterByVersion(): any[] {
    return ArrayHelper.filterArray(this.list, 3, this.filter.version);
  }

  public filterByApp(): any[] {
    return ArrayHelper.filterArray(this.list, 0, this.filter.app);
  }

  public filterByBadge(): any[] {
    return ArrayHelper.filterArray(this.list, 3, this.filter.badge);
  }

  public filterByDate(): any[] {
    return ArrayHelper.filterArray(this.list, 1, this.filter.date);
  }

  public filterByVersionAndApp(): any[] {
    let list = this.filterByApp();
    list = ArrayHelper.filterArray(list, 3, this.filter.version);
    return list;
  }

  public filterByBadgeAndApp(): any[] {
    let list = this.filterByApp();
    list = ArrayHelper.filterArray(list, 3, this.filter.badge);
    return list;
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
