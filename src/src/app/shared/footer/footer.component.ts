import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/core/models/language.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  date = new Date();
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
