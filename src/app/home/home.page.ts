import {Component, OnInit} from '@angular/core';
import {AlertController, MenuController, PopoverController} from '@ionic/angular';
import {MenuComponent} from '../menu/menu.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public promptEvent: any = null;

  // Injectionde de dépendances --> dans le constructeur
  constructor(private menu: MenuController,
              private popover: PopoverController,
              private alertController: AlertController,
              private router: Router) {
    // L'event 'beforeinstallprompt' est émis à chaque chargement de la page home
    // et que l'application n'a pas encore été installée. S'il est émis, promptEvent est mis à jour
    window.addEventListener(
      'beforeinstallprompt', event => {
        this.promptEvent = event;
      });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    //    Avant l'utilisation du menu déroulant (PopOverController et openMenu()),
    //    on choisissait le menu ('first' ou 'second', par exemple) :
    // this.menu.enable(
    //   true,
    //   'first'
    // );
  }

  openMenu(myevent: MouseEvent): void {
    // création du menu popup en précisant son contenu
    this.popover.create({
      component: MenuComponent,
      showBackdrop: true,
      cssClass: 'my-menue-class', // facultatif
      event: myevent,
      componentProps: { // Indication des propriétés d'initialisation du composant
        myprop: 'Botanica'
      }
    }).then(popoverElement => {
      popoverElement.present();
      popoverElement.onDidDismiss().then(res => {
        console.log('Menu closing', res);
        switch (res.data) {
          case 'Home':
            this.ngOnInit();
            break;
          case 'Plants':
            this.onPlantsPage();
            break;
          case 'Accessories':
            this.onAccessoriesPage();
            break;
          default:
            this.router.navigate(['/home']).then(r => {
              console.log('successful navigation to HomePage:', r);
            }, err => {
              console.log('navigation error :', err);
            });
        }
      });
    });
  }

  async openAlert() {
    const monMessage = 'Botanica Alert';
    const alert = await this.alertController.create({
      header: 'Alert Box',
      message: monMessage,
      buttons: ['OK'],
    });
    await alert.present();
    await alert.onDidDismiss();
  }

  // Au clic sur le bouton d'installation, cette méthode s'exécute.
  onInstall(){
    this.promptEvent.prompt();
  }

  onPlantsPage() {
    this.router.navigate(['plants']).then(r => {
      console.log('successful navigation to PlantsPage:', r);
    }, err => {
      console.log('navigation error :', err);
    });
  }

  onAccessoriesPage() {
    this.router.navigate(['accessories']).then(r => {
      console.log('successful navigation to AccessoriesPage:', r);
    }, err => {
      console.log('navigation error :', err);
    });
  }
}
