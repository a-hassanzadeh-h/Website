import { BaseFilter } from '../Models/baseFilter';
import { Validation } from 'src/app/models/validation';

export class ArticleFilter extends BaseFilter {
  constructor(originaList: any[]) {
    super(originaList);
  }

  public filterArticles(): any[] {
    return this.filterList();
  }
}
