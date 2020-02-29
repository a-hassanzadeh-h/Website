import { BaseFilter } from '../Models/baseFilter';

export class DownloadFilter extends BaseFilter {
  constructor(originaList: any[]) {
    super(originaList);
  }

  public filterList(): any[] {
    let copyList = this.list;

    if (this.filter.version !== 'all') {
      copyList = this.ApplyFilter(3, this.filter.version);
    }

    if (this.filter.app !== 'all') {
      copyList = this.ApplyFilter(0, this.filter.app);
    }

    if (this.filter.version !== 'all' && this.filter.app !== 'all') {
      copyList = this.filterByAppAndProperty(3, this.filter.version);
    }

    if (copyList.length === 0) {
      copyList[0] = this.noMatch();
    }
    return copyList;
  }
}
