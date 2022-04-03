import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
//Penser à ajouter MenuComponent aux déclarations de home.module.ts
export class MenuComponent implements OnInit {

  public myprop!: string;
  public items = ['Home', 'Plants', 'Accessories'];

  constructor(
    private popover: PopoverController,
  ) { }

  ngOnInit() {}

  //dismiss() renverra la valeur de event a HomePage
  closePopover(event): void {
    this.popover.dismiss(event);
  }

}
