import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  banner = {
    title: 'ABOUT.bannerTitle',
    button: 'ABOUT.bannerButton',
    text: 'ABOUT.bannerText',
    url: 'ABOUT.bannerUrl',
  };
  constructor() {}

  ngOnInit(): void {}
}
