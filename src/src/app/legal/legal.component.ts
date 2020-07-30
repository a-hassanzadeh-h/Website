import { Component, OnInit } from '@angular/core';
import { SubscriptionDestroyer } from '../core/models/subscriptiondestroyer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss'],
})
export class LegalComponent extends SubscriptionDestroyer {
  public url = '';
  constructor(private router: Router) {
    super();
    this.AddSubscription(
      router.events.subscribe(() => {
        if (this.router.url.includes('terms')) {
          this.url = 'TERMS';
        } else {
          this.url = 'PRIVACY';
        }
      })
    );
  }

  ngOnInit(): void {}
}
