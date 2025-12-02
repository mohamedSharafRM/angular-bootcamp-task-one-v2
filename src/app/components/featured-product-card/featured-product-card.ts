import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { ZardButtonComponent  } from '@shared/components/button/button.component';
import { ZardCardComponent } from '@shared/components/card/card.component';
import { ZardIconComponent } from '@shared/components/icon/icon.component';
import { IFreaturedProduct } from 'src/app/models/ifreatured-product';

@Component({
  selector: 'app-featured-product-card',
  imports: [CurrencyPipe,ZardButtonComponent , ZardCardComponent, ZardIconComponent],
  templateUrl: './featured-product-card.html',
  styleUrl: './featured-product-card.css',
})
export class FeaturedProductCard {
  product= input.required<IFreaturedProduct>();
}
