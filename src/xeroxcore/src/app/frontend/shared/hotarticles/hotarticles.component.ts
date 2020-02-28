import { Component, AfterViewInit } from '@angular/core';
import { AnimationHelper } from '../../Models/animation';

@Component({
  selector: 'app-hotarticles',
  templateUrl: './hotarticles.component.html',
  styleUrls: ['./hotarticles.component.scss']
})
export class HotarticlesComponent implements AfterViewInit {
  list = [
    {
      Title: 'Patch 3.58.2',
      type: 'Security',
      content:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dol...',
      link: '/articles/article/3582'
    },
    {
      Title: 'Patch 3.50.2',
      type: 'Patch',
      content:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dol...',
      link: '/articles/article/3582'
    },
    {
      Title: 'Patch 3.49.9s',
      type: 'Bug fix',
      content:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dol...',
      link: '/articles/article/3582'
    }
  ];
  constructor() {}

  public GetBadgeClass(type: string): string {
    switch (type.toLowerCase()) {
      case 'security':
        return 'security';
      case 'bug fix':
        return 'bug';
      case 'patch':
        return 'patch';
    }
  }

  public ngAfterViewInit(): void {
    AnimationHelper.implementDelay('.cardx');
  }
}
