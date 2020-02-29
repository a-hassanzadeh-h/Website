import { Component, OnInit } from '@angular/core';
import { IArticle } from '../Models/Interface/IArticle';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public article: IArticle;
  constructor() {}

  ngOnInit(): void {}
  public closeArticle() {
    this.article = null;
  }

  getText(text) {
    return document.write(text);
  }
}
