import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const errorRoutes: Routes = [
  {
    path: 'notfound',
    component: NotfoundComponent,
    data: { state: 'notfound' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(errorRoutes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
