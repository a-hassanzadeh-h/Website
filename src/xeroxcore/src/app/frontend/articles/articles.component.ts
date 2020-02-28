import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PopUpAnimation } from '../Models/animation';
import { IFilterBar } from '../Models/Interface/IFilterbar';
import { FilterBarSettings } from '../Models/filterbarSettings';
import { ArticleFilter } from './ArticleFilters';
import { ArrayHelper } from 'src/app/models/arrayHelper';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  animations: [PopUpAnimation]
})
export class ArticlesComponent implements OnInit {
  originalList = [
    {
      date: '2020-01-15',
      title: 'Security Patch 3.58.2',
      badge: 'Security',
      content: '',
      appname: 'Xeroxcore-website'
    },
    {
      date: '2020-01-14',
      title: 'Security Patch 3.58.2',
      badge: 'Bug Fix',
      content: '',
      appname: 'Xeroxcore-website'
    },
    {
      date: '2020-01-13',
      title: 'Security Patch 3.58.2',
      badge: 'Patch',
      content: '',
      appname: 'Xeroxcore-mini'
    },
    {
      date: '2020-01-12',
      title: 'Security Patch 3.58.2',
      badge: 'Security',
      content: '',
      appname: 'Xeroxcore-website'
    },
    {
      date: '2020-01-11',
      title: 'Security Patch 3.58.2',
      badge: 'Security',
      content: '',
      appname: 'Xeroxcore-mini'
    },
    {
      date: '2020-01-10',
      title: 'Security Patch 3.58.2',
      badge: 'Security',
      content: '',
      appname: 'Xeroxcore'
    }
  ];
  filterBar: IFilterBar;
  articlesFIlter: ArticleFilter = new ArticleFilter(this.originalList);
  list: any[];

  constructor(private titleService: Title) {
    titleService.setTitle('Xeroxcore Articles');
    this.createArticleFilterBar();
  }

  private GetList(propertiIndex: number) {
    let list = ArrayHelper.getValueFromArray(this.originalList, propertiIndex);
    list = ArrayHelper.CreateSelectBoxArray(list);
    return list;
  }

  private createArticleFilterBar() {
    const filter = new FilterBarSettings().CreateFilterBar(
      'Badge ',
      this.GetList(2),
      'App name',
      this.GetList(4),
      'fa-bookmark'
    );
    filter.applyFilter = () => (this.list = this.articlesFIlter.filterList());
    filter.cancelFilter = () => (this.list = this.articlesFIlter.resetFilter());
    this.filterBar = filter;
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
