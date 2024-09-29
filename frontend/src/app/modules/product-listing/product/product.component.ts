import { Component, Input } from '@angular/core';
import { productI } from './product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  template: `
    <article class="grid space-y-2">
      <figure>
        <img [src]="data.image_url" alt="" width="250" height="250" />
      </figure>
      <div class="text-xs grid gap-y-1">
        <p class="text-tertiary-red">{{data.status}}</p>
        <p>{{data.name}}</p>
        <p class="text-primary-grey">{{data.category}}</p>
        <p class="text-primary-grey">{{data.colors_number}} Colour</p>
        <p>{{data.price}}</p>
      </div>
    </article>
  `,
  styles: ``,
})
export class ProductComponent {
  @Input() data!: productI;
}
