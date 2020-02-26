import { Validation } from 'src/app/models/validation';

export class DownloadFilter {
  private list: any[];

  filter = {
    source: 'all',
    date: '',
    app: 'all'
  };

  constructor(originaList: any[]) {
    this.list = originaList;
  }

  private filterByApp(): any[] {
    return this.list.filter(item =>
      Validation.stringAreEqual(item.appname, this.filter.app)
    );
  }

  private filterByBadge(): any[] {
    return this.list.filter(item =>
      Validation.stringAreEqual(item.source, this.filter.source)
    );
  }

  filterByBadgeAndApp(): any[] {
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
      copyList = this.filterByBadgeAndApp();
    }

    if (copyList.length === 0) {
      copyList[0] = {
        date: '0',
        title: 'Your Search gave 0 matches.',
        source: '',
        version: '',
        size: '',
        appname: ''
      };
    }
    return copyList;
  }

  public resetFilter(): any[] {
    return this.list;
  }
}
