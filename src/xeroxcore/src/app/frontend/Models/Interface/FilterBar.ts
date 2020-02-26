import { IFilterBar } from './IFilterbar';
import { ISelectFilterOption } from './ISelectFilterOption';

export class FilterBar implements IFilterBar {
  select1: string;
  select1List: ISelectFilterOption[];
  select2: string;
  select2List: ISelectFilterOption[];
  applyFilter: any;
  CancelFilter: any;
}
