import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IFilterBar } from '../Models/Interface/IFilterbar';
import { DownloadsFilterBarSettings } from './DownloadsFilterBarSettings';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {
  filterBar: IFilterBar;
  list: [];
  constructor(private titleService: Title) {
    titleService.setTitle('Xeroxcore Downloads');
  }

  public setApp($event): void {}

  public setSource($event): void {}

  ngOnInit(): void {
    this.filterBar = DownloadsFilterBarSettings.CreateFilterBar();
  }
}
