import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/core/models/language.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private language: Language) {}

  ngOnInit(): void {}

  public changeLanguage(lang: string): boolean {
    this.language.set(lang);
    return false;
  }

  public lang(): string {
    return this.language.using();
  }
}
