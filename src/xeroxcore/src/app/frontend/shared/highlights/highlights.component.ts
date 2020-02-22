import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements AfterViewInit {
  @Input() title: string;
  @Input() subContent: string;
  @Input() list = [];

  constructor() {}

  ngAfterViewInit(): void {}
}
