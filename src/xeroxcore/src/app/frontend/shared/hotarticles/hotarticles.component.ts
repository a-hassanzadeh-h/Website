import { Component, AfterViewInit } from '@angular/core';
import { AnimationHelper } from '../../Models/animation';
import { IArticle } from '../../Models/Interface/IArticle';
import { FetchDataService } from 'src/app/shared/service/fetch-data.service';
import { SubscriptionDestroyer } from 'src/app/models/SubscriptionDestroyer';

@Component({
  selector: 'app-hotarticles',
  templateUrl: './hotarticles.component.html',
  styleUrls: ['./hotarticles.component.scss']
})
export class HotarticlesComponent extends SubscriptionDestroyer
  implements AfterViewInit {
  list: IArticle[] = [];
  constructor(private articleService: FetchDataService) {
    super();
    this.initArticleList();
  }

  private initArticleList(): void {
    this.AddSubscription(
      this.articleService
        .getArticles()
        .subscribe(articles => (this.list = articles.slice(0, 3)))
    );
  }

  public ngAfterViewInit(): void {
    AnimationHelper.implementDelay('.cardx');
  }
}
