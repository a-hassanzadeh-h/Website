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

  private toLowerCase(text: string): string {
    return text.toLocaleLowerCase();
  }

  private stringAreEqual(text1: string, text2: string): boolean {
    return this.toLowerCase(text1) === this.toLowerCase(text2);
  }

  private filterByApp(): any[] {
    return this.list.filter(item =>
      this.stringAreEqual(item.appname, this.filter.app)
    );
  }

  private filterByBadge(): any[] {
    return this.list.filter(item =>
      this.stringAreEqual(item.badge, this.filter.badge)
    );
  }

  filterByBadgeAndApp(): any[] {
    return this.list.filter(
      item =>
        this.stringAreEqual(item.badge, this.filter.badge) &&
        this.stringAreEqual(item.appname, this.filter.app)
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

    if (
      this.filter.badge !== 'all' &&
      this.filter.app !== 'all' &&
      this.filter.date !== 'undefined'
    ) {
      copyList = this.filterByBadgeAndApp();
    }
    console.log(copyList);
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
