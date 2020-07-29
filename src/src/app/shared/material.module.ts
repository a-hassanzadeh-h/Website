import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [MatProgressBarModule, MatInputModule, MatFormFieldModule],
  exports: [MatProgressBarModule, MatInputModule, MatFormFieldModule],
})
export class MaterialModule {}
