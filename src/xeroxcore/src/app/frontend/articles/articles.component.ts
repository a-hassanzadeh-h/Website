import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ISelectFilterOption } from '../Models/Interface/ISelectFilterOption';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  types: ISelectFilterOption[] = [
    { value: 'all', viewValue: 'All' },
    { value: 'security', viewValue: 'Security' },
    { value: 'bugfix', viewValue: 'Bug Fix' },
    { value: 'patch', viewValue: 'Patch' }
  ];

  sources: ISelectFilterOption[] = [
    { value: 'all', viewValue: 'All' },
    { value: 'xeroxcore', viewValue: 'Xeroxcore' },
    { value: 'xeroxcore-mini', viewValue: 'Xeroxcore-mini' },
    { value: 'xeroxcore-website', viewValue: 'Xeroxcore-website' }
  ];

  list = [
    {
      date: '2020-01-15',
      title: 'Security Patch 3.58.2',
      badge: 'Security',
      appname: ''
    },
    {
      date: '2020-01-15',
      title: 'Security Patch 3.58.2',
      badge: 'Bug Fix',
      appname: ''
    },
    {
      date: '2020-01-15',
      title: 'Security Patch 3.58.2',
      badge: 'Patch',
      appname: ''
    },
    {
      date: '2020-01-15',
      title: 'Security Patch 3.58.2',
      badge: 'Security',
      appname: ''
    },
    {
      date: '2020-01-15',
      title: 'Security Patch 3.58.2',
      badge: 'Security',
      appname: ''
    },
    {
      date: '2020-01-15',
      title: 'Security Patch 3.58.2',
      badge: 'Security',
      appname: ''
    },
    {
      date: '2020-01-15',
      title: 'Security Patch 3.58.2',
      badge: 'bug fix',
      appname: ''
    },
    {
      date: '2020-01-15',
      title: 'Security Patch 3.58.2',
      badge: 'patch',
      appname: ''
    },
    {
      date: '2020-01-15',
      title: 'Security Patch 3.58.2',
      badge: 'Security',
      appname: ''
    },
    {
      date: '2020-01-15',
      title: 'Security Patch 3.58.2',
      badge: 'Security',
      appname: ''
    }
  ];

  constructor(private titleService: Title) {
    titleService.setTitle('Xeroxcore Articles');
  }

  ngOnInit(): void {}

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
