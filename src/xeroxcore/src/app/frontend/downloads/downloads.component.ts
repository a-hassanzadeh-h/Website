import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IFilterBar } from '../Models/Interface/IFilterbar';
import { PopUpAnimation } from '../Models/animation';
import { ArrayHelper } from 'src/app/models/arrayHelper';
import { BaseFilter } from '../Models/baseFilter';
import { FilterBar } from '../Models/FilterBar';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss'],
  animations: [PopUpAnimation]
})
export class DownloadsComponent implements OnInit {
  originalList = [];
  downloadFilter: IFilterBar = new FilterBar(
    'App name',
    ArrayHelper.GetSelectList(this.originalList, 0),
    'Version',
    ArrayHelper.GetSelectList(this.originalList, 3),
    () => (this.list = this.downloadsFilter.filterList()),
    () => (this.list = this.downloadsFilter.resetFilter()),
    'fa-th-list'
  );
  downloadsFilter: BaseFilter = new BaseFilter(this.originalList);
  list: any[];

  constructor(private titleService: Title) {
    titleService.setTitle('Xeroxcore Downloads');
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
