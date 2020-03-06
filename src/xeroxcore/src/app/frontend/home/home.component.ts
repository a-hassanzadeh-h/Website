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
    { img: 'addfeatures', text: 'Build more Features, no time waste' },
    { img: 'analytics', text: 'Boost revenue with faster development' },
    { img: 'shipping', text: 'Lunch your products faster than ever' }
  ];

  benefitsList = [
    { img: 'security', text: 'Secure' },
    { img: 'performance', text: 'Efficient' },
    { img: 'maintenance', text: 'Maintainable' },
    { img: 'deployment', text: 'Easy to deply' }
  ];

  constructor(private titleService: Title) {
    titleService.setTitle('Xeroxcore Home');
  }

  public ngAfterViewInit(): void {
    AnimationHelper.implementDelay('.action');
  }
}
