import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { HighlightComponent } from './highlight/highlight.component';

@NgModule({
  declarations: [CarouselComponent, HighlightComponent],
  imports: [CommonModule],
  exports: [CarouselComponent, HighlightComponent],
})
export class SharedModule {}
