import { BaseFilter } from '../Models/baseFilter';

export class ArticleFilter extends BaseFilter {
  constructor(originaList: any[]) {
    super(originaList);
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
      copyList[0] = this.noMatch();
    }
    return copyList;
  }

  public resetFilter(): any[] {
    return this.list;
  }
}
