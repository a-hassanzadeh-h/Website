import { ISelectFilterOption } from './ISelectFilterOption';

export interface IFilterBar {
  select1: string;
  select1List: ISelectFilterOption[];
  select2: string;
  select2List: ISelectFilterOption[];
  applyFilter: any;
  cancelFilter: any;
  faIcon: string;
}
