import { Component } from '@angular/core';
import { NavBar } from '../layout/nav-bar/nav-bar';
import { HeroSection } from "../hero-section/hero-section";
import { FeaturedProductsList } from "../featured-products-list/featured-products-list";
import { ButtonGroup } from "../button-group/button-group";

@Component({
  selector: 'app-home-page',
  imports: [HeroSection, FeaturedProductsList, ButtonGroup],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
