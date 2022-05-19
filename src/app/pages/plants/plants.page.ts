import { Component, OnInit } from '@angular/core';
import {ApiPlantsService} from '../../services/api-plants.service';
import {ModelPlant} from '../../models/model-plant';
import {NavigationExtras, Router} from '@angular/router';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.page.html',
  styleUrls: ['./plants.page.scss'],
})
export class PlantsPage implements OnInit {

  public title = 'Plants';
  public plantList!: ModelPlant[];
  public plant!: ModelPlant;
  public filterTerm = '';

  constructor(
    private menu: MenuController,
    private servicePlants: ApiPlantsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.menu.enable(
        true,
        'second'
    );
    this.servicePlants.findAll().subscribe(resList => {
      this.plantList = resList;
      this.plantList.sort((plantA, plantB) => plantA.name.localeCompare(plantB.name));
    });
    this.plant = new ModelPlant();
  }

  // Méthode d'ajout directe avant de passer par le composant addplant
  // addplant(p: ModelPlant) {
  //   this.plantList.push({...p});
  //   console.log('on Add plant :', p);
  // }

  onAddPlantPage(): void {
    this.router.navigate(['/addplant']);
  }

  onHomePage(): void {
    this.router.navigate(['/home']);
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

  ionViewWillLeave() {
    this.menu.close();
  }

  ionViewDidLeave(){
    this.ngOnInit();
  }

  onEditPage(p: ModelPlant) {
    console.log('click on Edit plant :', p);
    const navigationExtras: NavigationExtras = {
      state: {
        currentPlant: p
      }
    };
    this.router.navigateByUrl('/addplant', navigationExtras);
  }

  onDelete(p: ModelPlant) {
    this.servicePlants.delete(p).subscribe( () => {
      console.log('delete plant :', p);
      this.ngOnInit();
    });
  }

  onLike(p: ModelPlant) {
    p.likes ++;
    this.servicePlants.update(p).subscribe(() => {
      console.log('click on Heart icon');
    });
  }

  filterPlantList() {
    this.servicePlants.findAll().subscribe(pList => {
      this.plantList = pList.filter( plant =>
        plant.name.toLowerCase().includes(this.filterTerm.toLowerCase().trim()) ||
        plant.sellerAlias.toLowerCase().includes(this.filterTerm.toLowerCase().trim())
      );
    });
  }
}
