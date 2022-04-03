import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-second',
  templateUrl: './menu-second.component.html',
  styleUrls: ['./menu-second.component.scss'],
})
export class MenuSecondComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  onHomePage() {
    this.router.navigate(['/home']);
  }

  onPlantsPage() {
    this.router.navigate(['/plants']);
  }

  onAccessoriesPage() {
    this.router.navigate(['/accessories']);
  }
}
