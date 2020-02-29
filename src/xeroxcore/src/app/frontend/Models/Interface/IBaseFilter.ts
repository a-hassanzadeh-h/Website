export interface IBaseFilter {
  list: any[];
  filter: {};

  ApplyFilter(propertyIndex: number, filter): any[];
  filterByAppAndProperty(propertyIndex: number, filter): any[];
  resetFilter();
  noMatch(): {};
}
