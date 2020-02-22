import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export class SubscriptionDestroyer implements OnDestroy {
  private subscritption: Subscription;

  public AddSubscription(subscrition: Subscription): void {
    if (subscrition !== null) {
      this.subscritption.add(subscrition);
    }
  }

  public ngOnDestroy(): void {
    this.subscritption.unsubscribe();
  }
}
