import { Component, OnInit, Input } from '@angular/core';
import { IBanner } from 'src/app/models/IBanner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() banner: IBanner = { title: '', button: '', text: '', url: '' };
  constructor() {}

  ngOnInit(): void {}
}
