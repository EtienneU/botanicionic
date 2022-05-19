import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ModelAccessory} from '../../models/model-accessory';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {ApiAccessoriesService} from '../../services/api-accessories.service';

@Component({
  selector: 'app-addaccessory',
  templateUrl: './addaccessory.page.html',
  styleUrls: ['./addaccessory.page.scss'],
})
export class AddaccessoryPage implements OnInit {

  // accessoire envoyée depuis accessories.page.ts à travers le router (NavigationExtras, state)
  @Input() accessorytochange!: ModelAccessory;
  public accessory = new ModelAccessory();
  public addAccessoryForm!: FormGroup;
  accessoryNameCtrl!: FormControl;
  stockNumberCtrl!: FormControl;
  sellerAliasCtrl!: FormControl;

  constructor(
    private service: ApiAccessoriesService,
    private router: Router,
    private fb: FormBuilder,
    private alertController: AlertController
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.accessorytochange = this.router.getCurrentNavigation().extras.state.currentAccessory;
    }
  }

  ngOnInit() {
    if (this.accessorytochange) {
      this.accessoryNameCtrl = this.fb.control(this.accessorytochange.name, Validators.required);
      this.stockNumberCtrl = this.fb.control(this.accessorytochange.stockNumber, Validators.required);
      this.sellerAliasCtrl = this.fb.control(this.accessorytochange.sellerAlias, Validators.required);
    } else {
      this.accessoryNameCtrl = this.fb.control('', Validators.required);
      this.stockNumberCtrl = this.fb.control('', Validators.required);
      this.sellerAliasCtrl = this.fb.control('', Validators.required);
    }

    this.addAccessoryForm = this.fb.group({
      accessoryName: this.accessoryNameCtrl,
      stockNumber: this.stockNumberCtrl,
      sellerAlias: this.sellerAliasCtrl
    });
  }

  onSubmit() {
    if (this.addAccessoryForm.valid) {
      const a = new ModelAccessory();
      a.name = this.accessoryNameCtrl.value;
      a.stockNumber = this.stockNumberCtrl.value;
      a.sellerAlias = this.sellerAliasCtrl.value;

      // Si c'est un edit d'un accessoire existant
      if (this.accessorytochange) {
        a.id = this.accessorytochange.id;
        this.service.update(a).subscribe( () => {
          this.router.navigate(['/accessories']);
        });
        // Sinon, c'est un ajout d'un nouvel accessoire
      } else {
        this.service.add(a).subscribe( () => {
          this.router.navigate(['/accessories']);
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
    this.router.navigate(['accessories']);
  }
}
