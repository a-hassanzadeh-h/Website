import { Component } from '@angular/core';
import { IMessageBox } from '../models/interface/IMessageBox';
import { MessageboxService } from '../service/messagebox.service';
import { SubscriptionDestroyer } from 'src/app/models/SubscriptionDestroyer';
import { Messagebox } from '../models/MessageBox';

@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.scss']
})
export class MessageboxComponent extends SubscriptionDestroyer {
  public showMessage = false;
  public message: IMessageBox;
  constructor(private messageService: MessageboxService) {
    super();
    this.message = new Messagebox();
    this.InitSubscriptions();
  }

  private InitSubscriptions(): void {
    this.AddSubscription(
      this.messageService.message$.subscribe(message => {
        this.message = message;
        this.showMessage = true;
      })
    );
  }

  public CloseMessageBox(): void {
    this.showMessage = false;
  }

  public actionClick(): void {
    this.message.action();
    this.showMessage = false;
  }
}
