import { IFilterBar } from './Interface/IFilterbar';
import { ISelectFilterOption } from './Interface/ISelectFilterOption';
import { ArrayHelper } from 'src/app/models/arrayHelper';

export class FilterBar implements IFilterBar {
  select1: string;
  select1List: ISelectFilterOption[];
  select2: string;
  select2List: ISelectFilterOption[];
  applyFilter: any;
  cancelFilter: any;
  faIcon: string;

  constructor(
    select1: string,
    select1List: ISelectFilterOption[],
    select2: string,
    select2List: ISelectFilterOption[],
    applyFilter: any,
    cancelFilter: any,
    faIcon: any
  ) {
    this.select1 = select1;
    this.select1List = select1List;
    this.select2 = select2;
    this.select2List = select2List;
    this.applyFilter = applyFilter;
    this.cancelFilter = cancelFilter;
    this.faIcon = faIcon;
  }
}
