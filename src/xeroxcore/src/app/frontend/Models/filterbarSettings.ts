import { IFilterBar } from '../Models/Interface/IFilterbar';
import { FilterBar } from '../Models/FilterBar';
import { IFilterbarSetting } from './Interface/IFilterbarSetting';

export class FilterBarSettings implements IFilterbarSetting {
  public CreateFilterBar(
    select1Name: string,
    select1List: any[],
    select2Name: string,
    select2List: any[],
    faIcon: string
  ): IFilterBar {
    const filter = new FilterBar();
    filter.select1 = select1Name;
    filter.select1List = select1List;

    filter.select2 = select2Name;
    filter.select2List = select2List;
    filter.faIcon = faIcon;
    return filter;
  }
}
