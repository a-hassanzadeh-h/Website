import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const errorRoutes: Routes = [
  {
    path: 'notfound',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(errorRoutes)
  ],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
