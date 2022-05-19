import {Component, Input, OnInit} from '@angular/core';
import {ApiPlantsService} from '../../services/api-plants.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ModelPlant} from '../../models/model-plant';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-addplant',
  templateUrl: './addplant.page.html',
  styleUrls: ['./addplant.page.scss'],
})
export class AddplantPage implements OnInit {

  // donnée envoyée depuis plants.page.ts à travers le router (NavigationExtras, state)
  @Input() planttochange!: ModelPlant;
  public plant = new ModelPlant();
  public addPlantForm!: FormGroup;
  plantNameCtrl!: FormControl;
  stockNumberCtrl!: FormControl;
  sellerAliasCtrl!: FormControl;

  constructor(
    private service: ApiPlantsService,
    private router: Router,
    private fb: FormBuilder,
    private alertController: AlertController
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.planttochange = this.router.getCurrentNavigation().extras.state.currentPlant;
    }
  }

  ngOnInit() {
    if (this.planttochange) {
      this.plantNameCtrl = this.fb.control(this.planttochange.name, Validators.required);
      this.stockNumberCtrl = this.fb.control(this.planttochange.stockNumber, Validators.required);
      this.sellerAliasCtrl = this.fb.control(this.planttochange.sellerAlias, Validators.required);
    } else {
      this.plantNameCtrl = this.fb.control('', Validators.required);
      this.stockNumberCtrl = this.fb.control('', Validators.required);
      this.sellerAliasCtrl = this.fb.control('', Validators.required);
    }

    this.addPlantForm = this.fb.group({
      plantName: this.plantNameCtrl,
      stockNumber: this.stockNumberCtrl,
      sellerAlias: this.sellerAliasCtrl
    });
  }

  onSubmit() {
    if (this.addPlantForm.valid) {
      const p = new ModelPlant();
      p.name = this.plantNameCtrl.value;
      p.stockNumber = this.stockNumberCtrl.value;
      p.sellerAlias = this.sellerAliasCtrl.value;

      // Si c'est un edit d'une plante existante
      if (this.planttochange) {
        p.id = this.planttochange.id;
        this.service.update(p).subscribe( () => {
          this.router.navigate(['/plants']);
        });
      // Sinon, c'est un ajout d'une nouvelle plante
      } else {
        this.service.add(p).subscribe( () => {
          this.router.navigate(['/plants']);
        });
      }
    } else {
      this.invalidInputAlert();
    }
  }

  async invalidInputAlert() {
    const invalidMessage = 'One input entered or more is not valid';
    const alert = await this.alertController.create({
      header: 'Invalid data entered',
      message: invalidMessage,
      buttons: ['OK'],
    });
    await alert.present();
    await alert.onDidDismiss();
  }

  onCancel() {
    this.router.navigate(['plants']);
  }
}
