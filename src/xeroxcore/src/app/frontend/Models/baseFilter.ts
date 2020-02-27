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
