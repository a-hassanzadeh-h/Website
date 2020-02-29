export interface IBaseFilter {
  list: any[];
  filter: {};

  ApplyFilter(list: any[], propertyIndex: number, filter): any[];
  resetFilter();
  noMatch(): {};
}
