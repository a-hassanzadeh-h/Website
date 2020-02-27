import { Validation } from 'src/app/models/validation';
import { BaseFilter } from '../Models/baseFilter';

export class DownloadFilter extends BaseFilter {
  constructor(originaList: any[]) {
    super(originaList);
  }

  private filterByBadge(): any[] {
    return this.list.filter(item =>
      Validation.stringAreEqual(item.version, this.filter.version)
    );
  }

  private filterByVersionAndApp(): any[] {
    return this.list.filter(
      item =>
        Validation.stringAreEqual(item.version, this.filter.version) &&
        Validation.stringAreEqual(item.appname, this.filter.app)
    );
  }

  public filterList(): any[] {
    let copyList = this.list;

    if (this.filter.version !== 'all') {
      copyList = this.filterByBadge();
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
