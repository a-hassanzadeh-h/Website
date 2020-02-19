import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  carousel;
  slider;
  next;
  prev;
  direction;

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

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.next = document.querySelector('.next');
    this.prev = document.querySelector('.prev');
    this.carousel = document.querySelector('.carousel');
    this.slider = document.querySelector('.slider');
    this.moveElement();
    this.elementRef.nativeElement
      .querySelector('.slider')
      .addEventListener('transitionend', this.moveElement.bind(this));
    this.autoSpin();
  }

  autoSpin() {
    setInterval(() => this.nextt(), 4000);
  }

  moveElement() {
    this.next = document.querySelector('.next');
    this.prev = document.querySelector('.prev');
    this.carousel = document.querySelector('.carousel');
    this.slider = document.querySelector('.slider');
    // get the last element and append it to the front
    if (this.direction === 1) {
      this.slider.prepend(this.slider.lastElementChild);
    } else {
      this.slider.appendChild(this.slider.firstElementChild);
    }

    this.slider.style.transition = 'none';
    this.slider.style.transform = 'translate(0)';
    setTimeout(() => {
      this.slider.style.transition = 'all 0.5s';
    });
  }

  nextt() {
    this.direction = -1;
    this.carousel.style.justifyContent = 'flex-start';
    console.log('helo');
    this.slider.style.transform = 'translate(-20%)';
  }

  prevv() {
    if (this.direction === -1) {
      this.direction = 1;
      this.slider.appendChild(this.slider.firstElementChild);
    }
    this.carousel.style.justifyContent = 'flex-end';
    this.slider.style.transform = 'translate(20%)';
  }
}
