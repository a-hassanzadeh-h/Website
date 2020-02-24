import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('404 Page can\'t be found');
  }

  ngOnInit() {}

  public getUrl(): string {
    return window.location.href;
  }

  public previusePage(): void {
    window.history.back();
  }
}
