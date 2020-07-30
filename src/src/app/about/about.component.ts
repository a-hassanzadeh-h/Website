import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  hints = [
    { title: '', text: '', img: '' },
    { title: '', text: '', img: '' },
    { title: '', text: '', img: '' },
  ];
  banner = {
    title: 'ABOUT.bannerTitle',
    button: 'ABOUT.bannerButton',
    text: 'ABOUT.bannerText',
    url: 'ABOUT.bannerUrl',
  };
  constructor() {}

  ngOnInit(): void {}
}
