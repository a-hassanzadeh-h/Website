import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PopUpAnimation } from '../Models/animation';
import { ArrayHelper } from 'src/app/models/arrayHelper';
import { BaseFilter } from '../Models/baseFilter';
import { FilterBar } from '../Models/FilterBar';
import { IFilterBar } from '../Models/Interface/IFilterbar';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  animations: [PopUpAnimation]
})
export class ArticlesComponent implements OnInit {
  originalList = [];
  articleFilter: IFilterBar = new FilterBar(
    'App name',
    ArrayHelper.GetSelectList(this.originalList, 0),
    'Version',
    ArrayHelper.GetSelectList(this.originalList, 3),
    () => (this.list = this.articlesFIlter.filterList()),
    () => (this.list = this.articlesFIlter.resetFilter()),
    'fa-bookmark'
  );
  articlesFIlter: BaseFilter = new BaseFilter(this.originalList);
  list: any[];
  downloadFilter: any;

  constructor(private titleService: Title) {
    titleService.setTitle('Xeroxcore Articles');
  }

  public setApp(text: string): void {
    this.articlesFIlter.filter.app = text;
  }

  public setBadge(text: string): void {
    this.articlesFIlter.filter.badge = text;
  }

  public GetBadgeClass(type: string): string {
    return type.toLowerCase();
  }

  ngOnInit(): void {
    this.list = this.articlesFIlter.resetFilter();
  }
}
