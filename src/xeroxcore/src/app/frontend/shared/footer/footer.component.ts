import { Component, OnDestroy } from '@angular/core';
import { MessageboxService } from 'src/app/shared/service/messagebox.service';
import { SubscriptionDestroyer } from 'src/app/models/SubscriptionDestroyer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends SubscriptionDestroyer
  implements OnDestroy {
  private messageService: MessageboxService;
  private url: string;

  constructor(
    private messageBoxService: MessageboxService,
    private router: Router
  ) {
    super();
    this.AddSubscription(
      router.events.subscribe(() => (this.url = this.router.url))
    );
    this.messageBoxService = messageBoxService;
  }

  public isActive(url: string): boolean {
    if (this.url.includes(url)) {
      return true;
    }
    return false;
  }

  public notReady(): boolean {
    this.messageBoxService.methodNotReady();
    return false;
  }

  public createMessageBox(pageName: string, url: string): boolean {
    this.messageBoxService.redirectToPage(pageName, url);
    return false;
  }

  public GetYear(): string {
    return new Date().getFullYear().toString();
  }
}
