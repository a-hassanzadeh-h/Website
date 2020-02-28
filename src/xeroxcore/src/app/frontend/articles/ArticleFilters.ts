import { Validation } from 'src/app/models/validation';
import { BaseFilter } from '../Models/baseFilter';

export class ArticleFilter extends BaseFilter {
  constructor(originaList: any[]) {
    super(originaList);
  }

  private filterByBadge(): any[] {
    return this.list.filter(item =>
      Validation.stringAreEqual(item.badge, this.filter.badge)
    );
  }

  private filterByBadgeAndApp(): any[] {
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
      copyList[0] = this.noMatch();
    }
    return copyList;
  }

  public resetFilter(): any[] {
    return this.list;
  }
}
