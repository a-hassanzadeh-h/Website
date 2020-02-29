import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from '../Models/Interface/IArticle';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: IArticle;
  constructor() {}

  ngOnInit(): void {}
}
