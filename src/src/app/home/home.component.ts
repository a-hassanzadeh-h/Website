import { Component } from '@angular/core';
import { MetaData } from '../core/models/metadata.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private meta: MetaData) {
    this.setMetaData();
  }

  private setMetaData(): void {
    this.meta.alterTitle('Welcome to Xeroxcore');
    this.meta.alterMetaData([
      { description: 'og:title', content: 'Welcome to Xeroxcore' },
      { description: 'og:url', content: 'https://xeroxcore.org/home' },
      {
        description: 'og:description',
        content:
          "Xeroxcore is a .Net Core API framework. The purpose of the framework is to help you build web API's that are secure maintainable and efficient",
      },
      {
        description: 'description',
        content:
          "Xeroxcore is a .Net Core API framework. The purpose of the framework is to help you build web API's that are secure maintainable and efficient",
      },
      {
        description: 'og:image',
        content: '/assets/images/home/development.png',
      },
    ]);
  }
}
