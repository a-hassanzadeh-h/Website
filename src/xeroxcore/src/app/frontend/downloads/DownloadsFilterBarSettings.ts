import { FilterBar } from '../Models/Interface/FilterBar';
import { IFilterBar } from '../Models/Interface/IFilterbar';

export class DownloadsFilterBarSettings {
  public static CreateFilterBar(): IFilterBar {
    const filter = new FilterBar();
    filter.select1 = 'App name';
    filter.select1List = [
      { value: 'all', viewValue: 'All' },
      { value: 'xeroxcore', viewValue: 'Xeroxcore' },
      { value: 'Xeroxcore-website', viewValue: 'Xeroxcore-Website' },
      { value: 'xeroxcore-mini', viewValue: 'Xeroxcore-Mini' }
    ];
    filter.select2 = 'Source';
    filter.select2List = [
      { value: 'all', viewValue: 'All' },
      { value: 'github', viewValue: 'GitHub' },
      { value: 'xeroxcore', viewValue: 'Xeroxcore' }
    ];
    return filter;
  }
}
