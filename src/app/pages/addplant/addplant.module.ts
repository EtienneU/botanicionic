import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddplantPageRoutingModule } from './addplant-routing.module';

import { AddplantPage } from './addplant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddplantPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddplantPage]
})
export class AddplantPageModule {}
