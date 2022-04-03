import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'accessories',
    loadChildren: () => import('./pages/accessories/accessories.module').then(m => m.AccessoriesPageModule)
  },
  {
    path: 'plants',
    loadChildren: () => import('./pages/plants/plants.module').then( m => m.PlantsPageModule)
  },
  {
    path: 'addplant',
    loadChildren: () => import('./pages/addplant/addplant.module').then( m => m.AddplantPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
