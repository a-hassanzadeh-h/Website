import { Component } from '@angular/core';
import { MetaData } from '../core/models/metadata.model';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../models/IProduct';
import { SubscriptionDestroyer } from '../core/models/subscriptiondestroyer';
import { Language } from '../core/models/language.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent extends SubscriptionDestroyer {
  public products: IProduct[] = [];
  constructor(
    private meta: MetaData,
    private product: ProductsService,
    private language: Language
  ) {
    super();
    this.setMetaData();
    this.loadProducts();
  }

  loadProducts(): void {
    this.AddSubscription(
      this.product.getProducts().subscribe((resp) => {
        this.products = resp[this.language.using()];
      })
    );
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
}
