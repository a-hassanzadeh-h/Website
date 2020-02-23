import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export class SubscriptionDestroyer implements OnDestroy {
  private subscritption: Subscription = new Subscription();

  public AddSubscription(subscription: Subscription): void {
    if (subscription !== null) {
      this.subscritption.add(subscription);
    }
  }

  public ngOnDestroy(): void {
    console.log('destroyed');
    this.subscritption.unsubscribe();
  }
}
