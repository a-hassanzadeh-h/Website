import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  public title = 'Supported Technology';
  public list = [
    'netcore.png',
    'angular.png',
    'aws.png',
    'azure.png',
    'microsoft.png',
    'docker.png',
    'postgresql.png'
  ];

  private carousel;
  private slider;
  private direction;

  constructor(private elementRef: ElementRef) {}

  public ngAfterViewInit(): void {
    this.InitElements();
    this.InitEventListener();
    this.autoSpin();
  }

  private InitElements(): void {
    this.carousel = document.querySelector('.carousel');
    this.slider = document.querySelector('.slider');
  }

  private InitEventListener(): void {
    this.elementRef.nativeElement
      .querySelector('.slider')
      .addEventListener('transitionend', this.moveElement.bind(this));
  }

  private autoSpin(): void {
    setInterval(() => this.NextSlide(), 2500);
  }

  private moveElement(): void {
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

  public NextSlide(): void {
    this.direction = -1;
    this.carousel.style.justifyContent = 'flex-start';
    this.slider.style.transform = 'translate(-20%)';
  }

  public PreviuseSlide(): void {
    if (this.direction === -1) {
      this.direction = 1;
      this.slider.appendChild(this.slider.firstElementChild);
    }
    this.carousel.style.justifyContent = 'flex-end';
    this.slider.style.transform = 'translate(20%)';
  }
}
