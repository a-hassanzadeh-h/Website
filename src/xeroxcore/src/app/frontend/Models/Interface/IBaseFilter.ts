export interface IBaseFilter {
  list: any[];
  filter: {};

  filterByApp(list: any[]): any[];
  filterByDate(list: any[]): any[];
  resetFilter(): any[];
  noMatch(): {};
}
