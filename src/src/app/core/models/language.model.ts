import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorage } from './localstorage.model';

@Injectable()
export class Language {
  constructor(
    public translate: TranslateService,
    private storage: LocalStorage
  ) {
    translate.addLangs(['en', 'th', 'swe']);
    const lang = storage.getData('lang');
    if (lang && this.exist(lang)) translate.use(lang);
    else this.defaultLanguage();
  }

  private defaultLanguage(): void {
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/th|swe/) ? browserLang : 'en');
  }

  private exist(lang: string): boolean {
    return this.translate.getLangs().includes(lang);
  }

  public using(): string {
    return this.translate.currentLang;
  }

  public set(value: string): void {
    if (this.exist(value)) {
      this.storage.insertData('lang', value);
      this.translate.use(value);
    }
  }

  public getAll(): string[] {
    return this.translate.getLangs();
  }
}
