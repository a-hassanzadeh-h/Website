import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { routerTransition } from './Models/animation';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss'],
  animations: [routerTransition]
})
export class FrontendComponent implements OnInit {
  constructor() {
    AOS.init();
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  ngOnInit(): void {}
}
