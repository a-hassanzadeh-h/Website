import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/core/models/language.model';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss'],
})
export class HighlightComponent implements OnInit {
  constructor(public language: Language) {}

  ngOnInit(): void {}
}
