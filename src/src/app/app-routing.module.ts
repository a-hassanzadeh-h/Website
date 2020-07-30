import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    data: { state: 'home' },
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: { state: 'products' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { state: 'contact' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { state: 'about' },
  },
  {
    path: 'legal/:id',
    component: LegalComponent,
    data: { state: 'legal' },
  },
  {
    path: '**',
    redirectTo: '/notfound',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
