import { Component, Input } from '@angular/core';
import { productI } from '../../../shared/services/product/product.interface';

@Component({
  selector: 'app-best-item',
  standalone: true,
  imports: [],
  template: `
    <!-- <article class="w-fit grid gap-2 min-w-[341px]"> -->
    <article class="grid gap-2 min-w-[300px] w-[300px]">
      <figure>
        <img [src]="data.images.main" alt="an item" width="441" height="441" loading="lazy" />
      </figure>
      <div class="flex justify-between ">
        <div>
          <p>{{ data.info.name }}</p>
          <p class="text-primary-grey text-xs">{{ data.info.category }}</p>
        </div>
        <p>{{ data.info.price }}</p>
      </div>
    </article>
  `,
  styles: ``,
})
export class BestItemComponent {
  @Input() data!: productI;
}
