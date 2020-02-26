export interface IBaseFilter {
  list: any[];
  filter: {};

  filterByApp(): any[];
  filterByDate(): any[];
  resetFilter(): any[];
  noMatch(): {};
}
