import { Component } from '@angular/core';
import { MessageboxService } from 'src/app/shared/service/messagebox.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {
  private messageService: MessageboxService;
  constructor(private messageBoxService: MessageboxService) {
    this.messageService = messageBoxService;
  }

  createMessageBox(pageName: string, url: string): boolean {
    this.messageService.redirectToPage(pageName, url);
    return false;
  }
}
