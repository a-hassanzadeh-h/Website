import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { ISliderContent } from '../../Models/Interface/ISliderContent';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit {
  @Input() backgroundText = 'XEROXCORE';
  @Input() slides: ISliderContent[];
  constructor() {}

  ngOnInit(): void {}
}
