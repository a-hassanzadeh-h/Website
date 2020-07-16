import { Component, OnInit } from '@angular/core';
import { Language } from '../core/models/language.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  date = new Date();
  constructor(public language: Language) { }
}
