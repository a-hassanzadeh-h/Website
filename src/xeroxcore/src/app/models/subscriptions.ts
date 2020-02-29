import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

export class SubscriptionsHelper {
  public static RouteSubscription(router: Router, method: any): Subscription {
    return router.events.subscribe(method);
  }
}
