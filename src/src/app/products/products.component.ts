import { Component, OnInit } from '@angular/core';
import { MetaData } from '../core/models/metadata.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private meta: MetaData) {
    this.setMetaData();
  }

  private setMetaData(): void {
    this.meta.alterTitle('Xeroxcore products');
    this.meta.alterMetaData([
      { description: 'og:title', content: 'Xeroxcore products' },
      { description: 'og:url', content: 'https://xeroxcore.org/products' },
      {
        description: 'og:description',
        content:
          'A wide variety of development tools to support speed up you and your teams tasks within a project.',
      },
      {
        description: 'description',
        content:
          'A wide variety of development tools to support speed up you and your teams tasks within a project.',
      },
      {
        description: 'og:image',
        content: '/assets/images/home/development.png',
      },
    ]);
  }

  ngOnInit(): void {}
}
