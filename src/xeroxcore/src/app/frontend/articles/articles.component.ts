import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PopUpAnimation } from '../Models/animation';
import { BaseFilter } from '../Models/baseFilter';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  animations: [PopUpAnimation]
})
export class ArticlesComponent implements OnInit {
  originalList = [];
  articlesFilter: BaseFilter = new BaseFilter(this.originalList);
  list: any[];
  downloadFilter: any;

  constructor(private titleService: Title) {
    titleService.setTitle('Xeroxcore Articles');
    this.articlesFilter.CreateFilterBar(
      'Badge',
      3,
      'App name',
      0,
      'fa-bookmark'
    );
  }

  public setApp(text: string): void {
    this.articlesFilter.filter.app = text;
  }

  public setBadge(text: string): void {
    this.articlesFilter.filter.badge = text;
  }

  public GetBadgeClass(type: string): string {
    return type.toLowerCase();
  }

  ngOnInit(): void {
    this.list = this.articlesFilter.resetFilter();
  }
}
