import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carocarousel',
  templateUrl: './carocarousel.component.html',
  styleUrls: ['./carocarousel.component.scss']
})
export class CarocarouselComponent implements OnInit, AfterViewInit {
  title = 'Supported Technology';
  list = [
    '.NET_Core.png',
    'Angular.png',
    'aws.png',
    'Azure.png',
    'microsoft-logo.png',
    'Moby-logo.png',
    'Postgresql.png'
  ];
  slider;
  slides;
  interval;
  firtslide;
  currentpos = 0;
  constructor() {}

  ngAfterViewInit() {
    this.slider = document.getElementById('items');
    this.slides = document.getElementsByClassName('slide');
    this.firtslide = this.slides[0];
  }

  ngOnInit(): void {
    this.startInterval();
  }

  slideElements() {
    this.slider.appendChild(this.slides[0]);
    this.currentpos = 0;
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.slideElements();
    }, 3000);
  }
}
