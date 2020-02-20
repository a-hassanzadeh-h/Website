import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  actionList = [
    { img: 'addfeatures.png', text: 'Build more Features, no time waste' },
    { img: 'analytics.png', text: 'Boost revenue with faster development' },
    { img: 'shipping.png', text: 'Lunch your products faster than ever' }
  ];

  benefitsList = [
    { img: 'addfeatures.png', text: 'Secure' },
    { img: 'analytics.png', text: 'Efficient' },
    { img: 'shipping.png', text: 'Maintainable' },
    { img: 'shipping.png', text: 'Easy to deply' }
  ];
  constructor() {}

  implementDelay() {
    const cards = document.querySelectorAll('.action');
    let delay = 150;
    cards.forEach(card => {
      delay += 150;
      card.setAttribute('data-aos-delay', delay.toString());
    });
  }

  ngAfterViewInit() {
    this.implementDelay();
  }
}
