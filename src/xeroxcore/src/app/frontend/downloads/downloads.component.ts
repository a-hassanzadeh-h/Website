import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IFilterBar } from '../Models/Interface/IFilterbar';
import { FilterBarSettings } from '../Models/filterbarSettings';
import { PopUpAnimation } from '../Models/animation';
import { DownloadFilter } from './DownloadFilter';
import { ArrayHelper } from 'src/app/models/arrayHelper';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss'],
  animations: [PopUpAnimation]
})
export class DownloadsComponent implements OnInit {
  originalList = [
    {
      appname: 'Xeroxcore-website',
      date: '2020-01-15',
      title: 'Xeroxcore-website',
      version: '3.52.2',
      size: '2.05mb',
      source: 'Xeroxcore'
    },
    {
      appname: 'Xeroxcore',
      date: '2020-01-14',
      title: 'Xeroxcore',
      version: '2.48.5',
      size: '3.00mb',
      source: 'Github'
    }
  ];
  filterBar: IFilterBar;
  downloadFilter: DownloadFilter = new DownloadFilter(this.originalList);
  list: any[];

  constructor(private titleService: Title) {
    titleService.setTitle('Xeroxcore Downloads');
    this.createDownloadFilterBar();
  }

  private createDownloadFilterBar() {
    const filter = new FilterBarSettings().CreateFilterBar(
      'App name',
      ArrayHelper.GetSelectList(this.originalList, 0),
      'Version',
      ArrayHelper.GetSelectList(this.originalList, 3),
      'fa-th-list'
    );
    filter.applyFilter = () =>
      (this.list = this.downloadFilter.filterDownloadsList());
    filter.cancelFilter = () => (this.list = this.downloadFilter.resetFilter());
    this.filterBar = filter;
  }

  public setApp($event): void {
    this.downloadFilter.filter.app = $event;
  }

  public setSource($event): void {
    this.downloadFilter.filter.version = $event;
  }

  ngOnInit(): void {
    this.list = this.downloadFilter.resetFilter();
  }
}
