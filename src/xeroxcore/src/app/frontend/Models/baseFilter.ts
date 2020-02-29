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
      case 'datee':
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

    const properties = Object.keys(this.filter);
    properties.forEach(item => {
      if (!Validation.stringAreEqual(this.filter[item], 'all')) {
        const index = this.GetFieldIndex(item);
        copyList = this.ApplyFilter(copyList, index, this.filter[item]);
        console.log(copyList);
      }
    });

    if (Validation.ArrayIsEmpty(copyList)) {
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
