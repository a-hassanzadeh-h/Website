import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFilterBar } from '../../Models/Interface/IFilterbar';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filterBar: IFilterBar;
  @Output() select1 = new EventEmitter<string>();
  @Output() select2 = new EventEmitter<string>();
  @Output() date = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public setSelect1Filter($event): void {
    this.select1.emit($event.value);
  }

  public setSelect2Filter($event): void {
    this.select2.emit($event.value);
  }

  public resetFilter(): void {
    this.filterBar.CancelFilter();
  }

  public applyFilter(): void {
    this.filterBar.applyFilter();
  }
}
