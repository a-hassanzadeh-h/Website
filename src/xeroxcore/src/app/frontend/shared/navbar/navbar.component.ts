import { Component } from '@angular/core';
import { MessageboxService } from 'src/app/shared/service/messagebox.service';
import { Router } from '@angular/router';
import { SubscriptionDestroyer } from 'src/app/models/SubscriptionDestroyer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends SubscriptionDestroyer {
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

  public createMessageBox(pageName: string, url: string): boolean {
    this.messageBoxService.redirectToPage(pageName, url);
    return false;
  }

  public notReady(): boolean {
    this.messageBoxService.methodNotReady();
    return false;
  }

  public openCloseNav() {
    const topNav = document.getElementById('Topnav');
    if (topNav.className === 'topnav') {
      topNav.className += ' responsive';
    } else {
      topNav.className = 'topnav';
    }
  }
}
