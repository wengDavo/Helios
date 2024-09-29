import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    title: 'Home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'products',
    title: 'Products',
    loadChildren: () =>
      import('./modules/product-listing/product-listing.module').then((m) => m.ProductListingModule),
    
  },
];
