import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { IFilterBar } from '../../Models/Interface/IFilterbar';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {
  @Input() filterBar: IFilterBar;
  @Output() select1 = new EventEmitter<string>();
  @Output() select2 = new EventEmitter<string>();
  @Output() date = new EventEmitter<string>();
  selected = 'all';
  selected2 = 'all';
  constructor() {}

  ngOnInit(): void {}

  public setSelect1Filter($event): void {
    this.select1.emit($event.value);
  }

  public setSelect2Filter($event): void {
    this.select2.emit($event.value);
  }

  public setDateChanged($event) {
    this.date.emit($event.value);
  }

  public resetFilter(): void {
    this.selected = 'all';
    this.selected2 = 'all';
    this.filterBar.cancelFilter();
  }

  public applyFilter(): void {
    this.filterBar.applyFilter();
  }
}
