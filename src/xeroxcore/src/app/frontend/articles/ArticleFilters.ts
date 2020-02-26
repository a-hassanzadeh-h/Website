import { Validation } from 'src/app/models/validation';

export class ArticleFilter {
  private list: any[];

  filter = {
    badge: 'all',
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
      Validation.stringAreEqual(item.badge, this.filter.badge)
    );
  }

  filterByBadgeAndApp(): any[] {
    return this.list.filter(
      item =>
        Validation.stringAreEqual(item.badge, this.filter.badge) &&
        Validation.stringAreEqual(item.appname, this.filter.app)
    );
  }

  public filterList(): any[] {
    let copyList = this.list;

    if (this.filter.badge !== 'all') {
      copyList = this.filterByBadge();
    }

    if (this.filter.app !== 'all') {
      copyList = this.filterByApp();
    }

    if (this.filter.badge !== 'all' && this.filter.app !== 'all') {
      copyList = this.filterByBadgeAndApp();
    }

    if (copyList.length === 0) {
      copyList[0] = {
        date: '0',
        title: 'Your Search gave 0 matches.',
        badge: '',
        content: '',
        appname: ''
      };
    }
    return copyList;
  }

  public resetFilter(): any[] {
    return this.list;
  }
}
