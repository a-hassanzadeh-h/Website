import { Component, OnInit } from '@angular/core';
import { MetaData } from 'src/app/core/models/metadata.model';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss'],
})
export class NotfoundComponent implements OnInit {
  constructor(private meta: MetaData) {
    this.setMetaData();
  }
  private setMetaData(): void {
    this.meta.alterTitle('404 Page Not found');
    this.meta.alterMetaData([
      { description: 'og:title', content: '404 Page not found' },
      { description: 'og:url', content: 'https://xeroxcore.org/notfound' },
      {
        description: 'og:description',
        content:
          'this is a page that explains that the page does not exist, has been delete or moved',
      },
      {
        description: 'description',
        content:
          'this is a page that explains that the page does not exist, has been delete or moved',
      },
      {
        description: 'og:image',
        content: '/assets/images/notfound.png',
      },
    ]);
  }
  ngOnInit(): void {}

  public getUrl(): string {
    return window.location.href;
  }

  public previousPage(): void {
    window.history.back();
  }
}
