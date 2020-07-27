import { NgModule } from "@angular/core";
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
    declarations: [CarouselComponent],
    exports: [CarouselComponent]
})
export class SharedModule { };