import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {ModelAccessory} from '../../models/model-accessory';
import {ApiAccessoriesService} from '../../services/api-accessories.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.page.html',
  styleUrls: ['./accessories.page.scss'],
})
export class AccessoriesPage implements OnInit {

  public accessoryList!: ModelAccessory[];
  public accessory!: ModelAccessory;

  constructor(
    private menu: MenuController,
    private serviceAccessories: ApiAccessoriesService,
    private router: Router
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

  onAddAccessoryPage(): void {
    this.router.navigate(['/addaccessory']);
  }

  onHomePage() {
    this.router.navigate(['/home']);
  }
}
