import { Component, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PopUpAnimation } from '../Models/animation';
import { BaseFilter } from '../Models/baseFilter';
import { FetchDataService } from 'src/app/shared/service/fetch-data.service';
import { SubscriptionDestroyer } from 'src/app/models/SubscriptionDestroyer';
import { IArticle } from '../Models/Interface/IArticle';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  animations: [PopUpAnimation]
})
export class ArticlesComponent extends SubscriptionDestroyer {
  @ViewChild(ArticleComponent) articleComponent;

  public articlesFilter: BaseFilter = new BaseFilter();
  public article: IArticle;
  constructor(
    private titleService: Title,
    private articleService: FetchDataService
  ) {
    super();
    titleService.setTitle('Xeroxcore Articles');
    this.initArticleList();
  }

  private initArticleList() {
    this.AddSubscription(
      this.articleService.getArticles().subscribe(list => {
        this.articlesFilter.originalList = list;
        this.articlesFilter.list = list;
        this.articlesFilter.CreateFilterBar(
          'Badge',
          4,
          'App name',
          1,
          'fa-bookmark'
        );
      })
    );
  }

  public setApp(text: string): void {
    this.articlesFilter.filter.app = text;
  }

  public setBadge(text: string): void {
    this.articlesFilter.filter.badge = text;
  }

  public setDate(text: string): void {
    this.articlesFilter.filter.date = text;
  }
}
