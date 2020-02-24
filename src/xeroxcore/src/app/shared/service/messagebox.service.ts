import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMessageBox } from '../models/interface/IMessageBox';
import { Messagebox } from '../models/MessageBox';

@Injectable({
  providedIn: 'root'
})
export class MessageboxService {
  private message = new Subject<IMessageBox>();
  message$ = this.message.asObservable();

  constructor() {}

  public redirectToPage(pageName: string, url: string): void {
    const message = new Messagebox();
    message.title = 'Redirect to External Page';
    message.text = `You are being redirected to ${pageName}. Do you wish to Contine?`;
    message.multiOption = true;
    message.optionTitle = 'Yes';
    message.action = () => {
      window.open(url, '_blank');
    };
    this.message.next(message);
  }

  public methodNotReady(): void {
    const message = new Messagebox();
    message.title = 'Not Ready yet';
    message.text =
      'The Page or function is not ready. We apologize for the inconvinance';
    message.multiOption = false;
    this.message.next(message);
  }
}
