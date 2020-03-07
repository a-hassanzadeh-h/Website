import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PopUpAnimation } from '../Models/animation';
import { BaseFilter } from '../Models/baseFilter';
import { FetchDataService } from 'src/app/shared/service/fetch-data.service';
import { SubscriptionDestroyer } from 'src/app/models/SubscriptionDestroyer';
import { MessageboxService } from 'src/app/shared/service/messagebox.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss'],
  animations: [PopUpAnimation]
})
export class DownloadsComponent extends SubscriptionDestroyer {
  downloadsFilter: BaseFilter = new BaseFilter();
  messageBox: MessageboxService;
  constructor(
    private titleService: Title,
    private downloadService: FetchDataService,
    private messageBoxService: MessageboxService
  ) {
    super();
    titleService.setTitle('Xeroxcore Downloads');
    this.messageBox = messageBoxService;
    this.initDownloadList();
  }

  private initDownloadList() {
    this.AddSubscription(
      this.downloadService.getDownloads().subscribe(list => {
        this.downloadsFilter.originalList = list;
        this.downloadsFilter.list = list;
        this.downloadsFilter.CreateFilterBar(
          'App, name',
          1,
          'Version',
          4,
          'fa-th-list'
        );
      })
    );
  }

  public viewHash(text: string): void {
    this.messageBoxService.viewHash(text);
  }

  public setApp($event): void {
    this.downloadsFilter.filter.app = $event;
  }

  public setSource($event): void {
    this.downloadsFilter.filter.version = $event;
  }

  public setDate(text: string): void {
    this.downloadsFilter.filter.date = text;
  }
}
