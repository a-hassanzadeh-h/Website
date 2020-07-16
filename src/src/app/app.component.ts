import { Component } from '@angular/core';
import { Language } from './core/models/language.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Xeroxcore';

  constructor(private language: Language) {}
}
