import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IFilterBar } from '../Models/Interface/IFilterbar';
import { DownloadsFilterBarSettings } from './DownloadsFilterBarSettings';
import { PopUpAnimation } from '../Models/animation';
import { DownloadFilter } from './DownloadFilter';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss'],
  animations: [PopUpAnimation]
})
export class DownloadsComponent implements OnInit {
  filterBar: IFilterBar;
  downloadFilter: DownloadFilter;
  list: any[];

  originalList = [
    {
      date: '2020-01-15',
      title: 'Xeroxcore-website',
      version: 'Security',
      size: '2.05mb',
      source: 'Xeroxcore',
      appname: 'Xeroxcore-website'
    },
    {
      date: '2020-01-14',
      title: 'Xeroxcore',
      version: 'Security',
      size: '3.00mb',
      source: 'Github',
      appname: 'Xeroxcore'
    }
  ];
  constructor(private titleService: Title) {
    titleService.setTitle('Xeroxcore Downloads');
    this.setFilterBar();
  }

  private setFilterBar() {
    const filter = DownloadsFilterBarSettings.CreateFilterBar();
    filter.applyFilter = () => (this.list = this.downloadFilter.filterList());
    filter.cancelFilter = () => (this.list = this.downloadFilter.resetFilter());
    this.filterBar = filter;
  }

  public setApp($event): void {
    this.downloadFilter.filter.app = $event;
  }

  public setSource($event): void {
    this.downloadFilter.filter.source = $event;
  }

  ngOnInit(): void {
    this.downloadFilter = new DownloadFilter(this.originalList);
    this.list = this.downloadFilter.resetFilter();
  }
}
