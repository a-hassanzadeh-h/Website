import { Component } from '@angular/core';
import { Language } from 'src/app/core/models/language.model';
import { Router } from '@angular/router';
import { SubscriptionDestroyer } from 'src/app/core/models/subscriptiondestroyer';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent extends SubscriptionDestroyer {
  private url: string = '';
  constructor(private language: Language, private router: Router) {
    super();
    this.AddSubscription(
      router.events.subscribe(() => {
        this.url = this.router.url;
      })
    );
  }

  ngOnInit(): void {}

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
