import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {
  constructor(private titleService: Title) {
    titleService.setTitle('Xeroxcore Downloads');
  }

  ngOnInit(): void {}
}
