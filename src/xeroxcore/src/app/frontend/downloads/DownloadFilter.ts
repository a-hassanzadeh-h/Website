import { Validation } from 'src/app/models/validation';
import { BaseFilter } from '../Models/baseFilter';

export class DownloadFilter extends BaseFilter {
  constructor(originaList: any[]) {
    super(originaList);
  }

  private filterByBadge(): any[] {
    return this.list.filter(item =>
      Validation.stringAreEqual(item.source, this.filter.source)
    );
  }

  private filterBySourceAndApp(): any[] {
    return this.list.filter(
      item =>
        Validation.stringAreEqual(item.source, this.filter.source) &&
        Validation.stringAreEqual(item.appname, this.filter.app)
    );
  }

  public filterList(): any[] {
    let copyList = this.list;

    if (this.filter.source !== 'all') {
      copyList = this.filterByBadge();
    }

    if (this.filter.app !== 'all') {
      copyList = this.filterByApp();
    }

    if (this.filter.source !== 'all' && this.filter.app !== 'all') {
      copyList = this.filterBySourceAndApp();
    }

    if (copyList.length === 0) {
      copyList[0] = this.noMatch();
    }
    return copyList;
  }
}
