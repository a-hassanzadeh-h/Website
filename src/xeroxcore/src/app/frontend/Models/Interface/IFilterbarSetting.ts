import { IFilterBar } from './IFilterbar';

export interface IFilterbarSetting {
  CreateFilterBar(
    select1Name: string,
    select1List: any[],
    select2Name: string,
    select2List: any[],
    faIcon: string
  ): IFilterBar;
}
