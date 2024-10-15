import { Component, Input } from '@angular/core';
import { productI } from '../../../shared/services/product/product.interface';

@Component({
  selector: 'app-gear-item',
  standalone: true,
  imports: [],
  template: `
    <article class="w-fit grid gap-2 min-w-[300px]">
      <figure>
        <img [src]="data.images.main" alt="an item" width="300" height="300" loading="lazy" />
      </figure>
      <div class="flex justify-between ">
        <div class="text-sm">
          <p>{{ data.info.name }}</p>
          <p class="text-primary-grey text-xs">{{ data.info.category }}</p>
          <p class="text-primary-grey text-xs">{{ data.info.type }}</p>
        </div>
        <p>{{ data.info.price }}</p>
      </div>
    </article>
  `,
  styles: ``,
})
export class GearItemComponent {
  @Input() data: productI;
}
