import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionDestroyer } from 'src/app/core/models/subscriptiondestroyer';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss'],
})
export class HighlightComponent extends SubscriptionDestroyer {
  public title: string = 'HOME.slideTitle';
  public text: string = 'HOME.slideText';
  private url: string = '';

  constructor(private router: Router) {
    super();
    this.AddSubscription(
      router.events.subscribe(() => {
        this.url = this.router.url;
        this.changeContent(this.url);
      })
    );
  }

  private changeContent(page: string): void {
    switch (true) {
      case page.includes('home'):
        this.title = 'HOME.slideTitle';
        this.text = 'HOME.slideText';
        break;
      case page.includes('products'):
        this.title = 'PRODUCTS.slideTitle';
        this.text = 'PRODUCTS.slideText';
        break;
      case page.includes('about'):
        this.title = 'ABOUT.slideTitle';
        this.text = 'ABOUT.slideText';
        break;
      case page.includes('contact'):
        this.title = 'CONTACT.slideTitle';
        this.text = 'CONTACT.slideText';
        break;
    }
  }

  public isActive(page: string): boolean {
    if (this.url.includes(page)) {
      return true;
    }
    return false;
  }
}
