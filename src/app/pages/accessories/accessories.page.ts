import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {ModelAccessory} from '../../models/model-accessory';
import {ApiAccessoriesService} from '../../services/api-accessories.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.page.html',
  styleUrls: ['./accessories.page.scss'],
})
export class AccessoriesPage implements OnInit {

  public accessoryList!: ModelAccessory[];
  public accessory!: ModelAccessory;
  public filterTerm: '';

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

  ionViewWillEnter() {
    this.ngOnInit();
  }

  onEditPage(accessory: ModelAccessory) {
    console.log('click on Edit accessory :', accessory);
    const navigationExtras: NavigationExtras = {
      state: {
        currentAccessory: accessory
      }
    };
    this.router.navigateByUrl('/addaccessory', navigationExtras);
  }

  onDelete(accessory: ModelAccessory) {
    this.serviceAccessories.delete(accessory).subscribe( () => {
      console.log('delete accessory :', accessory);
      this.ngOnInit();
    });
  }

  onLike(accessory: ModelAccessory) {
    accessory.likes ++;
    this.serviceAccessories.update(accessory).subscribe(() => {
      console.log('click on Heart icon');
    });
  }

  filterAccessoryList() {
    this.serviceAccessories.findAll().subscribe(pList => {
      this.accessoryList = pList.filter( accessory =>
        accessory.name.toLowerCase().includes(this.filterTerm.toLowerCase().trim()) ||
        accessory.sellerAlias.toLowerCase().includes(this.filterTerm.toLowerCase().trim())
      );
    });
  }
}
