import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { HighlightComponent } from './highlight/highlight.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [CarouselComponent, HighlightComponent],
  imports: [CommonModule, CoreModule],
  exports: [CarouselComponent, HighlightComponent],
})
export class SharedModule {}
