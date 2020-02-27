import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IFilterBar } from '../Models/Interface/IFilterbar';
import { FilterBarSettings } from '../Models/filterbarSettings';
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
      version: '3.52.2',
      size: '2.05mb',
      source: 'Xeroxcore',
      appname: 'Xeroxcore-website'
    },
    {
      date: '2020-01-14',
      title: 'Xeroxcore',
      version: '2.48.5',
      size: '3.00mb',
      source: 'Github',
      appname: 'Xeroxcore'
    }
  ];

  constructor(private titleService: Title) {
    titleService.setTitle('Xeroxcore Downloads');
    this.setFilterBar();
  }

  private GetNameFilter() {
    return [
      { value: 'all', viewValue: 'All' },
      { value: 'xeroxcore', viewValue: 'Xeroxcore' },
      { value: 'Xeroxcore-website', viewValue: 'Xeroxcore-Website' },
      { value: 'xeroxcore-mini', viewValue: 'Xeroxcore-Mini' }
    ];
  }

  private GetVersionFilter() {
    return [
      { value: 'all', viewValue: 'All' },
      { value: '3.52.2', viewValue: '3.52.2' },
      { value: '2.48.5', viewValue: '2.48.5' }
    ];
  }

  private setFilterBar() {
    const filter = new FilterBarSettings().CreateFilterBar(
      'App name',
      this.GetNameFilter(),
      'Version',
      this.GetVersionFilter(),
      'fa-th-list'
    );
    filter.applyFilter = () => (this.list = this.downloadFilter.filterList());
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
    this.downloadFilter = new DownloadFilter(this.originalList);
    this.list = this.downloadFilter.resetFilter();
  }
}
