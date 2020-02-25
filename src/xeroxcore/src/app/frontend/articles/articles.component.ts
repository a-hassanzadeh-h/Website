import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ISelectFilterOption } from '../Models/Interface/ISelectFilterOption';
import { PopUpAnimation } from '../Models/animation';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  animations: [PopUpAnimation]
})
export class ArticlesComponent implements OnInit {
  types: ISelectFilterOption[] = [
    { value: 'all', viewValue: 'All' },
    { value: 'security', viewValue: 'Security' },
    { value: 'bug fix', viewValue: 'Bug Fix' },
    { value: 'patch', viewValue: 'Patch' }
  ];

  apps: ISelectFilterOption[] = [
    { value: 'all', viewValue: 'All' },
    { value: 'xeroxcore', viewValue: 'Xeroxcore' },
    { value: 'xeroxcore-mini', viewValue: 'Xeroxcore-mini' },
    { value: 'xeroxcore-website', viewValue: 'Xeroxcore-website' }
  ];

  list = [];
  originalList = [
    {
      date: '2020-01-15',
      title: 'Security Patch 3.58.2',
      badge: 'Security',
      content: '',
      appname: 'Xeroxcore-website'
    },
    {
      date: '2020-01-14',
      title: 'Security Patch 3.58.2',
      badge: 'Bug Fix',
      content: '',
      appname: 'Xeroxcore-website'
    },
    {
      date: '2020-01-13',
      title: 'Security Patch 3.58.2',
      badge: 'Patch',
      content: '',
      appname: 'Xeroxcore-mini'
    },
    {
      date: '2020-01-12',
      title: 'Security Patch 3.58.2',
      badge: 'Security',
      content: '',
      appname: 'Xeroxcore-website'
    },
    {
      date: '2020-01-11',
      title: 'Security Patch 3.58.2',
      badge: 'Security',
      content: '',
      appname: 'Xeroxcore-mini'
    },
    {
      date: '2020-01-10',
      title: 'Security Patch 3.58.2',
      badge: 'Security',
      content: '',
      appname: 'Xeroxcore'
    }
  ];

  filter = {
    badge: 'all',
    date: '',
    app: 'all'
  };

  constructor(private titleService: Title) {
    titleService.setTitle('Xeroxcore Articles');
  }

  ngOnInit(): void {
    this.list = this.originalList;
  }

  public resetFilter(): void {
    this.list = this.originalList;
  }

  private toLowerCase(text: string): string {
    return text.toLocaleLowerCase();
  }

  private filterSelect(): void {
    if (this.filter.app !== 'all') {
      this.list = this.originalList.filter(
        item =>
          this.toLowerCase(item.appname) === this.toLowerCase(this.filter.app)
      );
    }

    if (this.filter.badge !== 'all') {
      this.list = this.originalList.filter(
        item =>
          this.toLowerCase(item.badge) === this.toLowerCase(this.filter.badge)
      );
    }

    if (this.filter.badge !== 'all' && this.filter.app !== 'all') {
      this.list = this.originalList.filter(
        item =>
          this.toLowerCase(item.badge) ===
            this.toLowerCase(this.filter.badge) &&
          this.toLowerCase(item.appname) === this.toLowerCase(this.filter.app)
      );
    }

    if (this.filter.badge === 'all' && this.filter.app === 'all') {
      this.resetFilter();
    }

    if (this.list.length === 0) {
      this.list[0] = {
        date: '0',
        title: 'Your Search gave 0 matches.',
        badge: '',
        content: '',
        appname: ''
      };
    }
  }

  public filterList(): void {
    this.filterSelect();
  }

  public setAppFilter($event): void {
    this.filter.app = $event.value;
  }

  public setBadgeFilter($event): void {
    this.filter.badge = $event.value;
  }

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
}
