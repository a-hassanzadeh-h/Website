import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AppConfig } from 'src/app/ConfigFile';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlightsComponent {
  public domain = AppConfig.domain;
  @Input() title: string;
  @Input() subContent: string;
  @Input() list = [];

  constructor() {}
}
