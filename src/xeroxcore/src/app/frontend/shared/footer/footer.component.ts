import { Component, OnDestroy } from '@angular/core';
import { MessageboxService } from 'src/app/shared/service/messagebox.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnDestroy {
  private messageService: MessageboxService;
  constructor(private messageBoxService: MessageboxService) {
    this.messageService = messageBoxService;
  }

  createMessageBox(pageName: string, url: string): boolean {
    this.messageBoxService.redirectToPage(pageName, url);
    return false;
  }
  ngOnDestroy(): void {
    console.log('destroyed');
  }
}
