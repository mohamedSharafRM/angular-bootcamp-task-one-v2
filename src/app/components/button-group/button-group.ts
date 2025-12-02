import { Component, input } from '@angular/core';
import { ZardButtonComponent } from '@shared/components/button/button.component';
import { ZardIconComponent } from '@shared/components/icon/icon.component';
import { FEATURED_PRODUCTS, IFreaturedProduct } from 'src/app/models/ifreatured-product';

@Component({
  selector: 'app-button-group',
  imports: [ZardButtonComponent , ZardIconComponent],
  templateUrl: './button-group.html',
  styleUrl: './button-group.css',
})
export class ButtonGroup {
  isloading : boolean = false;
  products : IFreaturedProduct[] = FEATURED_PRODUCTS;
}
