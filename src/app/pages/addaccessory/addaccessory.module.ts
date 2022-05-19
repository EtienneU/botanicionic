import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddaccessoryPageRoutingModule } from './addaccessory-routing.module';

import { AddaccessoryPage } from './addaccessory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddaccessoryPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddaccessoryPage]
})
export class AddaccessoryPageModule {}
