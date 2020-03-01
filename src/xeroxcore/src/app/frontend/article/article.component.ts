import { Component } from '@angular/core';
import { IArticle } from '../Models/Interface/IArticle';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  public article: IArticle;
  constructor() {}

  public closeArticle() {
    this.article = null;
  }
}
