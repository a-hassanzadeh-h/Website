import { Validation } from 'src/app/models/validation';
import { IBaseFilter } from './Interface/IBaseFilter';

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
    return this.list.filter(item =>
      Validation.stringAreEqual(item.version, this.filter.version)
    );
  }

  public filterByBadge(): any[] {
    return this.list.filter(item =>
      Validation.stringAreEqual(item.badge, this.filter.badge)
    );
  }

  public filterByVersionAndApp(): any[] {
    return this.list.filter(
      item =>
        Validation.stringAreEqual(item.version, this.filter.version) &&
        Validation.stringAreEqual(item.appname, this.filter.app)
    );
  }

  public filterByBadgeAndApp(): any[] {
    return this.list.filter(
      item =>
        Validation.stringAreEqual(item.badge, this.filter.badge) &&
        Validation.stringAreEqual(item.appname, this.filter.app)
    );
  }

  public filterByApp(): any[] {
    return this.list.filter(item =>
      Validation.stringAreEqual(item.appname, this.filter.app)
    );
  }

  public filterByDate(): any[] {
    return this.list.filter(item =>
      Validation.stringAreEqual(item.date, this.filter.date)
    );
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
