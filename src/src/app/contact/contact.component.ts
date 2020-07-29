import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  private url: string = '';
  constructor() {}

  ngOnInit(): void {}

  isActive(page: string): boolean {
    if (this.url.includes(page)) {
      return true;
    }
    return false;
  }
}
