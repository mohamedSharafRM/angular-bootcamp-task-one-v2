import { Component } from '@angular/core';
import { ZardButtonComponent } from '@shared/components/button/button.component';
import { ZardIconComponent } from '@shared/components/icon/icon.component';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  imports: [ZardIconComponent, ZardButtonComponent, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

}
