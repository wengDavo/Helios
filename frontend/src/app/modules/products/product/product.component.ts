import { Component, Input } from '@angular/core';
// import { productI } from './product.interface';
import { productI } from '../../../shared/services/product/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  template: `
    <article class="grid space-y-2 relative">
      <figure>
        <img
          [src]="data.images.main"
          alt=""
          width="348"
          height="348"
          class="w-[250px] h-[250px]"
          loading="lazy"
        />
      </figure>
      <div class="text-xs grid gap-y-1 ">
        <p class="text-primary-red helvetice-nue-light">
          {{ data.info.status }}
        </p>
        <p>{{ data.info.name }}</p>
        <p class="text-primary-grey">{{ data.info.category }}</p>
        <p class="text-primary-grey">{{ data.info.color.available_number }} Colour</p>
        <p class="absolute left-2 top-2 helvetice-nue-light">
          {{ data.info.price }}
        </p>
      </div>
    </article>
  `,
  styles: ``,
})
export class ProductComponent {
  @Input() data!: productI;
}
