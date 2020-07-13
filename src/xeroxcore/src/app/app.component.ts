import { Component } from '@angular/core';
import { MetaData } from './core/models/metadata';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Xeroxcore';
  date = new Date();
  constructor(private meta: MetaData, public translate: TranslateService) {
    translate.addLangs(['en', 'th', 'swe', 'fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
