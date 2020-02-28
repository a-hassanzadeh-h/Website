import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlightsComponent {
  @Input() title: string;
  @Input() subContent: string;
  @Input() list = [];

  constructor() {}
}
