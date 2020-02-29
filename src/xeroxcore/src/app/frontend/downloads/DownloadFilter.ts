import { BaseFilter } from '../Models/baseFilter';

export class DownloadFilter extends BaseFilter {
  constructor(originaList: any[]) {
    super(originaList);
  }

  public filterDownloadsList(): any[] {
    return this.filterList();
  }
}
