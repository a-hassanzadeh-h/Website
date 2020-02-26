import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PopUpAnimation } from '../Models/animation';
import { IFilterBar } from '../Models/Interface/IFilterbar';
import { ArticleFilterBarSettings } from './ArticleFilterBarSettings';
import { ArticleFilter } from './ArticleFilters';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  animations: [PopUpAnimation]
})
export class ArticlesComponent implements OnInit {
  filterBar: IFilterBar;
  articlesFIlter: ArticleFilter;
  list: any[];
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

  constructor(private titleService: Title) {
    titleService.setTitle('Xeroxcore Articles');
    this.setFilterBar();
  }

  private setFilterBar() {
    const filter = ArticleFilterBarSettings.CreateFilterBar();
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

  ngOnInit(): void {
    this.articlesFIlter = new ArticleFilter(this.originalList);
    this.list = this.articlesFIlter.resetFilter();
  }

  public GetBadgeClass(type: string): string {
    return type.toLowerCase();
  }
}
