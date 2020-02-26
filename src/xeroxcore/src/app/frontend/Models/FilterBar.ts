import { IFilterBar } from './Interface/IFilterbar';
import { ISelectFilterOption } from './Interface/ISelectFilterOption';

export class FilterBar implements IFilterBar {
  select1: string;
  select1List: ISelectFilterOption[];
  select2: string;
  select2List: ISelectFilterOption[];
  applyFilter: any;
  cancelFilter: any;
  faIcon: string;
}
