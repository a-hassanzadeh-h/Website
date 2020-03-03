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
    date: 'all',
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

  public ApplyFilter(list: any[], propertyIndex: number, filter): any[] {
    return ArrayHelper.filterArray(list, propertyIndex, filter);
  }

  public resetFilter(): any[] {
    return this.originalList;
  }

  private GetFieldIndex(text: string): number {
    switch (text) {
      case 'app':
        return 0;
      case 'date':
        return 1;
      case 'version':
        return 3;
      case 'badge':
        return 3;
      default:
        return -1;
    }
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

  private arrayIsEmpty(list: any[]) {
    if (Validation.ArrayIsEmpty(list)) {
      list.push(this.noMatch());
    }
    return list;
  }

  private shouldFilterList(text: string) {
    return !Validation.stringAreEqual(text, 'all');
  }

  public filterList(): any[] {
    let copyList = this.originalList;
    const properties = Object.keys(this.filter);
    properties.forEach(item => {
      if (this.shouldFilterList(this.filter[item])) {
        const index = this.GetFieldIndex(item);
        copyList = this.ApplyFilter(copyList, index, this.filter[item]);
      }
    });

    copyList = this.arrayIsEmpty(copyList);
    return copyList;
  }
}
