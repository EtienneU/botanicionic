import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddaccessoryPage } from './addaccessory.page';

const routes: Routes = [
  {
    path: '',
    component: AddaccessoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddaccessoryPageRoutingModule {}
