import { Component } from '@angular/core';
import { MetaData } from './core/models/metadata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Xeroxcore';
  date = new Date();
  constructor(private meta: MetaData) {}
}
