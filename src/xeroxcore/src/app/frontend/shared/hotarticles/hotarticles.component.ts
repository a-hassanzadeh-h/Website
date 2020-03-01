import { Component, AfterViewInit } from '@angular/core';
import { AnimationHelper } from '../../Models/animation';
import { IArticle } from '../../Models/Interface/IArticle';
import { FetchDataService } from 'src/app/shared/service/fetch-data.service';

@Component({
  selector: 'app-hotarticles',
  templateUrl: './hotarticles.component.html',
  styleUrls: ['./hotarticles.component.scss']
})
export class HotarticlesComponent implements AfterViewInit {
  list: IArticle[] = [];
  constructor(private articleService: FetchDataService) {
    articleService.getArticles().subscribe(articles => (this.list = articles));
  }

  public ngAfterViewInit(): void {
    AnimationHelper.implementDelay('.cardx');
  }
}
