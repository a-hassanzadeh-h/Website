import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ArticlesComponent } from './articles/articles.component';
import { FrontendComponent } from './frontend.component';
import { Error404Component } from '../shared/errors/error404/error404.component';

const frontendRoutes: Routes = [
  {
    path: '',
    component: FrontendComponent,
    children: [
      { path: 'home', component: HomeComponent, data: { state: 'home' } },
      {
        path: 'downloads',
        component: DownloadsComponent,
        data: { state: 'downloads' }
      },
      {
        path: 'articles',
        component: ArticlesComponent,
        data: { state: 'articles' }
      },
      { path: '**', component: Error404Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(frontendRoutes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule {}
