import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  items = [
    { key: 'key 1', img: ['ang', 'c#', 'vscode'] },
    { key: 'key 1', img: ['npm', '3G', 'php'] },
    { key: 'key 1', img: ['MySql', 'c#', 'Saiyan Web'] },
    { key: 'key 2', img: ['C++', 'C', 'MCS Unity'] },
  ];
  slider;
  sliderItems;
  prev;
  next;
  constructor() {}

  ngAfterViewInit(): void {
    this.slider = document.getElementById('slider');
    this.sliderItems = document.getElementById('slides');
    this.prev = document.getElementById('prev');
    this.next = document.getElementById('next');
    this.slide(this.slider, this.sliderItems, this.prev, this.next);
  }

  slide(wrapper, items, prev, next) {
    var posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      slides = items.getElementsByClassName('slide'),
      slidesLength = slides.length,
      slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
      threshold = 10,
      firstSlide = slides[0],
      lastSlide = slides[slidesLength - 1],
      cloneFirst = firstSlide.cloneNode(true),
      cloneLast = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true;

    // Clone first and last slide
    items.appendChild(cloneFirst);
    items.insertBefore(cloneLast, firstSlide);
    wrapper.classList.add('loaded');

    // Mouse events
    items.onmousedown = dragStart;

    // Touch events
    items.addEventListener('touchstart', dragStart);
    items.addEventListener('touchend', dragEnd);
    items.addEventListener('touchmove', dragAction);

    // Click events
    prev.addEventListener('click', () => {
      shiftSlide(-1, null);
    });
    next.addEventListener('click', () => {
      shiftSlide(1, null);
    });

    // Transition events
    items.addEventListener('transitionend', checkIndex);

    function dragStart(e) {
      e = e || window.event;
      e.preventDefault();
      posInitial = items.offsetLeft;

      if (e.type == 'touchstart') {
        posX1 = e.touches[0].clientX;
      } else {
        posX1 = e.clientX;
        document.onmouseup = dragEnd;
        document.onmousemove = dragAction;
      }
    }

    function dragAction(e) {
      e = e || window.event;

      if (e.type == 'touchmove') {
        posX2 = posX1 - e.touches[0].clientX;
        posX1 = e.touches[0].clientX;
      } else {
        posX2 = posX1 - e.clientX;
        posX1 = e.clientX;
      }
      items.style.left = items.offsetLeft - posX2 + 'px';
    }

    function dragEnd(e) {
      posFinal = items.offsetLeft;
      if (posFinal - posInitial < -threshold) {
        shiftSlide(1, 'drag');
      } else if (posFinal - posInitial > threshold) {
        shiftSlide(-1, 'drag');
      } else {
        items.style.left = posInitial + 'px';
      }

      document.onmouseup = null;
      document.onmousemove = null;
    }

    function shiftSlide(dir, action) {
      items.classList.add('shifting');

      if (allowShift) {
        if (!action) {
          posInitial = items.offsetLeft;
        }

        if (dir == 1) {
          items.style.left = posInitial - slideSize + 'px';
          index++;
        } else if (dir == -1) {
          items.style.left = posInitial + slideSize + 'px';
          index--;
        }
      }

      allowShift = false;
    }

    function checkIndex() {
      items.classList.remove('shifting');

      if (index == -1) {
        items.style.left = -(slidesLength * slideSize) + 'px';
        index = slidesLength - 1;
      }

      if (index == slidesLength) {
        items.style.left = -(1 * slideSize) + 'px';
        index = 0;
      }

      allowShift = true;
    }
  }
}