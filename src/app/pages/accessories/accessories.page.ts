import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {ModelAccessory} from '../../models/model-accessory';
import {ApiAccessoriesService} from '../../services/api-accessories.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.page.html',
  styleUrls: ['./accessories.page.scss'],
})
export class AccessoriesPage implements OnInit {

  // public accessoryList = [
  //   { name: 'Seal', likes: 12, id: 58744 }
  //   ];
  public accessoryList!: ModelAccessory[];
  public accessory!: ModelAccessory;

  constructor(
    private menu: MenuController,
    private serviceAccessories: ApiAccessoriesService,
  ) { }

  ngOnInit() {
    this.menu.enable(
      true,
      'second'
    );
    this.serviceAccessories.findAll().subscribe(resList => {
      this.accessoryList = resList;
    });
    this.accessory = new ModelAccessory();
  }

  ionViewWillLeave() {
    this.menu.close();
  }

}
