import { Component, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AnimationHelper } from '../Models/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  actionList = [
    { img: 'addfeatures.webp', text: 'Build more Features, no time waste' },
    { img: 'analytics.webp', text: 'Boost revenue with faster development' },
    { img: 'shipping.webp', text: 'Lunch your products faster than ever' }
  ];

  benefitsList = [
    { img: 'security.webp', text: 'Secure' },
    { img: 'performance.webp', text: 'Efficient' },
    { img: 'maintenance.webp', text: 'Maintainable' },
    { img: 'deployment.webp', text: 'Easy to deply' }
  ];

  constructor(private titleService: Title) {
    titleService.setTitle('Xeroxcore Home');
  }

  public ngAfterViewInit(): void {
    AnimationHelper.implementDelay('.action');
  }
}
