import { NgModule } from '@angular/core';
import { MessageboxComponent } from './messagebox/messagebox.component';
import { Error404Component } from './errors/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MessageboxComponent, Error404Component],
  imports: [HttpClientModule],
  exports: [MessageboxComponent]
})
export class GlobalSharedModule {}
