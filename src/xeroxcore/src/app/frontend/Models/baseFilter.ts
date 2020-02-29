import { IBaseFilter } from './Interface/IBaseFilter';
import { ArrayHelper } from 'src/app/models/arrayHelper';
import { Validation } from 'src/app/models/validation';

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

  public filterList(): any[] {
    let copyList = this.list;

    if (!Validation.stringAreEqual(this.filter.badge, 'all')) {
      copyList = this.ApplyFilter(3, this.filter.badge);
    }

    if (!Validation.stringAreEqual(this.filter.app, 'all')) {
      copyList = this.ApplyFilter(3, this.filter.version);
    }

    if (!Validation.stringAreEqual(this.filter.app, 'all')) {
      copyList = this.ApplyFilter(0, this.filter.app);
    }

    if (
      !Validation.stringAreEqual(this.filter.version, 'all') &&
      !Validation.stringAreEqual(this.filter.app, 'all')
    ) {
      copyList = this.filterByAppAndProperty(3, this.filter.version);
    }

    if (
      !Validation.stringAreEqual(this.filter.app, 'all') &&
      !Validation.stringAreEqual(this.filter.badge, 'all')
    ) {
      copyList = this.filterByAppAndProperty(3, this.filter.badge);
    }

    if (copyList.length === 0) {
      copyList[0] = this.noMatch();
    }
    return copyList;
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
