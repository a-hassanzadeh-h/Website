import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PopUpAnimation } from '../Models/animation';
import { BaseFilter } from '../Models/baseFilter';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss'],
  animations: [PopUpAnimation]
})
export class DownloadsComponent implements OnInit {
  originalList = [];
  downloadsFilter: BaseFilter = new BaseFilter(this.originalList);
  list: any[];

  constructor(private titleService: Title) {
    titleService.setTitle('Xeroxcore Downloads');
    this.downloadsFilter.CreateFilterBar(
      'App, name',
      0,
      'Version',
      3,
      'fa-th-list'
    );
  }

  public setApp($event): void {
    this.downloadsFilter.filter.app = $event;
  }

  public setSource($event): void {
    this.downloadsFilter.filter.version = $event;
  }

  ngOnInit(): void {
    this.list = this.downloadsFilter.resetFilter();
  }
}
