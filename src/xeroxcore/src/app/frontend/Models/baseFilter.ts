import { IBaseFilter } from './Interface/IBaseFilter';
import { ArrayHelper } from 'src/app/models/arrayHelper';
import { Validation } from 'src/app/models/validation';
import { IFilterBar } from './Interface/IFilterbar';
import { FilterBar } from './FilterBar';

export class BaseFilter implements IBaseFilter {
  public list: any[] = [];
  public originalList: any[];
  componentfilter: IFilterBar;
  public filter = {
    version: 'all',
    date: '',
    app: 'all',
    badge: 'all'
  };

  constructor() {}

  public CreateFilterBar(
    selec1: string,
    propertyIndex: number,
    select2: string,
    propertyIndex2,
    faicon: string
  ) {
    this.componentfilter = new FilterBar(
      selec1,
      ArrayHelper.GetSelectList(this.originalList, propertyIndex),
      select2,
      ArrayHelper.GetSelectList(this.originalList, propertyIndex2),
      () => (this.list = this.filterList()),
      () => (this.list = this.resetFilter()),
      faicon
    );
  }

  public ApplyFilter(propertyIndex: number, filter): any[] {
    return ArrayHelper.filterArray(this.originalList, propertyIndex, filter);
  }

  public filterByAppAndProperty(propertyIndex: number, filter): any[] {
    let newList = this.ApplyFilter(0, this.filter.app);
    newList = ArrayHelper.filterArray(newList, propertyIndex, filter);
    return newList;
  }

  public resetFilter(): any[] {
    return this.originalList;
  }

  private GetFieldIndex(text: string): number {
    switch (text) {
      case 'app':
        return 0;
      case 'data':
        return 1;
      case 'version':
        return 3;
      case 'badge':
        return 3;

      default:
        return -1;
    }
  }

  public filterList(): any[] {
    let copyList = this.originalList;

    const properties = Object.getOwnPropertyNames(this.filter);
    properties.forEach(item => {
      if (!Validation.stringAreEqual(item, 'all')) {
        console.log(this.GetFieldIndex(item));
      }
    });
    console.log(copyList);
    console.log(this.filter);

    if (!Validation.stringAreEqual(this.filter.badge, 'all')) {
      copyList = this.ApplyFilter(3, this.filter.badge);
      console.log(copyList);
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
