import { BaseFilter } from '../Models/baseFilter';

export class DownloadFilter extends BaseFilter {
  constructor(originaList: any[]) {
    super(originaList);
  }

  public filterList(): any[] {
    let copyList = this.list;

    if (this.filter.version !== 'all') {
      copyList = this.filterByVersion();
    }

    if (this.filter.app !== 'all') {
      copyList = this.filterByApp();
    }

    if (this.filter.version !== 'all' && this.filter.app !== 'all') {
      copyList = this.filterByVersionAndApp();
    }

    if (copyList.length === 0) {
      copyList[0] = this.noMatch();
    }
    return copyList;
  }
}
