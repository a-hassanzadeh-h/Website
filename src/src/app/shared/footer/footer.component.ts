import { Component } from '@angular/core';
import { Language } from 'src/app/core/models/language.model';
import { SubscriptionDestroyer } from 'src/app/core/models/subscriptiondestroyer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent extends SubscriptionDestroyer {
  date = new Date();
  url: string;
  constructor(private language: Language, private router: Router) {
    super();
    this.AddSubscription(
      router.events.subscribe(() => {
        this.url = this.router.url;
      })
    );
  }

  public changeLanguage(lang: string): boolean {
    this.language.set(lang);
    return false;
  }

  public lang(): string {
    return this.language.using();
  }

  isActive(page: string): boolean {
    if (this.url.includes(page)) {
      return true;
    }
    return false;
  }
}
