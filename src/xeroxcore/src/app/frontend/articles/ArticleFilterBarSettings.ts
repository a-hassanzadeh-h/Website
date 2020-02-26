import { FilterBar } from '../Models/Interface/FilterBar';
import { IFilterBar } from '../Models/Interface/IFilterbar';

export class ArticleFilterBarSettings {
  public static CreateFilterBar(): IFilterBar {
    const filter = new FilterBar();
    filter.select1 = 'Badge';
    filter.select1List = [
      { value: 'all', viewValue: 'All' },
      { value: 'security', viewValue: 'Security' },
      { value: 'bug fix', viewValue: 'Bug Fix' },
      { value: 'patch', viewValue: 'Patch' }
    ];
    filter.select2 = 'App name';
    filter.select2List = [
      { value: 'all', viewValue: 'All' },
      { value: 'xeroxcore', viewValue: 'Xeroxcore' },
      { value: 'Xeroxcore-website', viewValue: 'Xeroxcore-Website' },
      { value: 'xeroxcore-mini', viewValue: 'Xeroxcore-Mini' }
    ];
    return filter;
  }
}
