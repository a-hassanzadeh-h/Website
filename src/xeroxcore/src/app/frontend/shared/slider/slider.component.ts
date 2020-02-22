import { Component, OnInit, Input } from '@angular/core';
import { ISliderContent } from '../../Models/Interface/ISliderContent';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() slides: ISliderContent[];
  constructor() {}

  ngOnInit(): void {}
}
